import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";

const useSearch = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = () => {
        if(search.length){
            dispatch(getByName(search));
            setSearch("")
        }
    };
    return { search, handleSearch, handleSubmit }
};

export default useSearch;