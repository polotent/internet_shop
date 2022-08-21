const fs = require('fs/promises');
const path = require('path');
const Sequelize = require('sequelize');

const config = require('../../config');
const envConfigs = require('../config/config');
const envConfig = envConfigs[config.get('env')];

const basename = path.basename(__filename);

const sequelize = new Sequelize(envConfig.name, envConfig.user, envConfig.password, {
    host: envConfig.host,
    port: envConfig.port,
    dialect: envConfig.dialect
});

class Database {
    constructor() {
        this.models = {};
        this.initModels()
            .then(() => {
                this.applyAssociations();
            });
    }

    async initModels() {
        const filenames = await fs.readdir(__dirname);
        const modelFilenames = filenames.filter(filename => {
            return (filename !== basename) && (path.extname(filename) === '.js');
        }
        );

        await Promise.all(modelFilenames.map(async (modelFilename) => {
            const makeModel = require(path.join(__dirname, modelFilename));
            const model = makeModel(sequelize, Sequelize.DataTypes);
            this.models[model.name] = model;
        }));
    }

    async applyAssociations() {
        for (const modelName in this.models) {
            this.models[modelName].associate && this.models[modelName].associate(this.models);
        }
    }
}

module.exports = new Database();
