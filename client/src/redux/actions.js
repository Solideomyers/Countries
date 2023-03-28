import { GET_COUNTRIES, GET_ACTIVITIES, CONTINENTS, GET_BY_NAME, DETAIL, GET_SORT, CHOOSE_ACTIVITY, POPULATION, CLEAN_FILTERS } from "./action-types";
import axios from "axios";

//ALL COUNTRIES
export const getCountries = () => async (dispatch) => {
    try{
        const { data } = await axios('/countries');
        // console.log(data)
        return dispatch({ type: GET_COUNTRIES, payload: data })
    }catch(error){
        console.log(error.message);
    }
};

//COUNTRIES BY NAME
export const getByName = (name) => async (dispatch) => {
    try{
        const { data } = await axios(`/countries/?name=${name}`);
        console.log(data)
        return dispatch({ type: GET_BY_NAME, payload: data })
    }catch(error){
        console.log(error.message);
    }
};


//COUNTRY DETAIL
export const getById = (id) => async (dispatch) => {
    try{
        const { data } = await axios(`/contries/${id}`);
        // console.log(data)
        return dispatch({ type: DETAIL, payload: data })
    }catch(error){
        console.log(error)
    }
}

//COUNTRY BY CONTINENT
export const getByContinent = (continent) => (dispatch) => {
    
    return dispatch({ type: CONTINENTS, payload: continent })
};

//COUNTRY ORDER
export const getSort = (value) => (dispatch) => {
    return dispatch({ type: GET_SORT, payload: value })
};

//GET ACTIVITIES
export const getActivities = () => async (dispatch) => {
    try{
        const { data } = await axios("/activities");
       return dispatch({ type: GET_ACTIVITIES, payload: data })
    }catch(error){
        console.log(error.message);
    }
};

//CHOOSE ACTIVITY
export const getChooseActivity = (value) => (dispatch) => {
    try{
        return dispatch({ type: CHOOSE_ACTIVITY, payload: value })
    }catch(error){
        console.log(error.message);
    }
};

//POPULATION
export const sortPopulation = (value) => (dispatch) => {
    try{
        return dispatch({ type: POPULATION, payload: value })
    }catch(error){
        console.log(error.message);
    }
};

//CLEAN FILTERS
export const cleanFilters = () => (dispatch) => {
    try{
        return dispatch({ type: CLEAN_FILTERS })
    }catch(error){
        console.log(error.message);
    }

};

