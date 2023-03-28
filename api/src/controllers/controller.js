const axios = require("axios");
const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

/////////////////////////INFO COUNTRIES////////////////////////////////////////

const infoApi = async () => {
    let { data } = await axios("https://restcountries.com/v3/all");
    data = data?.map((info) => {
        return {
            id: info.cca3,
            name: info.name.common,
            flag: info.flags[0],
            continent: info.continents[0],
            capital: info.capital,
            subregion: info.subregion,
            area: info.area,
            population: info.population
        }
    });

    return data;
};

/////////////////////////JOIN ACTIVITY TO COUNTRY////////////////////////////////////////
const joinActivityCountry = async () => {
    try{

        let countries = await Country.findAll({//Join activity in country
            include:{
                model: Activity,
                attributes: ["name"],
                through:{
                    attributes: []
                }
            }
        });

        countries = countries.map((info) => {//Transfrom the info
            return{
                id: info.id,
                name: info.name,
                flag: info.flag,
                continent: info.continent,
                capital: info.capital,
                subregion: info.subregion,
                area: info.area,
                population: info.population,
                activity: info.activities?.map(el => el.name)
            }
        });

        return countries;

    }catch(error){
        
        return (error.message);
    }
};

/////////////////////////JOIN ACTIVITY TO COUNTRY////////////////////////////////////////
const getAllCountries = async () => {
    try{

        //Verification that the DB is empty or not
        const countries = await Country.findAll();
        if(countries.length === 0){//In case that the DB is empty
            
            //Bring the info from API with our function infoApi
            const infoCountries = await infoApi();
            // console.log(infoCountries)
            //Push the info inside the DB
            await Country.bulkCreate(infoCountries);
        }

        //In case the DB is fulfilled join activity with our function joinActivityCountry
        const countriesFulfilled = await joinActivityCountry();
        return countriesFulfilled;
        
    }catch(error){
        return (error.message);
    }
};


/////////////////////////COUNTRIES BY NAME////////////////////////////////////////
const getByName = async (name) => {
    try{
        const allCountries = await getAllCountries();
        if(name){
            
            
            const countryFind = await Country.findOne({
                where: {
                    name:{
                        [Op.iLike]: `%${name}%`
                    }
                }
            });
            console.log(countryFind)
            if(!countryFind) return ('Country not found');
            // console.log(allCountries)
            return countryFind;
        }
        return allCountries;
    }
    catch(error){
        return (error.message);
    }
};

/////////////////////////COUNTRIES BY ID////////////////////////////////////////
const getById = async (id) => {
    try{
        const allCountries = await getAllCountries();
        if(id){
            
            const countryId = await Country.findByPk(id);
            if(!countryId) return ('Country not found');
            return countryId;
        }

        return allCountries;
    }catch(error){
        return (error.message);
    }
};

module.exports = {
    getAllCountries,
    getByName,
    getById
}
