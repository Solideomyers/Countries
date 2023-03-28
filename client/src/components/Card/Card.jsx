import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Card.module.css";

const Card = ({ id, flag, name, continent }) => {
    
    // console.log(id, flag, name, continent)
    return(
        <div className={Styles.box}>
            <Link className={Styles.links} to={`/home/${id}`}>
                <div className={Styles.card}>
                    <div className={Styles.cardHeader}>
                        <h2 className={Styles.cardTitle}>{name}</h2>
                        <h2 className={Styles.cardSubtitle}>{continent}</h2>
                    </div>
                    <div className={Styles.cardBody}>
                        <div className={Styles.cardImageContainer}>
                            <img className={Styles.cardImage} src={flag} alt={name} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
};

export default Card;


