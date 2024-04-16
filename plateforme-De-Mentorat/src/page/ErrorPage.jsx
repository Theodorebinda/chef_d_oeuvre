import { Link, useRouteError } from "react-router-dom";
import("../style/ErrorPage.css");

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container">
      <h1 className="title-error">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="content-error">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className="button-error" label="Clique ici">
        Click here
      </Link>
    </div>
  );
}
export default ErrorPage;
