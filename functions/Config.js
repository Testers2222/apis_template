class Config {
    constructor(value, key, app){
        app.set(key, value);
    }
}

module.exports = { Config };