const datadabase = 'BD3-NoSQL-AtlasMongoDB';
const collection = 'bd3-nosql-atv1';
use(datadabase);
db.createCollection(collection);
db['bd3-nosql-atv1'].updateOne(
    {codigo:'1'},
    {$set:{cpf:'000000000-8', 
        nome:"Carlos Forte", 
        rg:'0000000-8'}})