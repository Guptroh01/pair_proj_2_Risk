const { deleteRisk } = require('../daos/userDao');
const userService = require('../services/userService')

class userController{
    async createRisk(req, res) {
        const riskData = req.body;
        try {
            const risk = await userService.createRisk(riskData);
            res.status(201).json(risk)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }

    async updateRisk(req, res) {
        const {id} = req.params;
        const riskData = req.body;
        try {
           const updatedRisk = await userService.updateRisk(id, riskData);
           if(!updatedRisk) return res.status(404).json({error: 'Risk Not Found'}); 
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }

    async deleteRisk(req, res){
        const {id} = req.params;
        try {
            const deletedRisk = await userService.deleteRisk(id);
            if(!deletedRisk) return res.status(400).json({error: 'User not found'});
            res.json(deletedRisk);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

module.exports = new userController();