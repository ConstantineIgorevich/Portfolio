import styled from 'styled-components';

type LinkPropsType = {
  text: string,
  href: string,
}

export const Link = (props: LinkPropsType) => {
  return (
    <StyledLink href={props.href}>{props.text}</StyledLink>
  )
}

const StyledLink = styled.a`
background-color: #d5f9c7;`