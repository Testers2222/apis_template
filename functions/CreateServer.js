const { Listen } = require('./Listen');
const { Config } = require('./Config');
const app = require('express')();
const fs = require('fs');

class CreateServer {

    /**
     * 
     * @param {String} path 
     * @param {String} required
     */
    constructor(path, required){
        this.path = path;
        this.required = required;
    }

    async init(){
        new Listen(8080, 'Apis connectées.', app);
        new Config(2, 'json spaces', app);

        const folders = fs.readdirSync(this.path);
        
        for (const folder of folders) {
            
            const files = fs.readdirSync(`${this.path}/${folder}`);

            for(const file of files){

                const {path, method, execute} = require(`${this.required}/${folder}/${file}`);

                console.log(path + ' chargé.');

                if(!path || !method || !execute) return;

                switch (method) {

                    case 'get': {
                        app.get(path, execute);
                    }
                    case 'post': {
                        app.post(path, execute);
                    }
                    case 'patch': {
                        app.patch(path, execute);
                    }
                    case 'put': {
                        app.put(path, execute);
                    }
                    case 'delete': {
                        app.delete(path, execute);
                    }

                }

            }

        }

    }
}

module.exports = { CreateServer };