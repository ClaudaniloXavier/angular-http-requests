let db = require('../../api/confBd/db.js');

module.exports = {
    inserirHeroi,
    alterarHeroi,
    listarHeroi,
    listarHeroiPorId,
    excluirHeroi,
    listarSuperPoder,
    listarCor
};

async function inserirHeroi(params) {
    return db.json('Public.InserirHeroi', [
        params.nome,
        params.idade,
        params.idCor,
        params.idSuperPoder
    ]);
}

async function alterarHeroi(params) {
    return db.json('Public.AlterarHeroi', [
        params.idHeroi,
        params.nome,
        params.idade,
        params.idCor,
        params.idSuperPoder
    ]);
}

async function listarHeroi(params) {
    return db.func('Public.ListarHeroi', [
        params.pesquisa,
        params.pagina,
        params.linhas
    ]);
}

async function listarHeroiPorId(params) {
    return db.func('Public.ListarHeroiPorId', [
        params.idHeroi
    ]);
}

async function excluirHeroi(params) {
    return db.json('Public.ExcluirHeroi', [
        params.idHeroi
    ]);
}

async function listarSuperPoder() {
    return db.func('Public.ListarSuperPoderDropDown');
}

async function listarCor() {
    return db.func('Public.ListarCorDropDown');
}