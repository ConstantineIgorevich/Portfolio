import styled from "styled-components";
import { Link } from "../Link";
import { Button } from "../Button";
import { FlexWrapper } from "../FlexWrapper";

export const Menu = () => {
  return (
    <StyledMenu>
      <FlexWrapper justify="space-between" align="center">
        <Link href="#" >Project</Link>
        <Button>Contact</Button>
      </FlexWrapper>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  * {
    margin: 10px;
  }
`;
