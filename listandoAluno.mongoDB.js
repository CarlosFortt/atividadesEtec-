const datadabase = 'BD3-NoSQL-AtlasMongoDB';
const collection = 'bd3-nosql-atv1';
use(datadabase);
db.createCollection(collection);

//listando TODOS os alunos
db['bd3-nosql-atv1'].find();

//listando aluno pelo CPF
db['bd3-nosql-atv1'].find({"cpf":"872634159-5"});

//listando aluno sem mostrar o campo cod_aluno
db['bd3-nosql-atv1'].find({"cod_turma": 6,},{"_id":0,"cod_aluno":0});

//Listando aluno pelo CPF sem mostrar o campo "cod_aluno"
db['bd3-nosql-atv1'].find({"cpf":"872634159-5"},{"_id":0,"cod_aluno":0});