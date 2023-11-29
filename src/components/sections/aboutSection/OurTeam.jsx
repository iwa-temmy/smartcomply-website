import React from "react";
import { ourTeamInfo } from "../../../mockdata/ourTeamData";
import OurTeamCard from "../../primitive/cards/OurTeamCard";

const OurTeam = () => {
  return (
    <div className="container mx-auto py-10 space-y-8 md:space-y-16">
      <div>
        <h2 className="text-4xl sm:text-5xl lg:text-[75px] lg:leading-[5rem] font-test-sohne-medium">
          Our Team
        </h2>
        <p className="font-test-sohne-light">
          See the awesome faces behind this great idea... Well, in black and
          white
        </p>
      </div>

      <div className="w-full lg:w-[70%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-x-4 sm:gap-y-8 md:grid-cols-3 md:gap-y-6">
          <>
            {ourTeamInfo.map((card, index) => (
              <div key={index}>
                <OurTeamCard
                  image={card.image}
                  name={card.name}
                  title={card.title}
                  social_medial_name={card.social_medial_name}
                  social_media_link={card.social_media_link}
                  bio={card.bio}
                />
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
