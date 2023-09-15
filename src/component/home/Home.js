import React from 'react'
import Navbar from './Navbar';
import Banner from './Banner';

function Home() {
    return (
        <>
            <Navbar />
            <div className='homebar'>
                <Banner />
            </div>
        </>
    )
}

export default Home;
