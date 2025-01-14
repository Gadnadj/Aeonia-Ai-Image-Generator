import React from 'react';
import Header from '../components/Header';

type Props = {}

const Home = (props: Props) => {
    return (
        <div className=' px-4 sm:px-10 md:px-14 lg:px-28'>
            <Header />
        </div>
    );
};

export default Home;