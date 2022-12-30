import { collection, limit, orderBy, query, where } from "firebase/firestore";
import { firestore } from "../../firebase-config";
import useFetchData from "../useFetchData";

export const getTrendingQuery = (docLimit) => {
  console.log(new Date().getTime());
  const timestampOneWeekAgo = new Date().getTime() - 6 * 24 * 60 * 60 * 1000;
  console.log(new Date(timestampOneWeekAgo));

  return useFetchData(
    query(
      collection(firestore, "posts"),
      where("timestamp", ">=", timestampOneWeekAgo),
      orderBy("timestamp", "desc"),
      limit(docLimit)
    ),
    "trending"
  );
};

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
