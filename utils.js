const fs = require('fs');

const writeToFile = (path, data) => {
  fs.writeFileSync(path, JSON.stringify(data), 'utf-8', (err) =>
    console.log(err)
  );
};

module.exports = {
  writeToFile,
};
