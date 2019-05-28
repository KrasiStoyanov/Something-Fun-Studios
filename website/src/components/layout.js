import React from 'react';

import Header from './header';
import Footer from './footer';

import '../styles/index.scss';
import layoutStyles from '../styles/layout.module.scss';

const Layout = (props) => {
    return (
        <div className={layoutStyles.mainContainer}>
            <div className={layoutStyles.mainContent}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;