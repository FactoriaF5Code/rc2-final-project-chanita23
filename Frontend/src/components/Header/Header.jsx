import { Logo } from '../Logo/Logo';
import "./Header.css";

export const Header = () => <header>
    <Logo />
    <nav>
        <span>Anchetas</span>
        <span>Frutas Nacionales</span>
        <span>Frutas Importadas</span>
    </nav>
</header>