import React, { useState } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Menu from "./MenuApi";

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);

  const filterData = (currCatg) => {
    if (currCatg === "all") {
      setMenuData(Menu);
      return;
    }
    const updatedItem = Menu.filter((currelm) => {
      return currelm.category === currCatg;
    });
    setMenuData(updatedItem);
  };

  const catg = [
    ...new Set(
      menuData.map((elm) => {
        return elm.category;
      })
    ),
    "all",
  ];

  const [menuCatg, setMenuCatg] = useState(catg);

  return (
    <>
      <div className="container">
        <Navbar filterData={filterData} menuCatg={menuCatg} />

        <Cards menuData={menuData} />
      </div>
    </>
  );
};

export default Resturant;
