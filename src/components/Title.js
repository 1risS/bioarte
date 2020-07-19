import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3rem;
  font-family: 'Open Sans';
  font-weight: 400;
  color: ${props => props.theme.colors.fg1};
`;

const LightTitle = styled(Title)`
  font-weight: 300;
`;

export default Title;
export { Title, LightTitle };