import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { RecipeContext } from '../../../contexts/RecipeContext';
import { useContext } from 'react';

export const RecipeEdit = () => {
    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        name: '',
        description: '',
        timeToCook: '',
        imageUrl: '',
    });

    const { recipeId } = useParams();
    console.log(recipeId);

    // Handlers
    const { editRecipeHandler } = useContext(RecipeContext);

    const changeHandler = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const newRecipe = values;
        editRecipeHandler(recipeId, newRecipe);

        setValues({
            name: '',
            description: '',
            timeToCook: '',
            imageUrl: '',
        });
    };

    // Validators
    const minLength = (e, limit) => {
        setErrors((state) => ({
            ...state,
            [e.target.name]: values[e.target.name].length < limit,
        }));
    };

    const isFormValid = !Object.values(errors).some((x) => x);

    return (
        <>
            <div
                style={{
                    padding: 80,
                    margin: 100,
                    backgroundColor: 'lightgreen',
                    position: 'relative',
                }}
            >
                <h1 style={{ color: 'blue' }}>Edit Recipe</h1>
                <form className="col-lg-6 offset-lg-3" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Recipe name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="preparation-time">Time to cook:</label>
                        <input></input>
                    </div>
                    <div>image</div>
                    <Link className="view-recipe-btn" to={`/recipes/list`}>
                        Save
                    </Link>
                    <Link className="view-recipe-btn" to={`/recipes/list`}>
                        Cancel
                    </Link>
                </form>
            </div>
        </>
    );
};
