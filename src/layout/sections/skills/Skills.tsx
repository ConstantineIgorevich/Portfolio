import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Conteiner } from "../../../components/Conteiner";

export const Skills = () => {
  return (
    <StyledSkills>
      <Conteiner>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper justify="space-around" wrap="wrap">
          <Skill title="html" iconId="html" />
          <Skill title="css" iconId="css" />
          <Skill title="typescript" iconId="typescript" />
          <Skill title="react" iconId="react" />
          <Skill title="styled" iconId="styled" />
          <Skill title="figma" iconId="figma" />
        </FlexWrapper>
      </Conteiner>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  
`;
