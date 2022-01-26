import React from 'react';
import BurgerBuilder from './BurgerBuilders/BurgerBuilder';
import Header from './Header/Header';

const MainComponent = () => {
    return (
        <div>
            <Header></Header>
            <BurgerBuilder></BurgerBuilder>
        </div>
    );
};

export default MainComponent;