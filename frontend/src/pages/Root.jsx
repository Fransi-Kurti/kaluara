import Header from "../components/Header";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import classes from './Root.module.css'



export default function Root() {
  return (
    <>
    <div className={classes.headerContainer}>
    <Header />
    </div>
      <MainNavigation /> 
      <main className={classes.outlet}>

      <Outlet />
      </main>

    </>
  );
}
