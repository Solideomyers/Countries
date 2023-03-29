import { GET_COUNTRIES, CONTINENTS, GET_BY_NAME, GET_SORT, DETAIL, GET_ACTIVITIES, CHOOSE_ACTIVITY, POPULATION, CLEAN_FILTERS } from "./action-types";

const initialState = {
    countries: [],
    activities:[],
    sorting:[]//backup

};

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_COUNTRIES:
            
            return{
                ...state,
                countries: payload,
                sorting: payload
            }
        case GET_BY_NAME:
            // const nameFiltered = state.countries.filter((country) => country.name === payload)
            // console.log(nameFiltered)
            // console.log(payload)
            return{
                ...state,
                sorting: [payload]
            }
        case DETAIL:
            const countryId = state.countries.filter((county => county.id === payload))
            return{
                ...state,
                sorting: [countryId]
            }
        case CONTINENTS:
            // console.log(payload.toLowerCase())
            // console.log(state.countries)
            const copyCountry = [...state.countries]
            const continentFiltered = copyCountry.filter((conti) => conti.continent === payload)
            
            console.log(continentFiltered)
            return{
                ...state,
                sorting: payload === 'all' ? [...copyCountry] : [...continentFiltered]
            }
        case GET_SORT:
        let sort = []
        if(payload === 'asc'){
            sort = state.sorting.sort((a, b) => {
                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
                return 0;
            })
        }
        if(payload === 'desc'){
            sort = state.sorting.sort((a, b) => {
                if(a.name > b.name) return -1;
                if(a.name < b.name) return 1;
                return 0;
            })
        }
        console.log(payload)    
        console.log(sort)
            return {
                ...state,
                sorting: [...sort]
            }
        case GET_ACTIVITIES:
            return{
                ...state,
                activities: payload
            }
        case CHOOSE_ACTIVITY:
        //    console.log(state.activities)
           const filterByActivity = [...state.sorting].filter((elment) => elment.activity[0] === payload)
           console.log(state.sorting)
            return{
                ...state,
                sorting: [...filterByActivity]
            }
        case POPULATION:
            let populationSort = [];
            if(payload === 'high'){
                populationSort = state.sorting.sort((a, b) => b.population - a.population)  
                
            }
            if(payload === 'low'){
                populationSort = state.sorting.sort((a, b) => a.population - b.population) 
                
            }
            console.log(payload)
            console.log(populationSort)
            return{
                ...state,
                sorting: [...populationSort],
            }
        case CLEAN_FILTERS:
            return{
                ...state,
                sorting: [...state.countries],
            }
        
        default:
            return{...state}
    }
};

export default rootReducer;