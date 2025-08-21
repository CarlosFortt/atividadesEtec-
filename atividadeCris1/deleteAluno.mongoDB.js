const datadabase = 'BD3-NoSQL-AtlasMongoDB';
const collection = 'bd3-nosql-atv1';
use(datadabase);
db.createCollection(collection);

db['bd3-nosql-atv1'].deleteOne({codigo: '1'});