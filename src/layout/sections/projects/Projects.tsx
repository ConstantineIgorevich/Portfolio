import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Project } from "./project/Project";
import { FlexWrapper } from "../../../components/FlexWrapper";
import path from "../../../assets/images/stub.webp"

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>Projects</SectionTitle>
      <FlexWrapper wrap="wrap" justify="space-around" gap="10px">
        <Project path={path}/>
        <Project path={path}/>
        <Project path={path}/>
        <Project path={path}/>
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
background-color: #a5faf9;
`;
