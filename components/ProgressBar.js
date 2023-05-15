import React from "react";
import * as Progress from "react-native-progress";

const ProgressBar = ({ isShow }) => {
  if (isShow)
    return <Progress.CircleSnail color={["red", "green", "blue"]} size={100} />;
  else return;
};
export default ProgressBar;
