import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "./NewsCard";
import "./Newscontent.css";

const Newscontent = ({ news, totalNewsCount, loadMore, setLoadMore }) => {
  return (
    <Container maxWidth="md" className="containerDiv">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use <b>inshorts</b> app on your smartphone
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
        {news.slice(0, loadMore).map((newsItem, index) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
        {totalNewsCount > loadMore && (
          <button
            onClick={() => {
              setLoadMore((prevValue) => prevValue + 20);
            }}
            className="loadMore">
            Load More
          </button>
        )}
      </div>
    </Container>
  );
};

export default Newscontent;
