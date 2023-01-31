import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("Home Page");
  }, []);

  return (
    <>
      <h2>Home</h2>
    </>
  );
};

export default Home;
