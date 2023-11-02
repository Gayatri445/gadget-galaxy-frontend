import { useNavigate } from "react-router-dom";
import "./Product.scss";
const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate(`/product/${id}`)}>
      <div className="thumbnail">
        <img
          // src={
          //   process.env.REACT_APP_STRAPI_APP_URL +
          //   data?.img?.data?.attributes?.url
          // }
          src={data?.img?.data?.attributes?.url}
          alt=""
        />
      </div>
      <div className="prod-details">
        <span className="name">{data?.title}</span>
        <span className="price">&#8377;{data?.price}</span>
      </div>
    </div>
  );
};

export default Product;
