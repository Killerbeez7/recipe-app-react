// const Register = lazy(() => import('./components/auth/register/Register'));
import { Routes, Route } from 'react-router-dom';

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
    return (
        <div className="body">
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/recipes/list" element={<RecipeList />} />
                <Route path="/recipes/add" element={<RecipeAdd />} />
                <Route
                    path="/recipes/edit/:recipeId"
                    element={<RecipeEdit />}
                />
                <Route
                    path="/recipes/details/:recipeId"
                    element={<RecipeItemDetails />}
                />

                <Route path="/*" element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;
