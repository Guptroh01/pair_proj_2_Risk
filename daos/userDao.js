const Risk = require('../models/userModel')

class userDao {
    async createRisk(riskData) {
        return await Risk.create(riskData);
    }

    async updateRisk(riskData, id){
        const risk = await Risk.findByPk(id);
        if(!risk) return null;
        return await risk.update(riskData);
    }

    async deleteRisk(id){
        const risk = await Risk.findByPk(id);
        if(!risk) return null;
        await risk.destroy();
        return risk;
    }
}

module.exports = new userDao();