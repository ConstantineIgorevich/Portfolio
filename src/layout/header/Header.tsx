import styled from "styled-components";
import { Link } from "../../components/Link";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Conteiner } from "../../components/Conteiner";

export const Header = () => {
  return (
    <StyledHeader>
      <Conteiner>
        <FlexWrapper justify="space-between" align="center" >
          <Link href="#">Home</Link>
          <Menu />
        </FlexWrapper>
      </Conteiner>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
`;
