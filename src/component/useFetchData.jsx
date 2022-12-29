import {
  collection,
  getDocs,
  limitToLast,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useCallback, useContext, useEffect, useState } from "react";
import { firestore } from "../firebase-config";

let cache = {};

const useFetchData = (query, type) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const extractDataFromDocs = (data) => {
    return data.map(({ postId, postInfo }) => {
      return {
        title: postInfo.title,
        summary: postInfo.summary,
        author: postInfo.author,
        imageURL: postInfo.imageUrl,
        paragraph: postInfo.paragraph,
        tags: postInfo.tags,
        timestamp: postInfo.timestamp,
        pid: postId,
      };
    });
  };

  const getData = async () => {
    // const customPromise = new Promise(async (resolve, reject) => {
    //   try {
    // const oneweekago = Date.now() - 5 * 60 * 1000;

    // console.log(cache);

    try {
      // console.log(url);
      // const q = query(
      //   collection(firestore, "posts"),
      //   where(),
      //   orderBy("timestamp"),
      //   limitToLast(5)
      // );
      setLoading(true);
      // console.log(query);

      //#####################################temp logic for caching already fetched data

      if (cache[type]) {
        const data = cache[type];
        setData(data);
        setLoading(false);
      } else {
        //#####################################temp logic for caching already fetched data
        let temp = [];
        const querySnap = await getDocs(query);
        // console.log(querySnap);
        querySnap.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          temp.push({ postId: doc.id, postInfo: doc.data() });
        });
        // console.log(temp);f
        // console.log("fetching again");

        const extractedData = extractDataFromDocs(temp);
        cache[type] = extractedData;
        setData(extractedData);
        setLoading(false);
      }
      // resolve(temp);
      // } catch (error) {
      //   reject(error);
      //   console.log(error);
      // }
      // });
      // const result = await customPromise;
      // setData(result);
      // setIsLoading(false);
      // customPromise
      //   .then((data) => {
      // setData(() => data);
      // console.log(data);

      //   setPosts(extractDataFromDocs(data));
      //   setIsLoading(false);
      // })
      // .catch((error) => {
      //   console.log(error);
      //   setIsLoading(false);
      // });
    } catch (err) {
      console.log(err);
      setError(err);
      setLoading(false);
    }
  };

  // useCallback(
  useEffect(() => {
    getData();
  }, []),
    [];
  // );

  // console.log(data);
  return { data, loading, error };
};

export default useFetchData;
