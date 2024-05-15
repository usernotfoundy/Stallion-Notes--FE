import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/loginPage';
import { RegisterPage } from './pages/registerPage';
import ProfilePage from './pages/ProfilePage';
import CheckoutPage from './pages/CheckoutPage';
import ExplorePage from './pages/ExplorePage';

const AppRouter = () => (
  <Routes>
    <Route path='/home' element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/profile/:tab" element={<ProfilePage />} /> {/* Dynamic route */}
    <Route path="/explore" element={<ExplorePage />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    {/* Add more routes here */}
  </Routes>
);

export default AppRouter;



// import { Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
// import LoginPage from './pages/loginPage';
// import { RegisterPage } from './pages/registerPage';
// import ProfilePage from './pages/ProfilePage';
// import CheckoutPage from './pages/CheckoutPage';
// import ExplorePage from './pages/ExplorePage';

// const AppRouter = () => (
//   <Routes>
//     <Route path='' element={<HomePage />} />
//     <Route path="/about" element={<AboutPage />} />
//     <Route path="/contact" element={<ContactPage />} />
//     <Route path="/login" element={<LoginPage />} />
//     <Route path="/register" element={<RegisterPage />} />
//     <Route path="/profile/*" element={<ProfilePage />} />
//     <Route path="/explore" element={<ExplorePage />} />
//     <Route path="/checkout" element={<CheckoutPage />} />
//     {/* Add more routes here */}
//   </Routes>
// );

// export default AppRouter;
