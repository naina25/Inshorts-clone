import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
  const fullDate = new Date(newsItem.publishedAt);
  const date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12;

  const renderSwitch = (day) => {
    switch (day) {
      case "Mon":
        return "Monday";
        break;
      case "Tue":
        return "Tuesday";
        break;
      case "Wed":
        return "Wednesday";
        break;
      case "Thu":
        return "Thursday";
        break;
      case "Fri":
        return "Friday";
        break;
      case "Sat":
        return "Saturday";
        break;

      default:
        break;
    }
  };

  return (
    <div className="newsCard">
      <img
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://i.stack.imgur.com/y9DpT.jpg"
        }
        alt={newsItem.title}
        className="newsImage"
      />
      <div className="upperText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <p className="author">
            <a
              href={newsItem.url}
              target="__blank"
              style={{ color: "black", textDecoration: "none" }}>
              <b>short </b>
            </a>
            <span className="mutedText">
              by {newsItem.author ? newsItem.author : "anonymous"} /{" "}
              {time
                ? hour - 12 < 10
                  ? `0${hour - 12}:${date[4].substring(3, 5)} pm`
                  : `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour} : ${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {renderSwitch(date[0])}
            </span>
          </p>
        </div>
        <div className="lowerText">
          <div className="description">
            {newsItem.description
              ? newsItem.description
              : "*** This article has no description ***"}
          </div>
          <span className="readmore">
            read more at
            <a
              href={newsItem.url}
              target="__blank"
              style={{ color: "black", textDecoration: "none" }}>
              <b> {newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
