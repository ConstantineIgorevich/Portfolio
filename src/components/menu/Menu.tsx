import styled from "styled-components";
import { Link } from "../link/Link";
import { Button } from "../button/Button";
import { FlexWrapper } from "../FlexWrapper";

export const Menu = () => {
  return (
    <StyledMenu>
      <FlexWrapper>
        <Link text="Project" href="#" />
        <Button text="Contact" />
      </FlexWrapper>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  * {
    margin: 10px;
  }
`;
