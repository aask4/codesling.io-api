import {
  createDatabase,
  createUserTable,
  createChallengeTable,
  createHistoryTable,
  createTestCaseTable,
  // createSabotageTable,
  createMessageTable,
  createFriendTable,
  createUsersChallengesTable,
  dropDatabase,
  dropUserTable,
  dropChallengeTable,
  dropHistoryTable,
  dropTestCaseTable,
  // dropSabotageTable,
  dropMessageTable,
  dropFriendTable,
  dropUsersChallengesTable,
  useDatabase,
  dropOpenDuelsTable,
  createOpenDuelsTable,
} from '../../lib/SQL';

const setup = async () => {
  //await dropDatabase();
  await dropOpenDuelsTable();
  await dropUsersChallengesTable();
  await dropHistoryTable();
  await dropTestCaseTable();
  await dropFriendTable();
  await dropMessageTable();
  await dropUserTable();
  await dropChallengeTable();
  // await dropSabotageTable();
  //await createDatabase();
  await createUserTable();
  await createChallengeTable();
  await createHistoryTable();
  await createTestCaseTable();
  await createFriendTable();
  await createUsersChallengesTable();
  // await createSabotageTable();
  await createMessageTable();
  await createOpenDuelsTable();
  process.exit();
};

setup();
