const {ServerConfig,Logger}  = require('./config');
const express = require('express');
const {} =require('./controllers');
const apiRoutes =require('./routes');
const app =express();

app.use(express.json());
app.use(express.urlencoded({extended:true }))

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, async()=>{
   
    console.log(`Server is running on port ${ServerConfig.PORT}`);
    // Logger.info ("Successfully started the server","root",{msg:"Something"});
    // bad code alert
    // // Example of magic function that sequelize gives us when we use associations 
    // // written here for simplicity if used according to the file structure might be difficult to keep track
    // const { City, Airport } = require('./models');
    // const bengaluru = await City.findByPk(8);
    // console.log(bengaluru);
    // // const airport = await Airport.create({name: 'Kempegowda Airport', code: 'BLR', cityId: 1});
    // // const dbpairport = await bengaluru.createAirport({name: 'Huballi Airport', code: 'HBL'});
    // // console.log(dbpairport);
    // // const airportsInBlr = await bengaluru.getAirports();
    // // console.log(airportsInBlr);
    // const hbairport = await Airport.findByPk(2);
    // console.log(hbairport);
    // // await bengaluru.removeAirports(hbairport);
    // // const mumbai = await City.findByPk(6);
    // // const sh = mumbai.createAirport({name: 'CSI airport', code: 'MUM'});
    // await City.destroy({
    //     where: {
    //         id: 2
    //     }
    // });
    // const sha = await Airport.findByPk(2);
    // // removeTableName is also a function but we can't use them in our case since we have one to many assoication
    // // when we use remove function it unassociates the array element therefore we use destory that we defined inside of the crud repo
    // // mumbai.removeAirport(sha)
    // // const city = await City.findByPk(4);
    // // await city.createAirport({name: 'Indore airport', code: 'IND'});
    // await City.destroy({
    //     where: {
    //         id: 8
    //     }
    // });
})

// https://medium.com/@julianne.marik/sequelize-associations-magic-methods-c72008db91c9
// When we use assoications sequelize gives us some magic functions which we can use when we ourself never create those functions 
// Link of article is above
