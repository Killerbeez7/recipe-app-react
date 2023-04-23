import { Link } from 'react-router-dom';

export const RecipeAdd = ({addRecipeHandler}) => {
    const onSubmit = (e) => {
        e.preventDefault();

        const recipeData = Object.fromEntries(new FormData(e.target));
        addRecipeHandler(recipeData)
    }; 

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
                    onSubmit={onSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="name">Recipe name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="recipe name here..."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            placeholder="recipe description here..."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="preparation-time">Time to cook:</label>
                        <input
                            type="text"
                            id="preparation-time"
                            name="preparation-time"
                            placeholder="recipe preparation time here..."
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageUrl">ImageUrl:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="image link here"
                        />
                    </div>
                    <input type="submit" value="Add Recipe" />
                    <Link className="view-recipe-btn" to={`/recipes/list`}>
                        Cancel
                    </Link>
                </form>
            </div>
        </>
    );
};
