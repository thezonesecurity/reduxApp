import React from "react";
import "./styles.css";
import { MdCancel } from "react-icons/md";
import { Route, Switch, Redirect } from "react-router-dom";
import { MainDashBoard } from "./MainDashBoard";
import { useSelector } from "react-redux";

export const DashboardComponent = ({ children, ...rest }) => {
  const { auth } = useSelector((state) => state);
  return auth == null ? (
    <Redirect to="/login" />
  ) : (
    <>
      <input type="checkbox" id="check" />
      <label for="check">
        <div className="fas fa-bars">
          <MdCancel className="icon-color" />
        </div>
      </label>
      <div className="sidebar">
        <header> MY APP</header>
        <ul>
          <li>
            <a href="#">
              <i className="fas fa-qrcode">Dashboard</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-link">Short-curts</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-stream">Overview</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-calendar-week">Events</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-question-circle">About</i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-sliders-h">Services</i>
            </a>
          </li>
        </ul>
      </div>
      <section></section>
      <Switch>
        <Route path="/dashboard" component={MainDashBoard} />
      </Switch>
    </>
  );
};
