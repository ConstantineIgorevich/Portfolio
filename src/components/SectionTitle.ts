import styled from "styled-components";
import { theme } from "../styles/theme";

type SectionTitlePropsType = {
    marginBottom?: string;
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
color: ${theme.colors.headingFont};
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 26px;
letter-spacing: 0.96px;
margin-bottom: ${props => props.marginBottom || 0}
`;