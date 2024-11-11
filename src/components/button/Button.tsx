import styled from 'styled-components';

type ButtonPropsType = {
  text: string,
  type?: "submit" | "reset",
};

export const Button = (props: ButtonPropsType) => {
  return (
    <StyledButton type={props.type}>{props.text}</StyledButton>
  )
};

const StyledButton = styled.button`
background-color: #ff815b;
`;