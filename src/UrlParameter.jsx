import { useParams, useLocation } from "react-router-dom";
export const UrlParameter = () => {
  let { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <p>idが{id}のUrlParameterページです</p>
      <p>クエリパラメーターは{query.get("name")}です</p>
    </div>
  );
};
