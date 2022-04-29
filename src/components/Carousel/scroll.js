import { useRef, useEffect } from "react";

export function useHorizontalScroll(scroll) {
  const elRef = scroll;
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "auto"
        });
        console.log("hello")
      };
      
      el.addEventListener("wheel", onWheel);
        let mouseDown = false;
        let startX, scrollLeft;

        let startDragging = function (e) {
          mouseDown = true;
          startX = e.pageX - el.offsetLeft;
          scrollLeft = el.scrollLeft;
        };
        let stopDragging = function (event) {
          mouseDown = false;
        };

        el.addEventListener('mousemove', (e) => {
          e.preventDefault();
          if(!mouseDown) { return; }
          const x = e.pageX - el.offsetLeft;
          const scroll = x - startX;
          el.scrollLeft = scrollLeft - scroll;
        });

        // Add the event listeners
        el.addEventListener('mousedown', startDragging, false);
        el.addEventListener('mouseup', stopDragging, false);
        el.addEventListener('mouseleave', stopDragging, false);
      return () => el.removeEventListener("wheel", onWheel);
      
    }
    
    
  }, []);
  return elRef;
}

export function backToStart(scroll) {

  const el = scroll.current;

  if(el){
    el.scrollLeft = 0
    console.log("clicked")
  }


}

export function forwardToEnd(scroll) {

  const el = scroll.current;
  const end = scroll.current.scrollWidth
  if(el){
    el.scrollLeft = end
    console.log("clicked", scroll)
  }


}
// import { useEffect, useState } from "react";

// export default function App() {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const handleScroll = () => {
//     const position = window.pageYOffset;
//     setScrollPosition(position);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="App">
//       {Array(200)
//         .fill()
//         .map((_, i) => (
//           <p key={i}>lorem ipsum {scrollPosition}</p>
//         ))}
//     </div>