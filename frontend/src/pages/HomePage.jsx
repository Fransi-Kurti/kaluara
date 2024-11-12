import AdContainer from "../components/homePageComponents/AdContainer";
import AskAQuestion from "../components/homePageComponents/AskAQuestion";
import Carousel from "../components/homePageComponents/Carousel";
import GenericContainer from "../components/homePageComponents/GenericContainer";
import Line from "../components/homePageComponents/Line";
import NewArrivals from "../components/homePageComponents/NewArrivals";
import Quote from "../components/homePageComponents/Quote";
import SearchBar from "../components/homePageComponents/SearchBar";
import SubscribeContainer from "../components/homePageComponents/SubscribeContainer";
import classes from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={classes.mainHomePageContainer}>
      <NewArrivals />
      <Line />
      <Carousel />
      <div className={classes.container}>
        <GenericContainer>
          <SearchBar />
        </GenericContainer>
        <SubscribeContainer />
        
      </div>
      <Quote />
      <div className={classes.secondContainer}>
        <AskAQuestion />
        <AdContainer />
      </div>
    </div>
  );
}
