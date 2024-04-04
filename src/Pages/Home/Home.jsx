import React from 'react';
import Header from '../../Shared/Header/Header';
import NavBar from '../../Shared/NavBar/NavBar';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <h2 className=''>This is home</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='bg-gray-300 '>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='lg:col-span-2 bg-gray-300'>
                    <h2 className='text-4xl'>News comming soon</h2>
                </div>
                <div className='bg-gray-300'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;