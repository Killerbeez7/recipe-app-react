import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { RecipeContext } from '../../../contexts/RecipeContext';
import { useContext } from 'react';

export const RecipeItemDetails = ({ addComment }) => {
    const { recipeId } = useParams();
    const { recipes, deleteRecipeHandler } = useContext(RecipeContext);

    const recipe = recipes.find((x) => x._id == recipeId);

    const [comment, setComment] = useState({
        username: 'ivan',
        comment: '',
    });

    const [error, setError] = useState({
        username: '',
        comment: '',
    });

    const addCommentHandler = (e) => {
        e.preventDefault();
        addComment(recipeId, comment.comment);
    };

    const onChange = (e) => {
        setComment((state) => ({
            [e.target.name]: e.target.value,
        }));
    };

    const validateComment = (e) => {
        const comment = e.target.value;
        let errorMessage = '';

        if (comment.length < 4) {
            errorMessage = 'Comment must be longer than 4 characters';
        } else if (comment.length > 30) {
            errorMessage = 'Comment must be shorter than 30 characters';
        }

        setError((state) => ({
            ...state,
            comment: errorMessage,
        }));
    };

    return (
        <>
            <div
                style={{
                    padding: 50,
                    margin: 80,
                    backgroundColor: 'lightgreen',
                }}
            >
                <h1 style={{ paddingBottom: 30 }}>Recipe: {recipe.name}</h1>
                <hr />
                <br />
                <div
                    className="recipe-details-wrapper"
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <div className="recipe-img-box">
                        <img
                            src={`/${recipe.imageUrl}`}
                            className="recipe-img"
                            style={{
                                width: 250,
                                height: 250,
                                display: 'inline-block',
                            }}
                        />
                    </div>
                    <div className="recipe-details-box" style={{ padding: 30 }}>
                        <h3>Description: {recipe.ingredients}</h3>
                        <h3>
                            Time for preparation: {recipe.timeToCook} minutes
                        </h3>
                        <h2>Likes: </h2>
                    </div>
                    <div className="like-btn btn">
                        <button>
                            <a href="">LIKE</a>
                        </button>
                    </div>
                </div>
                <div className="form-control">
                    <Link
                        className="view-recipe-btn"
                        to={`/recipes/edit/${recipe._id}`}
                        recipe={recipe}
                    >
                        Edit
                    </Link>
                    <Link
                        className="view-recipe-btn"
                        to={`/recipes/list`}
                        onClick={() => deleteRecipeHandler(recipeId)}
                    >
                        Delete
                    </Link>
                </div>
                <div className="comments-section">
                    <h3>Comments:</h3>
                    <hr />
                    <ul className="comments">
                        {recipe.comments?.map((x) => (
                            <li className="comment">
                                <p>{x}</p>
                            </li>
                        ))}
                    </ul>
                    {!recipe.comments && <p>No comments yet!</p>}
                </div>
                <div
                    className="create-comment"
                    style={{
                        backgroundColor: '#c0b3dc',
                        padding: 20,
                        margin: 20,
                    }}
                >
                    <article className="create-comment">
                        <label htmlFor="comment">Add new comment</label>
                        <form className="form" onSubmit={addCommentHandler}>
                            <textarea
                                style={{ marginRight: 20, marginTop: 10 }}
                                name="comment"
                                id="comment"
                                placeholder="Comment..."
                                onChange={onChange}
                                onBlur={validateComment}
                                value={comment.comment}
                            />
                            {error.comment && (
                                <div style={{ color: 'red' }}>
                                    {error.comment}
                                </div>
                            )}
                            <div>
                                <input
                                    className="btn submit"
                                    type="submit"
                                    value="Add comment"
                                />
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        </>
    );
};
