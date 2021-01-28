import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "./NewsCard";
import "./Newscontent.css";

const Newscontent = ({ news, totalNewsCount }) => {
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
        {news.map((newsItem, index) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
      </div>
    </Container>
  );
};

export default Newscontent;
