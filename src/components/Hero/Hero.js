import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, I'm Mohamed Ragab. <br />
          I'm full-stack web developer.
        </SectionTitle>
        <SectionText>
          I love building quality websites with NODEJS, REACTJS and NEXTJS by TS
          or JS, Well-rounded experience in NoSQL and SQL database like MongoDB
          and Mysql
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
