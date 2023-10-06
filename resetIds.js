const fs = require('fs');
const dbFile = 'db.json';

const jsonData = JSON.parse(fs.readFileSync(dbFile));
const collections = Object.keys(jsonData);

collections.forEach((collection) => {
  const data = jsonData[collection];
  const newData = data.map((item, index) => {
    item.id = index + 1;
    return item;
  });

  jsonData[collection] = newData;
});

fs.writeFileSync(dbFile, JSON.stringify(jsonData, null, 2));

console.log('IDs reatribuídos com sucesso!');
