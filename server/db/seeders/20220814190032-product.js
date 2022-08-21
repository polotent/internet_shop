module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Products', [{
            name: 'Mechanical Keyboard RGB',
            description: 'Robust and elegant keyboard.',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Products', null, {});
    }
};
