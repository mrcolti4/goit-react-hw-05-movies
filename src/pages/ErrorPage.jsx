import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      Error! Something went wrong! You can return to{' '}
      <Link to={'/'}>homepage</Link>
    </div>
  );
};

export default ErrorPage;
