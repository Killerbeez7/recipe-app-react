// const Register = lazy(() => import('./components/auth/register/Register'));
import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// services
import * as recipeService from './services/recipeService';

// Base components
import { Navigation } from './components/shared/navigation/Navigation';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Contacts } from './components/contacts/Contacts';
import { Footer } from './components/shared/footer/Footer';
import { NotFound } from './components/not-found/NotFound';

// Auth components
import { Login } from './components/auth/login/Login';
import { Register } from './components/auth/register/Register';

// Recipe components
import { RecipeList } from './components/recipes/recipe-list/RecipeList';
import { RecipeAdd } from './components/recipes/recipe-add/RecipeAdd';
import { RecipeEdit } from './components/recipes/recipe-edit/RecipeEdit';
import { RecipeItemDetails } from './components/recipes/recipe-item-details/RecipeItemDetails';
import './App.css';

function App() {
    const [recipes, setRecipes] = useState([]);

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

    const addRecipeHandler = (gameData) => {
        debugger;
        setRecipes((state) => [...state, gameData]);
    };

    useEffect(() => {
        recipeService.getAll().then((result) => {
            setRecipes(result);
        });
    }, []);
    return (
        <div className="body">
            <Navigation />

            <Routes>
                <Route path="/" element={<Home recipes={recipes} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />

                <Route path="/login" element={<Login />} />
                <Route
                    path="/register"
                    element={
                        <Suspense fallback={<span>Loading...</span>}>
                            <Register />
                        </Suspense>
                    }
                />

                <Route
                    path="/recipes/list"
                    element={<RecipeList recipes={recipes} />}
                />
                <Route
                    path="/recipes/add"
                    element={<RecipeAdd addRecipeHandler={addRecipeHandler} />}
                />
                <Route
                    path="/recipes/edit/:recipeId"
                    element={<RecipeEdit />}
                />
                <Route
                    path="/recipes/details/:recipeId"
                    element={<RecipeItemDetails addComment={addComment} />}
                />

                <Route path="/*" element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
