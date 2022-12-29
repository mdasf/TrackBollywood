import { collection, limit, orderBy, query } from "firebase/firestore";
import { firestore } from "../../firebase-config";
import useFetchData from "../useFetchData";

export const getRecentQuery = (docLimit) => {
  return useFetchData(
    query(
      collection(firestore, "posts"),
      orderBy("timestamp", "desc"),
      limit(docLimit)
    ),
    "recent"
  );
};

export const getPopularQuery = (docLimit) => {
  return useFetchData(
    query(
      collection(firestore, "posts"),
      orderBy("postClaps", "desc"),
      limit(docLimit)
    ),
    "popular"
  );
};

export const getAllPostsQuery = (docLimit) => {
  return useFetchData(
    query(
      collection(firestore, "posts")
      // orderBy("postClaps", "desc"),
      // limit(docLimit)
    ),
    "all post"
  );
};
