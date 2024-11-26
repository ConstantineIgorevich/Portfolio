import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type ProjectPropsType = {
  path: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <StyledImg src={props.path} alt="" />
      <Title>TITLE PROJECT</Title>
      <FlexWrapper gap="12px" margin="19px">
        <Button>JAVASCRIPT</Button>
        <Button>STYLED COMPONENTS</Button>
        <Button>REACT</Button>
      </FlexWrapper>
      <StyledText>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </StyledText>
    </StyledProject>
  );
};

const Title = styled.h3`
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 11px;
  margin-top: 29px;
`;

const StyledProject = styled.section`
  overflow: hidden;
  background-color: #f5f2fd;
  border-radius: 6px;
  box-shadow: 2px 2px 32px 0px rgba(40, 38, 44, 0.15);
`;

const StyledImg = styled.img`
  max-width: 522px;
  max-height: 388px;
`;

const StyledText = styled.p`
  max-width: 522px;
`;
