import React from "react";

import ageOfEmpiresImg from "../projectData/age_of_empires2_the_age_of_kings.jpg";

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <div className="homePageTitleName">Home Page</div>
      <div className="homePageImageBox">
        <img src={ageOfEmpiresImg} alt="Age of Empires Img" />
      </div>
    </div>
  );
};

export default HomePage;
