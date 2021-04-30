import { gql } from '@apollo/client/core';
import { useMutation } from '@apollo/client';
import Form from './styles/Form';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $email: String!
    $password: String!
    $token: String!
  ) {
    redeemUserPasswordResetToken(
      email: $email
      password: $password
      token: $token
    ) {
      code
      message
    }
  }
`;

const Reset = ({ token }) => {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    token,
  });

  const [reset, { data, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await reset().catch(console.error);
    resetForm();
  };

  const successfullError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;

  console.log('data =>', error);

  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Reset Your Password</h2>
      <DisplayError error={error || successfullError} />
      <fieldset>
        {data?.redeemUserPasswordResetToken === null && (
          <p>Success! You can now sign in!</p>
        )}
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Adress"
            autoComplete="email"
            onChange={handleChange}
            value={inputs?.email}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            autoComplete="password"
            onChange={handleChange}
            value={inputs?.password}
          />
        </label>
        <button type="submit">Request Reset!</button>
      </fieldset>
    </Form>
  );
};

export default Reset;