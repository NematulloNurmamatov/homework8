import { useEffect, useLayoutEffect } from "react";

const HomeP = () => {
  useEffect(() => {
    console.log("useEffect");
  });
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });
  console.log("Render");
  return <div>HomeP</div>;
};

export default HomeP;
