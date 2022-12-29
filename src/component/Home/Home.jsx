import React, { useEffect, useState } from "react";
import { getPopularQuery, getRecentQuery } from "../Admin/queryApi.jsx";

import {
  Trending,
  Popular,
  RecentPlusEditorialPicks,
  Header,
  Footer,
} from "../index.js";

import "./Home.css";

const Home = () => {
  // const { data, loading, error } = getRecentQuery(4);
  // const { data, loading, error } = getRecentQuery(5);

  const {
    data: recentData,
    loading: recentLoading,
    error: recentError,
  } = getRecentQuery(5);

  const {
    data: popularData,
    loading: popularLoading,
    error: popularError,
  } = getPopularQuery(5);

  // console.log(getRecentQuery(4), getPopularQuery(5));

  return (
    <>
      <Header />
      {(!recentData || !popularData) && (
        <div className="home-loading">
          <div className="loading-animation"></div>
          <p>Loading data...</p>
        </div>
      )}
      {(recentError || popularError) && (
        <div className="error">Unable to Load!</div>
      )}
      {recentData && popularData && (
        <>
          <Trending data={recentData} />
          <Popular data={popularData} />
          <RecentPlusEditorialPicks data={recentData} />
        </>
      )}
      {/* {recentData && <Trending data={recentData} />} */}
      {/* {popularData && <Popular data={popularData} />} */}
      {/* {recentData && <RecentPlusEditorialPicks data={recentData} />} */}
      <Footer />
    </>
  );
};

export default Home;
