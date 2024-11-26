import styled from "styled-components";
import { Button } from "../../../components/Button";
import pathToImg from "../../../assets/images/man-with-laptop.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { Conteiner } from "../../../components/Conteiner";
import { theme } from "../../../styles/theme";

export const Main = () => {
  return (
    <StyledMain>
      <Conteiner>
        <FlexWrapper justify="space-between" align="center">
          <StyledSection>
            <Specialization>Developer</Specialization>
            <MyName>Kanstantsin Davydovich</MyName>
            <Description>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt.
            </Description>
            <Button>Contact Me</Button>
          </StyledSection>
          <img src={pathToImg} alt="man with laptop" />
        </FlexWrapper>
        <FlexWrapper justify="center">
          <Icon iconId={"arrow"} height="30" width="30" viewBox="0 0 30 30"/>
        </FlexWrapper>
      </Conteiner>
    </StyledMain>
  );
};

const Description = styled.p`
  color: ${theme.colors.primaryFont};
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.64px;
  margin-bottom: 29px;
  margin-left: 6px;
`;

const MyName = styled.h2`
  color: ${theme.colors.accent};
  font-family: Montserrat;
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 11px;
`;

const Specialization = styled.h1`
  margin-bottom: 10px;
  margin-left: 6px;
  font-family: Tinos;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.headingFont};
`;

const StyledMain = styled.section``;

const StyledSection = styled.section`
  max-width: 520px;
`;
