import Carousel from "../components/homePageComponents/Carousel";
import LatestConversation from "../components/homePageComponents/LatestConversation";
import LatestRelease from "../components/homePageComponents/LatestRelease";

import Line from "../components/homePageComponents/Line";
import Merch from "../components/homePageComponents/Merch";

import classes from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={classes.mainHomePageContainer}>
      <Carousel />
      <Line />
      <LatestRelease />
      <Line />
      <LatestConversation />
      <Line />
      <Merch />
    </div>
  );
}
