import React, { useRef, useState } from "react";
import "./../styles/App.css";

const TOTAL_ITEMS = 100;
const VISIBLE_ITEMS = 10;
const BASE_ITEM_HEIGHT = 50;

const App = () => {
  const scrollRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  const itemHeight =
    BASE_ITEM_HEIGHT + Math.floor(scrollTop / 200);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + VISIBLE_ITEMS,
    TOTAL_ITEMS
  );

  const handleScroll = () => {
    setScrollTop(scrollRef.current.scrollTop);
  };

  return (
    <div>
      {/* Do not remove the main div */}

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          height: "500px",
          overflow: "auto"
        }}
      >
        {/* */}
        <p>Start Index: {startIndex}</p>

        {/* */}
        <div style={{ height: startIndex * itemHeight }} />

        {Array.from(
          { length: endIndex - startIndex },
          (_, i) => startIndex + i
        ).map((index) => (
          <h2
            key={index}
            style={{
              height: `${itemHeight}px`,
              margin: 0
            }}
          >
            Item {index}
          </h2>
        ))}

        {/* */}
        <div
          style={{
            height:
              (TOTAL_ITEMS - endIndex) * itemHeight
          }}
        />
      </div>
    </div>
  );
};

export default App;
