import React from "react";
import { Tag } from "../../Utils/Misc";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <div className="container">
        <Tag bck="#0E1731" size="50px" color="#FFFFFF">
          Matches
        </Tag>
        <Tag
          bck="#FFFFFF"
          size="22px"
          color="#0E1731"
          link={true}
          linkTo="/the_team"
        >
          See More Matches
        </Tag>
      </div>
    </div>
  );
};

export default MatchesHome;
