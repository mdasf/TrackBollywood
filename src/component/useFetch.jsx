import { getDocs, query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AdminContext } from "./context/admin-context";

const useFetch = (url) => {
  // const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { setPosts } = useContext(AdminContext);

  const extractDataFromDocs = (data) => {
    return data.map(({ postId, postInfo }) => {
      return {
        title: postInfo.title,
        summary: postInfo.summary,
        author: postInfo.author,
        imageURL: postInfo.imageUrl,
        paragraph: postInfo.paragraph,
        tags: postInfo.tags,
        pid: postId,
      };
    });
  };

  const getData = () => {
    // const customPromise = new Promise(async (resolve, reject) => {
    try {
      setLoading(true);
      // console.log("called");
      const q = query(url);
      let temp = [];
      getDocs(q).then((querySnap) => {
        querySnap.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          temp.push({ postId: doc.id, postInfo: doc.data() });
        });
        const extractedData = extractDataFromDocs(temp);
        // console.log(extractedData);
        setLoading(false);
        setError("");

        setPosts(() => {
          return [...extractedData];
        });
      });
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
    // });
    // const result = await customPromise;
    // setData(result);
    // setLoading(false);
    // customPromise
    //   .then((data) => {
    // setData(() => data);
    // console.log(data);

    // setLoading(false);
    // })
    // .catch((error) => {
    //   console.log(error);
    //   setLoading(false);
    // });
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);
  return { loading, error };
};

export default useFetch;
