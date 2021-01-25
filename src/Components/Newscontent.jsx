import { Container } from "@material-ui/core";
import React from "react";
import "./Newscontent.css";

const Newscontent = () => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt=""
            height="80%"
          />
          <img
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt=""
            height="80%"
          />
        </div>
      </div>
    </Container>
  );
};

export default Newscontent;
