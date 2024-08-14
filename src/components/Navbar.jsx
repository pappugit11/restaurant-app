import React, { useState } from "react";

const Navbar = ({ filterData, menuCatg }) => {
  return (
    <>
      <div className="navbar_wrapper">
        <nav className="navbar_nav">
          <ul className="navbar_list">
            {menuCatg.map((menuCatg, ind) => {
              return (
                <li key={ind}>
                  <button onClick={() => filterData(menuCatg)}>
                    {menuCatg}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
