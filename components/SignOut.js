import { gql } from '@apollo/client/core';
import { useMutation } from '@apollo/client';
import { CURRENT_USER_QUERY } from './User';

const SIGN_OUT_MUTATION = gql`
  mutation {
    endSession
  }
`;

const SignOut = () => {
  const [signout] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <button onClick={signout} type="button">
      Sıgn Out
    </button>
  );
};

export default SignOut;
