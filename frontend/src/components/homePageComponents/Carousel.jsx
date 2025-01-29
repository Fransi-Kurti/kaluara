import { useState } from "react";
import backArrow from "../../assets/arrows/left-space.png";
import forwardArrow from "../../assets/arrows/right.png";
import classes from "./Carousel.module.css";
import { carouselData } from "../../assets/dummyBooksCovers/carouselData/carouselData";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = carouselData.length - 1; // Wrap to the last image
    } else if (newIndex >= carouselData.length) {
      newIndex = 0; // Wrap to the first image
    }
    setActiveIndex(newIndex);
  };

  return (
    <>
<div className={classes.indicators}>
  {carouselData.map((item, index) => (
    <button
      key={item.id}
      onClick={() => updateIndex(index)}
      className={classes.indicatorButtons}
    >
      <div
        className={
          index === activeIndex
            ? classes.indicatorSymbolActive
            : classes.indicatorSymbol
        }
      ></div>
    </button>
  ))}
</div>

      <div className={classes.carouselContainer}>
        <div
          className={classes.goBack}
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <img src={backArrow} alt="Back" />
        </div>
        <div
          className={classes.carouselTrack}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {carouselData.map((item) => (
            <div key={item.id} className={classes.carouselImage}>
              <img src={item.image} alt={`Carousel item ${item.id}`} />
            </div>
          ))}
        </div>
        <div
          className={classes.goForward}
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <img src={forwardArrow} alt="Forward" />
        </div>
      </div>
    </>
  );
}
