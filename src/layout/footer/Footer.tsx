import styled from "styled-components";
import { Social } from "./Social";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Link } from "../../components/link/Link";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper justify="space-around">
        <Social iconId={"gmail"} title={"gmail"} />
        <Social iconId={"linkedin"} title={"linkedin"} />
        <Social iconId={"github"} title={"github"} />
      </FlexWrapper>
      <FlexWrapper justify="space-around">
        <Link text={"Projects"} href={"#"} />
        <Link text={"Contact"} href={"#"} />
      </FlexWrapper>
      <StyledText>WEB DEVELOPER 2024</StyledText>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
max-width: 500px;
margin: 0 auto;
`;

const StyledText = styled.p`
text-align: center;
`;