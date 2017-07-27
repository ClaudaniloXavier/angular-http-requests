const heroiController = require('../../core/heroi/heroiController');

module.exports = (app) => {

    app.route('/heroi')
        .post(heroiController.inserirHeroi)
        .put(heroiController.alterarHeroi)
        .get(heroiController.listarHeroi);


    app.route('/heroi/:id')
        .get(heroiController.listarHeroiPorId)
        .delete(heroiController.excluirHeroi);

    app.route('/superPoder')
        .get(heroiController.listarSuperPoder);

    app.route('/cor')
        .get(heroiController.listarCor);

};