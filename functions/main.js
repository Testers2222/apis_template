const { CreateServer } = require('./CreateServer');
const server = new CreateServer('./apis', '../apis');
server.init();