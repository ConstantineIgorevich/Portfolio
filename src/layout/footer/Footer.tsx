import styled from "styled-components";
import { Social } from "./Social";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Link } from "../../components/Link";
import { Conteiner } from "../../components/Conteiner";

export const Footer = () => {
  return (
    <StyledFooter>
      <Conteiner>
        <FlexWrapper justify="space-around">
          <Social iconId={"gmail"} title={"gmail"} />
          <Social iconId={"linkedin"} title={"linkedin"} />
          <Social iconId={"github"} title={"github"} />
        </FlexWrapper>
        <FlexWrapper justify="space-around">
          <Link href={"#"}>Projects</Link>
          <Link href={"#"}>Contact</Link>
        </FlexWrapper>
        <StyledText>WEB DEVELOPER 2024</StyledText>
      </Conteiner>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin: 0 auto;
`;

const StyledText = styled.p`
  text-align: center;
`;
