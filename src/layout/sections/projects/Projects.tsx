import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import { FlexWrapper } from "../../../components/FlexWrapper";
import path from "../../../assets/images/stub.webp";
import { Conteiner } from "../../../components/Conteiner";

export const Projects = () => {
  return (
    <StyledProjects>
      <Conteiner>
        <SectionTitle marginBottom="32px">Projects</SectionTitle>
        <FlexWrapper wrap="wrap" justify="space-around" gap="27px">
          <Project path={path} />
          <Project path={path} />
          <Project path={path} />
          <Project path={path} />
        </FlexWrapper>
      </Conteiner>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  
`;
