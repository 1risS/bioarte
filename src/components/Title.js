import styled from "styled-components";

const Title = styled.h1`
  font-size: 3rem;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.fg};
`;

const LightTitle = styled(Title)`
  font-weight: ${(props) => props.theme.fontWeights.light};
`;

export default Title;
export { Title, LightTitle };
