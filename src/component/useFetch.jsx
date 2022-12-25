import { getDocs, query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AdminContext } from "./context/admin-context";

const useFetch = (url) => {
  // const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    const customPromise = new Promise(async (resolve, reject) => {
      try {
        const q = query(url);
        let temp = [];
        const querySnap = await getDocs(q);
        querySnap.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          temp.push({ postId: doc.id, postInfo: doc.data() });
        });
        resolve(temp);
      } catch (error) {
        reject(error);
        console.log(error);
      }
    });
    // const result = await customPromise;
    // setData(result);
    // setIsLoading(false);
    customPromise
      .then((data) => {
        // setData(() => data);
        // console.log(data);

        setPosts(extractDataFromDocs(data));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);
  return { isLoading };
};

export default useFetch;
