import React, { useState } from "react";

const RecommendationButton = () => {
  const [count, setCount] = useState(0);
  const [isRecommended, setIsRecommended] = useState(false);

  const handleRecommend = () => {
    if (isRecommended == false) {
      setCount(count + 1);
      setIsRecommended(true);
    } else {
      alert("이미 추천했습니다.");
    }
  };

  return (
    <div>
      <button onClick={handleRecommend}>추천</button>
      <p>추천 수: {count}</p>
    </div>
  );
};

export default RecommendationButton;
