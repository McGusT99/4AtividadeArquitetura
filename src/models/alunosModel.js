const alunos= ['João','Maria','José'];
function getAllAlunos(){
    return alunos;
}
function postAddAluno(aluno){
    alunos.push(aluno);
}

module.exports = {
    getAllAlunos,
    postAddAluno
}