import { Link } from "react-router-dom";
export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="/page2/2">idが2のページへ</Link>
      <br />
      <Link to="/page2/3">idが3のページへ</Link>
      <br />
      <Link to="/page2/3?name=honi">クエリパラメーター</Link>
    </div>
  );
};
