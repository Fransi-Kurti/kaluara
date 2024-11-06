import Carousel from "../components/homePageComponents/Carousel";
import Line from "../components/homePageComponents/Line";
import NewArrivals from "../components/homePageComponents/NewArrivals";
import classes from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={classes.mainHomePageContainer}>
      <NewArrivals />
      <Line />
      <Carousel />
    </div>
  );
}
