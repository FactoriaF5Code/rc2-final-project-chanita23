import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import "./Header.css"

export  const Header = () => {
    return (
         
        <header>
           <Logo />
            <nav>
                <Link to="/basketsFruit" className='menu-link'>
                    <span>ANCHETAS O CESTAS REGALO</span>
                </Link>
                <Link to="/NationalFruit" className='menu-link'>
                    <span>FRUTAS NACIONALES</span>
                </Link>
                <Link to="/importedFruit" className='menu-link'>
                    <span>FRUTAS IMPORTADAS</span>
                </Link>
                <Link to="/accessories" className='menu-link'>
                    <span>ACCESORIOS</span>
                </Link>
                <Link to="/contact" className='menu-link'>
                    <span>CONTACTO</span>
                </Link>
            </nav>
        </header>
    )

}