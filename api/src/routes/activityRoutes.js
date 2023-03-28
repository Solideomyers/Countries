const { Router } = require("express");
const { Activity, Country } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
    try{
        //Received info
        const { name, difficulty, duration, season, country } = req.body;
        
        //Creating activity
        const newActivity = await Activity.create({ name, difficulty, duration, season });
        
        //Bring the country match with the country body
        const countryDB = await Country.findAll({
            where:{
                name: country
            }
        });
        
        //Added country to activity
        newActivity.addCountry(countryDB);

        res.status(200).send('Activity added success')

    }catch(error){

        res.status(400).send(error.message);
    }
});

router.get("/", async (req, res) => {
    try{
        //Bring activities from the DB
        const allActivities = await Activity.findAll();
        
        res.status(200).json(allActivities);
    }catch(error){
        res.status(404).send(error.message);
    }
});


module.exports = router;

