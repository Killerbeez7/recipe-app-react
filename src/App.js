import { AuthContext } from './contexts/AuthContext';
import { RecipeContext } from './contexts/RecipeContext';
import { Routes, Route } from 'react-router-dom';
// Custom hooks
import useFetch from './hooks/useFetch';
import useRecipesApi from './hooks/useRecipesApi';
// Base components
import { Navigation } from './components/shared/navigation/Navigation';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Contacts } from './components/contacts/Contacts';
import { Footer } from './components/shared/footer/Footer';
import { NotFound } from './components/not-found/NotFound';
// Auth components
import { Register } from './components/auth/register/Register';
import { Login } from './components/auth/login/Login';
import { Logout } from './components/auth/logout/Logout';
// Recipe components
import { RecipeList } from './components/recipes/recipe-list/RecipeList';
import { RecipeAdd } from './components/recipes/recipe-add/RecipeAdd';
import { RecipeEdit } from './components/recipes/recipe-edit/RecipeEdit';
import { RecipeItemDetails } from './components/recipes/recipe-item-details/RecipeItemDetails';
import './App.css';
import { useState } from 'react';

function App() {
    const [auth, setAuth] = useState({});
    const [recipes, setRecipes, isLoading] = useFetch(
        'http://localhost:3030/jsonstore/recipes',
        []
    );
    const { addRecipe, editRecipe, deleteRecipe } = useRecipesApi();

    // Auth handlers
    const userLogin = (authData) => {
        setAuth(authData);
    };

    const userLogout = () => {
        setAuth({});
    };

    // Recipe handlers
    const addRecipeHandler = async (newRecipe) => {
        await addRecipe(newRecipe);
        setRecipes((state) => [...state, newRecipe]);
    };

    const editRecipeHandler = async (recipeId, recipeData) => {
        await editRecipe(recipeId, recipeData);
        setRecipes((state) =>
            state.map((x) => (x._id == recipeId ? { ...(x = recipeData) } : x))
        );
    };

    const deleteRecipeHandler = async (recipeId) => {
        await deleteRecipe(recipeId);
        setRecipes((state) => state.filter((x) => x._id != recipeId));
    };

    const addComment = (recipeId, comment) => {
        setRecipes((state) => {
            const recipe = state.find((x) => x._id == recipeId);

            const comments = recipe.comments || [];
            comments.push(comment);

            return [
                ...state.filter((x) => x._id !== recipeId),
                { ...recipe, comments },
            ];
        });
    };

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
            <RecipeContext.Provider
                value={{
                    recipes,
                    addRecipeHandler,
                    editRecipeHandler,
                    deleteRecipeHandler,
                }}
            >
                <div className="body">
                    <Navigation />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contacts />} />

                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />

                        <Route
                            path="/recipes/list"
                            element={<RecipeList recipes={recipes} />}
                        />

                        <Route path="/recipes/add" element={<RecipeAdd />} />
                        <Route
                            path="/recipes/edit/:recipeId"
                            element={<RecipeEdit />}
                        />
                        <Route
                            path="/recipes/details/:recipeId"
                            element={
                                <RecipeItemDetails addComment={addComment} />
                            }
                        />

                        <Route path="/*" element={<NotFound />} />
                    </Routes>

                    <Footer />
                </div>
            </RecipeContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
