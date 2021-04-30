import styled from 'styled-components';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2rem;
`;

const SignInPage = () => (
  <GridStyles>
    <SignIn />
    <SignUp />
  </GridStyles>
);

export default SignInPage;