import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Styles from "./Detail.module.css";

const Detail = () => {

    const [country, setCountry] = useState([]);
    let { id } = useParams();
    // console.log(id)
    // console.log(country)
    useEffect(() => {
        const apiData = async () => {
            try{
                const { data } = await axios(`/countries/${id}`);
                // console.log(data)
                setCountry(data)
            }catch(error){
                console.log(error.message)
            }
        }
        apiData()
    }, [id])
    // console.log(country)

    const formatter = new Intl.NumberFormat("en-US", {
        style:"decimal",
        useGrouping: true
    });

    return(
        <div className={Styles.containerDetail}>
        <div className={Styles.cardDetail}>
            <Link className={Styles.linksDetail} to="/home" ><button className={Styles.btnDetail} >X</button></Link>
            <header className={Styles.headerDetail} >
                <h2 className={Styles.nameDetail} >{country?.name}</h2>
            </header>
            <section className={Styles.infoDetail}>
                <div>
                    <h3 className={Styles.tilesDetail}>ID:</h3>
                    <p className={Styles.subtitlesDetail} >{country?.id}</p>
                </div>
                <div>
                    <h3 className={Styles.tilesDetail}>Continent:</h3>
                    <p className={Styles.subtitlesDetail}>{country?.continent}</p>
                </div>
                <div>
                    <h3 className={Styles.tilesDetail}>Capital:</h3>
                    <p className={Styles.subtitlesDetail}>{country?.capital}</p>
                </div>
                <div>
                    <h3 className={Styles.tilesDetail}>Population:</h3>
                    <p className={Styles.subtitlesDetail}>{formatter.format(country?.population)}</p>
                </div>
                <div>
                    <h3 className={Styles.tilesDetail}>Area:</h3>
                    <p className={Styles.subtitlesDetail}>{formatter.format(country?.area)}</p>
                </div>
            </section>
            <section className={Styles.pictureDetail}>
                <img src={country.flag} alt={country.name} />
            </section>
        </div>
    </div>
        
    )
};

export default Detail;