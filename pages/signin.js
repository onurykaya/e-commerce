import styled from 'styled-components';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import RequestReset from '../components/RequestReset';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2rem;
`;

const SignInPage = () => (
  <GridStyles>
    <SignIn />
    <SignUp />
    <RequestReset />
  </GridStyles>
);

export default SignInPage;
