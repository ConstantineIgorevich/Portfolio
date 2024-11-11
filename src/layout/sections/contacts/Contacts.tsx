import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/button/Button";

export const Contacts = () => {
    return (
      <StyledContacts>
        <SectionTitle>Contacts</SectionTitle>
        <StyledForm>
            <Field placeholder="Name"/>
            <Field placeholder="Email"/>
            <Field as={"textarea"} placeholder="message"/>
            <Button text="Submit" type="submit"/>
        </StyledForm>
      </StyledContacts>
    );
  };

  const StyledContacts = styled.section`
  background-color: #e4edbc;
  `;

  const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  `;

  const Field = styled.input``;