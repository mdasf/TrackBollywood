import React, { useEffect, useState } from "react";

const CountClaps = ({ postClaps, updateClapCount }) => {
  const [count, setCount] = useState(postClaps);

  console.log("rendering countclaps->", count, postClaps);

  const onUpdateCount = () => {
    updateClapCount(count + 1);
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(postClaps);
  }, [postClaps]);

  return (
    <div href="#" className=" btn-story-detail" onClick={onUpdateCount}>
      <i className="fa-solid fa-hands-clapping"></i>
      <span>{count}</span>
    </div>
  );
};

export default CountClaps;
