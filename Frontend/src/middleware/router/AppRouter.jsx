import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import BasketsFruit from "../../pages/BasketsFruit/BasketsFruit";
import ImportedFruit from "../../pages/ImportedFruit/ImportedFruit";
import NationalFruit from "../../pages/NationalFruit/NationalFruit";
import Contact from "../../pages/Contact/Contact";
import { LoginSignup } from "../../pages/LoginSignup.jsx/LoginSignup";


const AppRouter = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
              <Route path="/basketsFruit" element={<BasketsFruit />} />
                <Route path="/importedFruit" element={<ImportedFruit />} />
                <Route path="/nationalFruit" element={<NationalFruit />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<LoginSignup />} /> 
             </Routes>
                
        </BrowserRouter>

    );   
            
}
export default AppRouter;


