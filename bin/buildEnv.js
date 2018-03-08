const fs = require('fs');
const _ = require('lodash');

const envVariables = require('../config/.env.sample');

const createENVFile = (directory, variables) => {
  _.each(variables, (variable) => {
    fs.appendFileSync(`./${directory}/.env`, variable + '\n');
  })
}

const buildEnv = () => {
<<<<<<< HEAD
  _.each(envVariables, (value, key) => {
    fs.writeFileSync(`./${key}/.env`, '')
    createENVFile(key, value);
  });
}
=======
  for (let pathname in envBuild) {
    fs.writeFileSync(__dirname + `/../${pathname}/.env`, "");
    envBuild[pathname].forEach(variable =>
      fs.appendFileSync(
        __dirname + `/../${pathname}/.env`,
        variable + "\n"
      )
    );
  }
};
>>>>>>> 1a869833e606b9080a89f55fe35c6f96581fa45b

buildEnv();
