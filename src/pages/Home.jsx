import { About, Contact, Works, Hero, Services } from './../container';
import PageWrapper from './PageWrapper';

const Home = () => {
    return (
        <PageWrapper>
            <Hero />
            <About />
            <Services />
            <Works />
            <Contact />
        </PageWrapper>
    )
};

export default Home;
