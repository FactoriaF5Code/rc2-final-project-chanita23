import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export const Logo = () => {
    return (
        <Link to="/">
            <img
                src={logo}
                alt="Logo"
                style={{ height: "85px" }}
            />
        </Link>
    );
}

