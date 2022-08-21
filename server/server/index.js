const express = require('express');
const apiRouter = require('../routers/api-router');

class Server {
    constructor() {
        this.app = express();
        this.setup();
    }

    setup() {
        this.app.use(express.json());
        this.app.use('/api', apiRouter);
    }

    run(port) {
        this.server = this.app.listen(port, () => {
            console.log(`server running on port ${port}`);
        });
    }

    stop(done) {
        this.server.close(done);
    }
}

module.exports = Server;
