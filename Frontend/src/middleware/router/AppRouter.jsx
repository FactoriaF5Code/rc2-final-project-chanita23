import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../../src/pages/Home/Home";
import Accessories from "../../../src/pages/Accessories/Accessories";
import BasketsFruit from "../../../src/pages/BasketsFruit/BasketsFruit";
import ImportedFruit from "../../../src/pages/ImportedFruit/ImportedFruit";

const AppRouter = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/accesorios" element={<Accessories />} />
                <Route path="/cestas regalo" element={<BasketsFruit />} />
                <Route path="/importedFruit" element={<ImportedFruit />} />
                
            </Routes>
        </BrowserRouter>

    );
};



export default AppRouter;
