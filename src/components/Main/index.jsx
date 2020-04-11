import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./main.css";
import NavBar from "../NavBar";
import Drawer from "../Drawer";
import Banner from "../Banner";
import OurService from "../OurService";
import LastArticles from "../LastArticles";
import Divider from '../Divider'
import Footer from '../Footer'

const API_ROUTE = process.env.API || 'http://localhost:3000/' 

class Main extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      success: true,
      openMenu: false,
      list: [],
      lastArticles: [],
      error: "",
      isLogin: false,
    };
    this.getLastArticles = this.getLastArticles.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(event) {
    event.preventDefault();
    if (this.state.openMenu)
      this.setState({
        openMenu: false,
      });
    else
      this.setState({
        openMenu: true,
      });
  }

  componentDidMount() {
    this.getLastArticles();
  }

  getLastArticles() {
    fetch(API_ROUTE + "last-articles", { method: "GET" })
      .then((result) => result.json())
      .then((object) => {
        this.setState({
          done: true,
          success: true,
          lastArticles: object.box.bitArticles,
        });
      })
      .catch((err) => {
        this.setState({
          done: true,
          success: false,
          error: err.message.toString(),
        });
        this.getLastArticles();
      });
  }

  render() {
    return (
      <div className="root">
        <div className="banner">
          <Banner isLogin={this.state.isLogin} />
        </div>

        <Divider />

        <div className="lastarticles list">
          {this.state.done && this.state.success ? (
            <LastArticles lastArticles={this.state.lastArticles} />
          ) : (
            <div className="loading">
              <CircularProgress />
            </div>
          )}
        </div>

        <Divider />

        <div className="ourservices">
          <OurService />
        </div>

        <Divider />

        <Footer />

        <NavBar toggleDrawer={this.toggleDrawer} />

        <Drawer
          toggleDrawer={this.toggleDrawer}
          openMenu={this.state.openMenu}
        />

      </div>
    );
  }
}
export default Main;
