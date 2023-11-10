// pages/login.jsx
import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/common/seo";
import Login from "../components/login";
import nookies from 'nookies';

const LoginPage = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Login"} />
      <Login />
    </Wrapper>
  );
};

export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = cookies.token; // The cookie name should be 'token' or whatever you have set

    // Verify the user's session using your Firebase Admin SDK function
    const session = token;

    if (session) {
      // If the session exists, redirect the user to the home page
      return {
        redirect: {
          destination: '/home',
          permanent: false,
        },
      };
    }

    // If there's no session, just render the login page
    return { props: {} };
  } catch (err) {
    // In case of any error, render the login page
    return { props: {} };
  }
}

export default LoginPage;
