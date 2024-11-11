import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper justify="space-around" wrap="wrap">
        <Skill title="docker" iconId="docker"/>
        <Skill title="docker" iconId="docker"/>
        <Skill title="docker" iconId="docker"/>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
background-color: #f1eecb;
`;
