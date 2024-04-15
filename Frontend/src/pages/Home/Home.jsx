
import { Header } from '../../components/Header/Header';
import { Banner } from '../../components/Banner/Banner';
import { NewsLetter } from '../../components/NewsLetter/NewsLetter';
import { Footer } from '../../components/Footer/Footer';
import InfoHome from '../../components/InfoHome/InfoHome';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay';

export const Home = () => <div>
    <Header />
    <Banner />
    <InfoHome />
    <ProductDisplay />
    <NewsLetter />
    <Footer />
</div>

export default Home;