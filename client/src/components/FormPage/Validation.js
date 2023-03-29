
const Validation = (create) => {
    const errors = {};
    if (create.name === "") errors.name = 'Introduce a valid name!';

    if(create.name.match(/\d/g) ) errors.name = 'The dont be a number!'

    if (create.difficulty === "") errors.difficulty = "Select a difficulty!";

    if (create.duration === "") errors.duration = "Introduce a valid time!";

    if (create.duration < 1 || create.duration > 5) errors.duration = "Try again with a number between 1 and 5!";

    if (create.duration.match(/[a-zA-Z]/g)) errors.duration = "Try again whit a number!";

    if (create.season === "") errors.season = "Select a valid season!";

    if (!create.country[0]) errors.country = "Select one or more countries!";

    return errors;
  };

export default Validation;
