const convict = require('convict');
convict.addFormat(require('convict-format-with-validator').ipaddress);

const config = convict({
    env: {
        doc: 'The application environment.',
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV'
    },
    port: {
        doc: 'The server port to bind.',
        format: 'port',
        default: 3000,
        env: 'PORT'
    },
    db: {
        host: {
            doc: 'Database connection host.',
            format: 'ipaddress',
            default: '127.0.0.1',
            env: 'DB_HOST'
        },
        port: {
            doc: 'Database connection port.',
            format: 'port',
            default: 3000,
            env: 'DB_PORT'
        },
        user: {
            doc: 'Database user.',
            format: String,
            default: 'admin',
            env: 'DB_USER'
        },
        password: {
            doc: 'Database user password.',
            format: String,
            default: 'password',
            env: 'DB_PASSWORD'
        },
        name: {
            doc: 'Database name.',
            format: String,
            default: 'internet_shop_db',
            env: 'DB_NAME'
        }
    }
});

const path = require('path');

const env = config.get('env');
config.loadFile(path.resolve(__dirname, `./config/.env.${env}.json`));

config.validate({ allowed: 'strict' });

module.exports = config;
