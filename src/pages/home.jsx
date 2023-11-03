import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../components/common/seo';
import HomeThree from '../components/homes/home-3';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Exclusive Medias"} />  
            <HomeThree />          
        </Wrapper>
    );
};

export default index;