const fs = require("fs");
const gitRev = require("git-rev-sync");
const version = function() {
  var path = "GIT_SHORT_COMMIT_ID";
  if (fs.existsSync(path)) {
    return fs.readFileSync(path, "utf-8").trim();
  } else {
    return gitRev.short();
  }
};

module.exports = { version: version };
