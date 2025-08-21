const datadabase = 'BD3-NoSQL-AtlasMongoDB';
const collection = 'bd3-nosql-atv1';
use(datadabase)

db['bd3-nosql-atv1'].insertMany(
    [
        {
            "cod_aluno": 1,
            "cod_turma": 3,
            "nome": "Carla Mendes",
            "cpf": "392847156-0",
            "rg": "4527812-3",
            "telefone_aluno": "11984567231",
            "telefone_responsavel": "11975432890",
            "email": "carla.mendes@etec.sp.gov.br",
            "data_nascimento": "2007-09-23"
        },
    {
        "cod_aluno": 2,
        "cod_turma": 5,
        "nome": "João Vitor Pereira",
        "cpf": "872634159-5",
        "rg": "6342871-4",
        "telefone_aluno": "11999887766",
        "telefone_responsavel": "11988776655",
        "email": "joao.pereira@etec.sp.gov.br",
        "data_nascimento": "2006-02-11"
    },
    {
        "cod_aluno": 3,
        "cod_turma": 7,
        "nome": "Beatriz Rocha",
        "cpf": "543216789-8",
        "rg": "3879123-1",
        "telefone_aluno": "11987654320",
        "telefone_responsavel": "11976543219",
        "email": "beatriz.rocha@etec.sp.gov.br",
        "data_nascimento": "2005-12-30"
    },
    {
        "cod_aluno": 4,
        "cod_turma": 2,
        "nome": "Felipe Souza",
        "cpf": "321456987-4",
        "rg": "5826314-5",
        "telefone_aluno": "11992345678",
        "telefone_responsavel": "11981234567",
        "email": "felipe.souza@etec.sp.gov.br",
        "data_nascimento": "2006-08-18"
    },
    {
        "cod_aluno": 5,
        "cod_turma": 4,
        "nome": "Juliana Lima",
        "cpf": "678945123-9",
        "rg": "7412589-6",
        "telefone_aluno": "11983456123",
        "telefone_responsavel": "11972345678",
        "email": "juliana.lima@etec.sp.gov.br",
        "data_nascimento": "2007-01-09"  
    },
    {
        "cod_aluno": 6,
        "cod_turma": 1,
        "nome": "Rafael Almeida",
        "cpf": "159753486-2",
        "rg": "6987412-7",
        "telefone_aluno": "11988887777",
        "telefone_responsavel": "11977778888",
        "email": "rafael.almeida@etec.sp.gov.br",
        "data_nascimento": "2005-07-14"
    },
    {
        "cod_aluno": 7,
        "cod_turma": 6,
        "nome": "Isabela Martins",
        "cpf": "487596321-6",
        "rg": "3547896-3",
        "telefone_aluno": "11990909090",
        "telefone_responsavel": "11980808080",
        "email": "isabela.martins@etec.sp.gov.br",
        "data_nascimento": "2006-11-25"
    },
    {
        "cod_aluno": 8,
        "cod_turma": 8,
        "nome": "Daniel Ferreira",
        "cpf": "963258741-1",
        "rg": "7854123-2",
        "telefone_aluno": "11991234567",
        "telefone_responsavel": "11981234567",
        "email": "daniel.ferreira@etec.sp.gov.br",
        "data_nascimento": "2007-03-05"
    },
    {
        "cod_aluno": 9,
        "cod_turma": 2,
        "nome": "Larissa Costa",
        "cpf": "741852963-0",
        "rg": "6359874-8",
        "telefone_aluno": "11985673412",
        "telefone_responsavel": "11976584321",
        "email": "larissa.costa@etec.sp.gov.br",
        "data_nascimento": "2006-06-10"
    },
    {
        "cod_aluno": 10,
        "cod_turma": 3,
        "nome": "Gabriel Santos",
        "cpf": "852963741-7",
        "rg": "4798321-5",
        "telefone_aluno": "11993456789",
        "telefone_responsavel": "11984567890",
        "email": "gabriel.santos@etec.sp.gov.br",
        "data_nascimento": "2005-10-12"
    }
    ]
)