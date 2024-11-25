import { useState } from "react";
import classes from "./Sidebar.module.css";
import Filters from "./Filters";

export default function Sidebar({ filterBooks, filterLanguage }) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <>
      <button className={classes.hamburger} onClick={toggleSidebar}>
        ☰
      </button>

      <div
        className={`${classes.sidebar} ${
          isSidebarVisible ? classes.visible : ""
        }`}
      >
        <div className={classes.firstSection}>
          <ul>
            <Filters filterType={filterBooks} />
          </ul>
        </div>
        <div className={classes.secondSection}>
          <ul>
            <Filters filterType={filterLanguage} />
          </ul>
        </div>
      </div>

      {isSidebarVisible && <div className={classes.overlay} onClick={toggleSidebar}></div>}
    </>
  );
}
