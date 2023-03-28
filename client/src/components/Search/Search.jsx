import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";
import Styles from "./Search.module.css";


const Search = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("");
    const searchRef = useRef(null);

    const handleSearch = (event) => {
        setSearch(event.target.value);
        // console.log(search)
    };

    const handleSubmit = () => {
        if(search.length){
            dispatch(getByName(search));
            searchRef.current.value = "";

        }
    }



    return(
        <div className={Styles.searchContainer} >
            <input
                className={Styles.searchInput}
                id="search"
                type="search"
                placeholder="Your country"
                onChange={(event) => handleSearch(event)}
                // value={search}
                ref={searchRef}
                autoComplete="off"

             />
            <button
                className={Styles.searchButton}
                type="submit"
                onClick={(event) => handleSubmit(event)}
            >Search</button>
        </div>
    )
};

export default Search;