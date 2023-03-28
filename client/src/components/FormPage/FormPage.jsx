import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../redux/actions";
import Validation from "./Validation";
import Styles from "./FormPage.module.css";

const FormPage = () => {
  //bring state global
  const countries = useSelector((state) => state.countries);
  const sorting = useSelector((state) => state.sorting);

  //hook
  const dispatch = useDispatch();

  //Local state
  const [error, setError] = useState({});//errors
  const [userData, setUserData] = useState({//checked
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: []
  });

  //Watch 
  useEffect(() => {
    setError(Validation(userData));
    if (!sorting[0]) dispatch(getCountries());
  }, [dispatch, sorting, userData]);


  const handleInput = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (event) => {
    if (event.target.value !== "countries") {
      setUserData({
        ...userData,
        country: [...userData.country, event.target.value],
      });
    }
  };

  const handleuserData = () => {
    axios.post("/activities", userData);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setUserData({
      ...userData,
      country: userData.country.filter(
        (country) => country !== event.target.value
      ),
    });
  };

  const countriesSort = countries.sort((a, b) => a.name.localeCompare(b.name));  

  return (
    <div className={Styles.boxForm} >
      <div >
        <div >
          <Link to="/home" >
          <button className={Styles.btnForm}  >
            Back Home
          </button>
          </Link>
        </div>
        <form className={Styles.containerForm}  onSubmit={handleuserData}>
          <div >
            <h2 className={Styles.brandTitle} >New Activity</h2>
            <div >
              <div className={Styles.inputForm} >
                <label >Name:</label>
                <input 
                  type="text"
                  name="name"
                  onChange={handleInput}
                  autoComplete="off"
                />
              </div>
              {error.name && <span className={Styles.errorForm}  >{error.name}</span>}
            </div>
            <div >
              <div className={Styles.inputForm} >
                <label >Difficulty</label>
                <select
                  name="difficulty"
                  
                  onChange={handleInput}
                  // hidden={error.name ? true : false}
                >
                  <option value="">--Select Difficulty--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              {error.difficulty && <span  className={Styles.errorForm} >{error.difficulty}</span>}
            </div>
            <div className={Styles.inputBox}>
              <div className={Styles.inputForm} >
                <label >Duration</label>
                <input
                  type="time"
                  
                  name="duration"
                  onChange={handleInput}
                  min="1"
                  max="20"
                  // hidden={error.difficulty ? true : false}
                />
              </div>
              {error.duration && <span  className={Styles.errorForm} >{error.duration}</span>}
            </div>
            <div className={Styles.inputForm} >
              <div >
                <label >Season</label>
                <select
                  name="season"
                  
                  onChange={handleInput}
                  // hidden={error.duration ? true : false}
                >
                  <option value="">--Select Season--</option>
                  <option value="Summer">Summer</option>
                  <option value="Autumn">Autumn</option>
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring</option>
                </select>
              </div>
              {error.season && <span  className={Styles.errorForm} >{error.season}</span>}
            </div>
            <div >
              <div className={Styles.inputForm} >
                <label >Countries</label>
                <select
                  name="country"
                  onChange={handleSelect}
                  
                  // hidden={error.season ? true : false}
                >
                  <option value="countries">--Select Countries--</option>
                  {countriesSort?.map((event, i) => (
                    <option key={i} value={event.name}>
                      {event.name}
                    </option>
                  ))}
                </select>
              </div>
              {error.country && <span  className={Styles.errorForm} >{error.country}</span>}
            </div>
            <div >
              {userData.country?.map((country, i) => (
                <span className={Styles.country} key={i}  value={country}>
                  {country}
                  <button
                    onClick={handleDelete}
                    className={Styles.btnCountry}
                    value={country}
                  >
                    x
                  </button>{" "}
                </span>
              ))}
            </div>
          </div>
          <div >
            <button
              type="submit"
              className={Styles.btnForm}
              hidden={Object.entries(error).length ? true : false}
            >
              <span >Create</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormPage;