import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";


type SocialPropsType = {
    iconId: string;
    title: string;
};

export const Social = (props: SocialPropsType) => {
  return (
    <StyledSocial>
      <Icon iconId={props.iconId} />
      <SocialTitle>{props.title}</SocialTitle>
    </StyledSocial>
  );
};

const StyledSocial = styled.div``;

const SocialTitle = styled.h3``;