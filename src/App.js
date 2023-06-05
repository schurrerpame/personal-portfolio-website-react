import React from 'react'
import { About, Contact, Works, Hero, Services } from './container';
import PageWrapper from './pages/PageWrapper.jsx';

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
