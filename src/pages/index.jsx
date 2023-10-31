import React from 'react'; 
import HomeOne from './../components/homes/home/index';
import SEO from '../components/common/seo';
import Wrapper from '../layout/wrapper';
import ComingSoon from '../components/coming-soon';

const index = () => {
  return (
    <Wrapper> 
    <SEO pageTitle={"Exclusive Medias"} />
     <ComingSoon />
    </Wrapper>
  );
};

export default index; 