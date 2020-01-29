import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import faker from "faker";
import { Image } from "semantic-ui-react";

//importing context
import { SearchContext } from "../../../Services/SearchContext/SearchContext";
import Navbar from "./Navbar";

const NavbarWithSearch = props => {
  const trigger = (
    <span>
      <Image avatar size="mini" src={faker.internet.avatar()} />{" "}
      {localStorage.getItem("username")}
    </span>
  );

  const history = useHistory();

  //using context
  const [search, setSearch] = useContext(SearchContext);

  const [clear, setClear] = useState("");

  const logout = () => {
    localStorage.setItem("username", "");
    localStorage.setItem("token", "");
    localStorage.setItem("loggedUserID", "");
  };

  const options = [
    { key: "user", text: "Account", icon: "user" },
    { key: "settings", text: "Settings", icon: "settings" },
    {
      key: "sign-out",
      text: "Sign Out",
      icon: "sign out",
      value: "SignOut"
    }
  ];

  const showSide = () => {
    var burger = document.querySelector(".burger");
    var links = document.querySelector(".nav-links");
    var navLinks = document.querySelectorAll(".nav-links li");

    if (links.style.animation) {
      links.style.animation = "";
    } else {
      links.style.animation = `barDekha 1s ease forwards`;
    }

    links.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 1s ease forwards ${index / 25}s`;
      }
    });

    burger.classList.toggle("change");
  };

  const handleChange = (e, { value }) => {
    if (value === "SignOut") {
      logout();
      history.push("/");
    }
  };

  const handleSearchChange = e => {
    setClear(e.target.value);
  };

  const submitHandler = e => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
      history.push("/search");
      setClear("");
    }
  };

  return (
    <div className="navbar">
      <Navbar
        trigger={trigger}
        options={options}
        handleChange={handleChange}
        handleSearchChange={handleSearchChange}
        submitHandler={submitHandler}
        search={clear}
        slide={showSide}
      />
    </div>
  );
};

export default NavbarWithSearch;
