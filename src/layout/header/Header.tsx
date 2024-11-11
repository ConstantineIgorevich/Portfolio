import styled from "styled-components";
import { Link } from "../../components/link/Link";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper justify="space-between">
        <Link href="#" text="Home" />
        <Menu />
      </FlexWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #c7ecf9;
`;
