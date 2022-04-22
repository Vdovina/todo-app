import fs from 'fs';

export function getData(fileName, type) {
  return new Promise(function(resolve, reject) {
    fs.readFile(fileName, type, (err, data) => {
        err ? reject(err) : resolve(data);
    });
  });
};

export function saveData(fileName, data) {
  return new Promise(function(resolve, reject) {
    fs.writeFile(fileName, data, (err, data) => {
        err ? reject(err) : resolve(data);
    });
  });
};