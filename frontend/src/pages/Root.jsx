import Header from "../components/Header";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
    <Header />
      <MainNavigation /> 
      <Outlet />
    </>
  );
}
