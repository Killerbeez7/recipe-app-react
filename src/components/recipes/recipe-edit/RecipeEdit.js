import { Link } from 'react-router-dom';

export const RecipeEdit = (recipe) => {
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
                <form className="col-lg-6 offset-lg-3">
                    <div className="form-group">
                        <label htmlFor="name">Recipe name:</label>
                        <input value={recipe.name}>{recipe.name}</input>
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
                    <Link
                        className="view-recipe-btn"
                        to={`/recipes/edit/${recipe._id}`}
                        recipe={recipe}
                    >
                        Save
                    </Link>
                    <Link
                        className="view-recipe-btn"
                        to={`/recipes/list`}
                    >
                        Cancel
                    </Link>
                </form>
            </div>
        </>
    );
};
