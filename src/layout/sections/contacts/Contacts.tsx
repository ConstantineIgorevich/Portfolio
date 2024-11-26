import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Conteiner } from "../../../components/Conteiner";

export const Contacts = () => {
  return (
    <StyledContacts>
      <Conteiner>
        <SectionTitle>Contacts</SectionTitle>
        <StyledForm>
          <Field placeholder="Name" />
          <Field placeholder="Email" />
          <Field as={"textarea"} placeholder="message" />
          <Button>Submit</Button>
        </StyledForm>
      </Conteiner>
    </StyledContacts>
  );
};

const StyledContacts = styled.section``;

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Field = styled.input``;
