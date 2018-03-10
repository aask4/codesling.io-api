import axios from 'axios';

import { success, error } from './lib/log';
import {
  serverInitialState,
  serverChanged,
  serverLeave,
  serverRun,
  serverMessage,
  serverJoined,
  serverDuelChat,
  serverDuelUpdate
} from './serverEvents';

/**
 *
 *  Client emissions (server listeners)
 *
 *  more on socket emissions:
 *  @url {https://socket.io/docs/emit-cheatsheet/}
 *
 *  @param room is an ES6 Map, containing { id, state }
 *  @url {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map}
 *
 */
const clientReady = ({ io, client, room }, payload) => {
  success('client ready heard');
  serverInitialState({ io, client, room }, payload);
};

const clientUpdate = ({ io, client, room }, payload) => {
  const { text, email } = payload;
  success('client update heard. payload.text = ', payload);
  room.set('text', text);
  room.set('email', email);
  serverChanged({ io, client, room });
};

const clientDisconnect = ({ io, room }) => {
  success('client disconnected');
  serverLeave({ io, room });
};

const clientRun = async ({ io, room }, payload) => {
  success('running code from client. room.get("text") = ', room.get('text'));
  const { text, email, challenge_id, challenge_title } = payload;
  const url = process.env.CODERUNNER_SERVICE_URL;
  const testCase = await axios.get(`http://localhost:3396/api/testCases/${challenge_id}`);
  const title = `const func = ${challenge_title};`;
  const input = text + title + testCase.data.rows[0].content;
  try {
    const { data } = await axios.post(`${url}/submit-code`, { code: input });
    const stdout = data;
    serverRun({ io, room }, { stdout, email });
  } catch (e) {
    success('error posting to coderunner service from socket server. e = ', e);
  }
};

const clientMessage = async ({ io, room }, payload) => {
  success('client message heard');
  const url = process.env.REST_SERVER_URL;
  try {
    const { data } = await axios.post(`${url}/messages/`, payload);
    serverMessage({ io, room }, data);
  } catch (err) {
    error('error saving message to the database. e = ', err);
  }
};

const clientDuelChat = async ({ io, room }, payload) => {
  success('clientDuelChat heard');
  const url = process.env.REST_SERVER_URL;
  try {
    const { data } = await axios.get(`${url}/api/users/fetchUserInfo/${payload.id}`);
    const message = data.rows[0].username + ': ' + payload.msg;
    await serverDuelChat({ io, room }, message);
  } catch (err) {
    error('clientDuelChat event error: ', err)
  }
};

const clientOpponent = async ({io, room}) => {
  console.log('WE ARE HERE WE ARE HERE')
  serverJoined({io, room});
}
const addopenDuels = async({io, room}) => {
  console.log('inside of addopenDuels')
  serverDuelUpdate({io, room});
}

const clientEmitters = {
  'client.ready': clientReady,
  'client.update': clientUpdate,
  'client.disconnect': clientDisconnect,
  'client.run': clientRun,
  'client.message': clientMessage,
  'client.opponent': clientOpponent,
  'client.duelChat': clientDuelChat,
  'addOpenDuels': addopenDuels
};

export default clientEmitters;
