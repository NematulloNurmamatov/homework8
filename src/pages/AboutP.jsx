import { useEffect } from "react";

const AboutP = () => {
  useEffect(() => {
    document.querySelector("head title").textContent = "LESSON 8 | ABOUT";
  });
  return <div>AboutP</div>;
};

export default AboutP;
