import React, { useState } from 'react';

const FrequentQuestion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div class=" flex justify-between py-6" onClick={() => setIsActive(!isActive)}>
        <div class="font-semibold">{title}</div>
        <div class="text-white text-2xl">{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div class="pb-4 text-white divide-y">{content}</div>}
    </div>
  );
};

export default FrequentQuestion;