import React from "react";

const NewsCard = ({ newsItem }) => {
  return (
    <div>
      <img
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://i.stack.imgur.com/y9DpT.jpg"
        }
        alt={newsItem.title}
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <p className="author">
            <a
              href={newsItem.url}
              target="__blank"
              style={{ color: "black", textDecoration: "none" }}>
              <b>short </b>
            </a>
            <span className="mutedText">
              by {newsItem.author ? newsItem.author : "anonymous"} / {}{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
