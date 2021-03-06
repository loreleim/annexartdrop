import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

export default class HomeNav extends React.Component {
  render() {
    return (
      <div className={style.fixedHome}>
        <nav className={style.mainNav}>
          <ul>
            <Link to={"/mission"}>
              <li>Mission</li>
            </Link>
            <Link to={"/startyourown"}>
              <li>Start Your Own</li>
            </Link>
            <Link to={"/contribute"}>
              <li>Contribute</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}