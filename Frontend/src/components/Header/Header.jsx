import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import "./Header.css";

export  const Header = () => {
    return (
         
        <header>
           <Logo />
            <nav>
                <Link to="/basketsFruit">
                    <span>ANCHETAS O CESTAS REGALO</span>
                </Link>
                <Link to="/NationalFruit">
                    <span>FRUTAS NACIONALES</span>
                </Link>
                <Link to="/importedFruit">
                    <span>FRUTAS IMPORTADAS</span>
                </Link>
                <Link to="/accessories">
                    <span>ACCESORIOS</span>
                </Link>
                <Link to="/contact">
                    <span>CONTACTO</span>
                </Link>
            </nav>
        </header>
    )

}