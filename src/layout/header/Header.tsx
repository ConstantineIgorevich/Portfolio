import styled from 'styled-components';
import { Link } from '../../components/link/Link';
import { Menu } from '../../components/menu/Menu';

export const Header = () => {
  return (
    <StyledHeader>
      <Link href="#" text="Home"/>
      <Menu />
      
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
background-color: #c7ecf9;
display: flex;
justify-content: space-between;
`