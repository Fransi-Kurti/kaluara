import Carousel from "../components/homePageComponents/Carousel";
import GenericContainer from "../components/homePageComponents/GenericContainer";
import Line from "../components/homePageComponents/Line";
import NewArrivals from "../components/homePageComponents/NewArrivals";
import SearchBar from "../components/homePageComponents/SearchBar";
import SubscribeContainer from "../components/homePageComponents/SubscribeContainer";
import classes from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={classes.mainHomePageContainer}>
      <NewArrivals />
      <Line />
      <Carousel />
      <div className={classes.container}>
        <GenericContainer><SearchBar /></GenericContainer>
        <SubscribeContainer />
        

      </div>
    </div>
  );
}
