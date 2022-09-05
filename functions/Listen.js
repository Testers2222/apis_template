class Listen {
    constructor(port, msg, app){
        app.listen(port, () => console.log(msg));
    }
}

module.exports = { Listen };