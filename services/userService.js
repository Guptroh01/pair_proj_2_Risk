const userDao = require('../daos/userDao');

class userService{
    async createRisk(riskData){
        return await userDao.createRisk(riskData);
    }

    async updateRisk(riskData, id){
        return await userDao.updateRisk(riskData, id);
    }

    async deleteRisk(id){
        return await userDao.deleteRisk(id);
    }
}

module.exports = new userService();