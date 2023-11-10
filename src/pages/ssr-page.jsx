// pages/ssr-page.js
import React from 'react';

const SSRPage = ({ data }) => {
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <p>This page is rendered on the server and includes data fetched on the server at request time.</p>
      <div>
        <h2>Data Fetched from Server:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

// This function runs on the server for every request
export async function getServerSideProps(context) {
  // Fetch data from an API or another source
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default SSRPage;
