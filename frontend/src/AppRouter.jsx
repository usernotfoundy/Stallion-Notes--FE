import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/loginPage';
import { RegisterPage } from './pages/registerPage';
import ProfilePage from './pages/ProfilePage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ExplorePage from './pages/ExplorePage';


const AppRouter = () => (
  <Routes>
    <Route path='' element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/profile" element={<ProfilePage/>}/>
    <Route path="/cart" element={<ShoppingCartPage/>}/>
    <Route path="/explore" element={<ExplorePage/>}/>
    {/* Add more routes here */}
  </Routes>
);

export default AppRouter;
