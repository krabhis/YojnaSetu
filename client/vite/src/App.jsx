import { Routes, Route } from 'react-router-dom';
import Header from "./Pages/Header/Header";
import Home from "./Pages/home/Home";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";
import HomeLayout from "./Layout/HomeLayout";
import Aboutus from './components/aboutus/Aboutus';
import Categorygrid from './components/categorygrid/Categorygrid';
import ContactUs from './components/contactus/ContactUs';

function App() {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="/category" element={<Categorygrid />} />

      </Routes>
    </HomeLayout>
  );
}

export default App;
