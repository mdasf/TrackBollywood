import React, { useEffect, useState } from "react";

const CountClaps = ({ postClaps, updateClapCount }) => {
  const [count, setCount] = useState(postClaps);

  const onUpdateClapCount = () => {
    updateClapCount(count + 1);
    setCount(count + 1);
  };

  // useEffect(() => {
  // }, [count]);

  return (
    <div href="#" className=" btn-story-detail" onClick={onUpdateClapCount}>
      <i className="fa-solid fa-hands-clapping"></i>
      <span>{count}</span>
    </div>
  );
};

export default CountClaps;
