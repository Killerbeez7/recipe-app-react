import { Link } from 'react-router-dom';

export const RecipeItem = ({ recipe }) => {
    return (
        <>
            <h3
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontStyle: 'italic',
                    marginBottom: 10,
                }}
            >
                Time to cook: ...
            </h3>
            <li
                className="recipe-list-item-wrapper"
                style={{ height: 170, maxWidth: 700 }}
            >
                <div className="recipe-image-wrapper">
                    <img
                        src={`/${recipe.img}`}
                        className="recipe-img"
                        style={{ height: 125, width: 125 }}
                    />
                </div>
                <div className="recipe-content-wrapper">
                    <div className="recipe-name-wrapper">
                        <h3>{recipe.name}</h3>
                    </div>
                    <div className="recipe-description-wrapper">
                        <h3>Ingredients: {recipe.ingredients}</h3>
                    </div>
                    <br></br>
                    <div className="recipe-description-wrapper">
                        <h4>Steps: {recipe.steps}</h4>
                    </div>
                </div>
                <Link
                    to={`/recipes/details/${recipe._id}`}
                    className="view-recipe-btn"
                    recipe={recipe}
                >
                    view
                </Link>
            </li>
        </>
    );
};
