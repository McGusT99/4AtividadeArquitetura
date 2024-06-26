const express = require('express')
const router = express.Router();
const alunosService = require('../services/alunosService');


router.get('/alunos', function (req, res) {
    alunosEstrela = alunosService.getAlunosEstrela();
    res.send(alunosEstrela);
});
router.post('/alunos', function (req, res){
    alunoNovo= req.body
    alunosService.postAlunosNovos(alunoNovo);
    res.send("Aluno cadastrado")
});

module.exports = router;