
import { Header } from '../../components/Header/Header';
import { Banner } from '../../components/Banner/Banner';
import { NewsLetter } from '../../components/NewsLetter/NewsLetter';
import { Footer } from '../../components/Footer/Footer';
import { InfoHome } from '../../components/InfoHome/InfoHome';
import { ProductDisplay } from '../../components/ProductDisplay/ProductDisplay';

export default function Home() {

    return (
        <>
            <Header />
            <Banner />
            <InfoHome />
            <ProductDisplay />
            <NewsLetter />
            <Footer />
        </>
    );
}
