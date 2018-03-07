const fs = require("fs");
const path = require("path");
const envBuild = require("../config/.env.sample.js");

const buildEnv = () => {
<<<<<<< HEAD
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
=======
  _.each(envVariables, (value, key) => {
    fs.writeFileSync(`./${key}/.env`, '')
    createENVFile(key, value);
  });
}
>>>>>>> bca9b6a8ddf3b7589f2be503ca5e918fdbe3358a

buildEnv();
