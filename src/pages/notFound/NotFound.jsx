import { useNavigate } from "react-router-dom";
import mirror from "../../assets/404.png";
import "./NotFound.scss";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="notFound">
        <aside>
          <img src={mirror} alt="404" />
        </aside>
        <main>
          <h1>Sorry!</h1>
          <p>
            The page you visited was not found.
            <em>You should try another page.</em>
          </p>
          <button onClick={() => navigate(-1)}>Go back!</button>
        </main>
      </div>
    </div>
  );
};

export default NotFound;
