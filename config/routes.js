const express = require('express')

module.exports = function(server){
    //API routers
    const router = express.Router()
    server.use('/api', router)


    //Rotas de pagamento
    const billingCycling = require('../api/billingCycle/billingCycleService')
    billingCycling.register(router,'/billingCycles')

}