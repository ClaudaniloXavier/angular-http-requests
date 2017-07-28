const repository = require('./heroiRepository');

module.exports = {
    inserirHeroi,
    alterarHeroi,
    listarHeroi,
    listarHeroiPorId,
    excluirHeroi,
    listarSuperPoder,
    listarCor
};

async function inserirHeroi(req, res) {
    const params = {
        nome: req.body.nome,
        idade: req.body.idade,
        idCor: req.body.idCor,
        idSuperPoder: req.body.idSuperPoder
    };
    try {
        let data = await repository.inserirHeroi(params);

       return res.json(data)

    } catch (e) {
        console.log(e);
        return e
    }
}

async function alterarHeroi(req, res) {
    const params = {
        idHeroi: req.params.id,
        nome: req.body.nome,
        idade: req.body.idade,
        idCor: req.body.idCor,
        idSuperPoder: req.body.idSuperPoder
    };
    try {
        let data = await repository.alterarHeroi(params);

        return res.json(data)

    } catch (e) {
        console.log(e);
        return e
    }
}

async function listarHeroi(req, res) {
    const params = {
        pesquisa: req.query.pesquisa,
        pagina: req.query.pagina,
        linhas: req.query.linhas
    };
    try {
        let data = await repository.listarHeroi(params);

        return res.json(data)

    } catch (e) {
        console.log(e);
        return e
    }
}

async function listarHeroiPorId(req, res) {
    const params = {
        idHeroi: req.params.id
    };
    try {
        let data = await repository.listarHeroiPorId(params);

        return res.json(data)

    } catch (e) {
        console.log(e);
        return e
    }
}

async function excluirHeroi(req, res) {
    const params = {
        idHeroi: req.params.id
    };
    try {
        let data = await repository.excluirHeroi(params);

        return res.json(data)

    } catch (e) {
        console.log(e);
        return e
    }
}

async function listarSuperPoder(req, res) {
    try {
        let data = await repository.listarSuperPoder();
        return res.json(data)

    } catch (e) {
        console.log(e);
        return e
    }
}

async function listarCor(req, res) {
    try {
        let data = await repository.listarCor();
        return res.json(data)

    } catch (e) {
        console.log(e);
        return e
    }
}