import { useState } from 'react';
import { Link } from 'react-router-dom';

export const RecipeAdd = ({ addRecipeHandler }) => {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        name: '',
        description: '',
        timeToCook: '',
        imageUrl: '',
    });

    // Handlers
    const changeHandler = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const recipeData = values;
        addRecipeHandler(recipeData);

        console.log(recipeData);
    };

    // Validators
    const minLength = (e, limit) => {
        setErrors((state) => ({
            ...state,
            [e.target.name]: values[e.target.name].length < limit,
        }));
    };

    const isPositive = (e) => {
        let number = Number(e.target.value);
        setErrors((state) => ({
            ...state,
            [e.target.name]: number < 0,
        }));
    };

    const isFormValid = !Object.values(errors).some((x) => x);

    return (
        <>
            <div
                style={{
                    padding: 80,
                    margin: 80,
                    backgroundColor: 'lightgreen',
                }}
            >
                <h1 style={{ color: 'blue' }}>add recipe</h1>
                <form
                    id="create"
                    className="col-lg-6 offset-lg-3"
                    onSubmit={submitHandler}
                >
                    <div className="form-group">
                        <label htmlFor="name">Recipe name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="recipe name"
                            value={values.name}
                            onChange={changeHandler}
                            onBlur={(e) => minLength(e, 3)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            placeholder="recipe description"
                            value={values.description}
                            onChange={changeHandler}
                            onBlur={(e) => minLength(e, 3)}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="preparation-time">Time to cook:</label>
                        <input
                            type="text"
                            id="tim-to-cook"
                            name="timeToCook"
                            placeholder="preparation time"
                            value={values.timeToCook}
                            onChange={changeHandler}
                            onBlur={(e) => minLength(e, 3)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageUrl">ImageUrl:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="image link"
                            value={values.imageUrl}
                            onChange={changeHandler}
                            onBlur={(e) => minLength(e, 3)}
                        />
                    </div>
                    <input
                        type="submit"
                        value="Add Recipe"
                        disabled={!isFormValid}
                    />
                    <Link className="view-recipe-btn" to={`/recipes/list`}>
                        Cancel
                    </Link>
                </form>
            </div>
        </>
    );
};
