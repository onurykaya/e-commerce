import PropTypes from 'prop-types';
import Reset from '../components/Reset';

const ResetPage = ({ query }) => {
  console.log(query);
  if (!query?.token) {
    return (
      <>
        <p>Sorry you must supply a token!</p>
      </>
    );
  }
  return (
    <>
      <div>Reset {query.token}</div>
      <Reset token={query?.token} />
    </>
  );
};

ResetPage.propTypes = {
  query: PropTypes.string.isRequired,
};

export default ResetPage;
