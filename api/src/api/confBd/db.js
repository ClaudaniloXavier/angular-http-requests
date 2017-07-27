const config = require('../../api/confBd/config');
const pg = require('pg-promise')()(config);

module.exports = {
    json: async function (query, params) {
        let result = await pg.proc(query, params);

        return result ? result[Object.keys(result)[0]] : null;
    },
    query: pg.query,
    proc: pg.proc,
    func: pg.func
};
