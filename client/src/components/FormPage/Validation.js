
const Validation = (create) => {
    const errors = {};
    if (create.name === "") errors.name = 'Introduce a valid name!';

    if (create.difficulty === "") errors.difficulty = "Select a difficulty!";

    if (create.duration === "") errors.duration = "Introduce a valid time!";

    if (create.season === "") errors.season = "Select a valid season!";

    if (!create.country[0]) errors.country = "Select one or more countries!";

    return errors;
  };

export default Validation;
