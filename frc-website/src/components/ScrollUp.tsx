import React, { useEffect, useState } from 'react'

const ScrollUp = () => {

    function useScrollPosition() {
        const [scrollPosition, setScrollPosition] = useState(0);
      
        function handleScroll() {
          const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
      
          const windowScroll = document.documentElement.scrollTop;
      
          const scrolled = (windowScroll / height) * 100;
      
          setScrollPosition(scrolled);
        }
      
        useEffect(() => {
          window.addEventListener("scroll", handleScroll, { passive: true });
          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        });
      
        return scrollPosition;
    }

    const scrollPosition = useScrollPosition();

    useEffect(() => {
    if (scrollPosition > 10) {
        alert(123)
    }
    }, [scrollPosition]);

    return (
        <div className="">
            {scrollPosition}
        </div>
    )
}

export default ScrollUp