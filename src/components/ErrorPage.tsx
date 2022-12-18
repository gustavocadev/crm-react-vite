import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as any;
  return (
    <div>
      <h1>Error 404</h1>
      <p>{error.message}</p>
    </div>
  );
};
export default ErrorPage;
