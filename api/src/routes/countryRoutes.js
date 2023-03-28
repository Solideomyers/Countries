const { Router } = require("express");
const { getAllCountries, getByName, getById, getByRegion } = require("../controllers/controller");

const router = Router();

router.get("/", async (req, res) => {
    try{
        const { name } = req.query;
        if(name){
            const countryByName = await getByName(name);
            res.status(200).json(countryByName);
        }
        else{
            const allCountries = await getAllCountries();
            res.status(200).json(allCountries);
        }

    }catch(error){
        res.status(404).send(error.message);
    }
});

router.use("/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const getId = await getById(id);
        res.status(200).json(getId); 
    }catch(error){
        res.status(404).send(error.message);
    }
});

module.exports = router;

