import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortPopulation, getByContinent, cleanFilters, getChooseActivity, getSort } from "../../redux/actions";
import Styles from "./Filter.module.css"

const Filters = () => {
    const dispatch = useDispatch();
    
    //References for handle functions
    const sortRef = useRef(null);
    const populationRef = useRef(null);
    const continentsRef = useRef(null);
    
    //Bring activities from state global
    const activities = useSelector((state) => state.activities);


    //global handles
    const handleFilterChange = (event) => {
        const { name, value } = event.target;

        switch(name){
            case 'Sort':
                dispatch(getSort(value));
                break;
            case 'Population':
                dispatch(sortPopulation(value));
                break;
            case 'Continents':
                dispatch(getByContinent(value));
                break;
            case 'Activity':
                dispatch(getChooseActivity(value));
                break;
            default:
                break;
        }
    }


    //Filters reset
    const handleClean = (event) => {
        event.preventDefault()
        dispatch(cleanFilters())
        sortRef.current.value = 'sort'
        populationRef.current.value = 'population'
        continentsRef.current.value = 'all'
    };


    return (
  <div class={Styles.container}>
  <div class={Styles.filter}>
    <div class={Styles.select}>
      <label className={Styles.labelFilters} for="continents">Sort by Continents</label>
      <select className={Styles.selectFilters} id="continents" name="Continents" ref={continentsRef} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
    <div class={Styles.select}>
      <label className={Styles.labelFilters} for="activity">Sort by Activity</label>
      <select className={Styles.selectFilters} id="activity" name="Activity" onChange={handleFilterChange}>
        <option value="activities">Activities</option>
        {activities?.map((elem, index) => (
        <option key={index} value={elem.name}>
          {elem.name}
        </option>
        ))}
      </select>
    </div>
    <div class={Styles.select}>
      <label className={Styles.labelFilters} for="sort">Sort by Name</label>
      <select className={Styles.selectFilters} id="sort" name="Sort" ref={sortRef} onChange={handleFilterChange}>
        <option value="sort">Sort</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
    <div class={Styles.select}>
      <label className={Styles.labelFilters} for="population">Sort by Population</label>
      <select className={Styles.selectFilters} id="population" name="Population" ref={populationRef} onChange={handleFilterChange}>
        <option value="population">Population</option>
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>
    </div>
    <div class={Styles.button}>
      <button className={Styles.btnFilters} onClick={handleClean}>Clean Filters</button>
    </div>
  </div>
</div>
    )
};

export default Filters;

