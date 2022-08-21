const config = require('./config');
const Server = require('./server');

function main() {
    console.log(`Environment: ${config.get('env')}`);

    const server = new Server();
    server.run(config.get('port'));
}

main();
