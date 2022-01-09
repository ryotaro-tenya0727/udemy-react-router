import { Link, useNavigate } from "react-router-dom";
export const Page1 = () => {
  const navigate = useNavigate();

  const onClickDetailA = () => {
    navigate("/page1/detailA");
  };
  return (
    <div>
      <h1>Page1</h1>
      <Link
        to={{ pathname: "/page1/detailA" }}
        state={{ test: "Page1DetailAのstateです" }}
      >
        DetailA
      </Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>Page1DetailAに移動</button>
    </div>
  );
};
