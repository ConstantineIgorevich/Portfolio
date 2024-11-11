import styled from "styled-components";
import { Button } from "../../../components/button/Button";
import pathToImg from "../../../assets/images/man-with-laptop.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper>
        <section>
          <h1>DEVELOPER</h1>
          <h2>Kanstantsin Davydovich</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt.
          </p>
          <Button text="Contact Me" />
        </section>
        <div>
          <img src={pathToImg} alt="man with laptop" />
        </div>
      </FlexWrapper>
      <Icon iconId={"arrow"} />
    </StyledMain>
  );
};

const StyledMain = styled.section`
  background-color: #d2cefa;
`;
