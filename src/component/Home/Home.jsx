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
  // const [recentData, setRecentData] = useState();
  // const [recentLoading, setRecentLoading] = useState(false);
  // const [recentError, setRecentError] = useState("");
  // const [popularData, setPopularData] = useState();
  // const [popularLoading, setPopularLoading] = useState(false);
  // const [popularError, setPopularError] = useState("");

  // const { data, loading, error } = getRecentQuery(4);
  // const { data, loading, error } = getRecentQuery(5);

  const {
    data: recentData,
    loading: recentLoading,
    error: recentError,
  } = getRecentQuery(4);
  const {
    data: popularData,
    loading: popularLoading,
    error: popularError,
  } = getPopularQuery(5);

  // const {
  //   data: rd,
  //   loading: rl,
  //   error: re,
  // } = recentData ? recentData : getRecentQuery(4);
  // const {
  //   data: pd,
  //   loading: pl,
  //   error: pe,
  // } = popularData ? popularData : getPopularQuery(5);

  // useEffect(() => {
  //   console.log(rd, pd);

  //   // if (rd && pd) {
  //   setRecentData(rd);
  //   setRecentLoading(rl);
  //   setRecentError(re);
  //   setPopularData(pd);
  //   setPopularLoading(pl);
  //   setPopularError(pe);
  //   // }

  //   // return () => {
  //   //   second
  //   // }
  // }, [rd, pd]);

  return (
    <>
      <Header />
      {(!recentData || !popularData) && (
        <div className="loading">
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
