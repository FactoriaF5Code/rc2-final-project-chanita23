import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Accessories from "../../pages/Accessories/Accessories";
import BasketsFruit from "../../pages/BasketsFruit/BasketsFruit";
import ImportedFruit from "../../pages/ImportedFruit/ImportedFruit";
import NationalFruit from "../../pages/NationalFruit/NationalFruit";
import Contact from "../../pages/Contact/Contact";

const AppRouter = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/basketsFruit" element={<BasketsFruit />} />
                <Route path="/importedFruit" element={<ImportedFruit />} />
                <Route path="/nationalFruit" element={<NationalFruit />} />
                <Route path="/contact" element={<Contact />} />
             </Routes>
        </BrowserRouter>

    );   
            
};



export default AppRouter;
