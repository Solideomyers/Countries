{/* <div className={Styles.box}>
            <Link className={Styles.links} to={`/home/${id}`}  >
                <div className={Styles.card}>
                    <h2>{name}</h2>
                    <h2>{continent}</h2>
                    <img src={flag} alt={name} />
                </div>
            </Link>
        </div> */}

        ///

        // <div className={Styles.box}>
        //     <div className={Styles.card}>
        //         <Link className={Styles.links} to="/home" ><button>X</button></Link>
        //         <div className={Styles.titles} >
        //             <h2>Name: {country?.name}</h2>
        //             <h2>Id: {country?.id}</h2>
        //             <h2>Continent: {country?.continent}</h2>
        //             <h2>Capital: {country?.capital}</h2>
        //             <h2>Population: {country?.population}</h2>
        //             <h2>Area: {country?.area}</h2>
        //             <div className={Styles.picture} >
        //                 <img src={country.flag} alt={country.name} />
        //             </div>
        //         </div>
        //     </div>
        // </div>


        ///filters

        // <div className={Styles.box}>
        //     <div>
        //         <label>Continents</label>
        //         <select id='continents' name='Continents' ref={continentsRef} onChange={handleFilterChange} >
        //             <option value='all' >All</option>
        //             <option value='Africa'>Africa</option>
        //             <option value='Asia' >Asia</option>
        //             <option value='Antarctica' >Antarctica</option>
        //             <option value='Europe' >Europe</option>
        //             <option value='North America' >North America</option>
        //             <option value='South America' >South America</option>
        //             <option value='Oceania' >Oceania</option>
        //         </select>
        //     </div>
        //     <div>
        //         <label>Activity</label>
        //         <select name='Activity' onChange={handleFilterChange} >
        //             <option value='activities' >Activities</option>
        //             {
        //                 activities?.map((elem, index) => <option key={index} value={elem.name} >{elem.name}</option>)
        //             }
        //         </select>
        //     </div>
        //     <div>
        //         <label>Sort</label>
        //         <select id='sort' name='Sort' ref={sortRef} onChange={handleFilterChange} >
        //             <option value='sort' >Sort</option>
        //             <option value='asc'>Name (A-Z)</option>
        //             <option value='desc' >Name (Z-A)</option>
        //         </select>
        //     </div>
        //     <div>
        //         <label>Population</label>
        //         <select id='population' name='Population' ref={populationRef} onChange={handleFilterChange} >
        //             <option value='population' >Population</option>
        //             <option value='low'>Low</option>
        //             <option value='high' >High</option>
        //         </select>
        //     </div>
        //     <div>
        //         <button onClick={handleClean} >Clean Filters</button>
        //     </div>
        // </div>

        ////home

//         <div className={Styles.container} >
//         <Nav  />
//         <Filters
//         setInput={setInput}
//         setCurrent={setCurrent}
//       />
//       <div className={Styles.gridContainer}>
//         <div className={Styles.grid}>
//           {sorting
//             ?.slice(
//               (current - 1) * perPage,
//               (current - 1) * perPage + perPage
//             )
//             .map((country) => {
//               return (
//                 <div
//                   className={Styles.Card}
//                   key={country.id}
//                 >
//                   <Card
//                     id={country.id}
//                     name={country.name}
//                     flag={country.flag}
//                     continent={country.continent}
//                   />
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//       <div className={Styles.pagination}>
//         <span className={Styles.pagination_text}>
//           Page {current} of {max}
//         </span>
//         <div className={Styles.pagination_buttons}>
//           <button
//             className={Styles.pagination_button}
//             disabled={current === 1}
//             onClick={() => setCurrent(current - 1)}
//           >
//             Prev
//           </button>
//           <button
//             className={Styles.pagination_button}
//             disabled={current === max}
//             onClick={() => setCurrent(current + 1)}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//       <Pagination
// current={current}
// setCurrent={setCurrent}
// max={max}
// input={input}
// setInput={setInput}
// />
// </div>