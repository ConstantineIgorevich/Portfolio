import styled from 'styled-components';
import { Link } from '../link/Link';
import { Button } from '../button/Button';

export const Menu = () => {
  return (
      <StyledMenu>
        
            <Link text="Project" href="#"/>
          
            <Button text='Contact'/>
          
      </StyledMenu>
  )
}

const StyledMenu = styled.nav`
    display: flex;
    * {
      margin: 10px;
    }
`;