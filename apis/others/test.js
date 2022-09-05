const res = require("express/lib/response")

module.exports = {
    path: '/test',
    method: 'get',
    execute: async (req, res) => {
        res.send({test: true})
    }
}