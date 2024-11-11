import styled from "styled-components";
import { Button } from "../../../../components/button/Button";

type ProjectPropsType = {
  path: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <StyledImg src={props.path} alt="" />
      <h3>Title project</h3>
      <Button text="java script" />
      <Button text="styled components" />
      <Button text="react" />
      <StyledText>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </StyledText>
    </StyledProject>
  );
};

const StyledProject = styled.section`
  background-color: #e0f2d9;
`;

const StyledImg = styled.img`
  width: 522px;
  height: 388px;
`;

const StyledText = styled.p`
 max-width: 522px;
`;