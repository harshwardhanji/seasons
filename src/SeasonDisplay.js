import React from "react";

const cal = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  console.log(props.lat);
  const season = cal(props.lat, new Date().getMonth());
  const content = season === "summer" ? "Hi ! it's chilly" : "HI ! it's cold";
  const icon = season === "summer" ? "sun" : "snowflake";
  return (
    <div>
      <i className={`${icon},icon`} />

      <h1>{content}</h1>
      <i className={`${icon},icon`} />
    </div>
  );
};

export default SeasonDisplay;
