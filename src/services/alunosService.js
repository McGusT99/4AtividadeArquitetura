const alunosModel = require('../models/alunosModel');

function addStar(aluno){
    aluno = aluno+'*';
    return aluno
}
function novoAluno(aluno){
    alunosModel.postAddAluno(aluno)
}


function getAlunosEstrela(){
    const alunos  = alunosModel.getAllAlunos();
    const alunosEstrela = alunos.map(addStar);
    return alunosEstrela;
}
function postAlunosNovos(aluno){
    const {nome} = aluno;
    novoAluno(nome);
}

module.exports = {
    getAlunosEstrela,
    postAlunosNovos
};