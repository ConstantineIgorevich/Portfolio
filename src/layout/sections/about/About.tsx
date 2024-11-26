import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Conteiner } from "../../../components/Conteiner";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/theme";

export const About = () => {
  return (
    <StyledAbout>
      <Conteiner>
        <SectionTitle marginBottom={"20px"}>About me</SectionTitle>
        <FlexWrapper>
          <Description>
            The long barrow was built on land previously inhabited in the
            Mesolithic period. It consisted of a sub-rectangular earthen
            tumulus, estimated to have been 15 metres (50 feet) in length, with
            a chamber built from sarsen megaliths on its eastern end. Both
            inhumed and cremated human remains were placed within this chamber
            during the Neolithic period, representing at least nine or ten
            individuals.
          </Description>
        </FlexWrapper>
      </Conteiner>
    </StyledAbout>
  );
};

const StyledAbout = styled.section``;

const Description = styled.p`
max-width: 865px;
position: relative;
  &::before {
    position: absolute;
    content: "";
    border-radius: 5px;
    width: 5px;
    height: 100%;
    background-color: ${theme.colors.accent};
    left: -10px;
  }
`;
