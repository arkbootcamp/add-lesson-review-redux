import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../config/redux/actions/product";
import {useNavigate} from 'react-router-dom'

const Product = () => {
  const navigate = useNavigate()
  const [color, setColor] = useState('white')
  const { data, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div>
      <h1>page product</h1>
      <ul>
        {isLoading ? (
          <h1>LOadin....</h1>
        ) : (
          data.map((item) => <li style={{cursor: 'pointer', backgroundColor: color}} onClick={()=> navigate(`/main/product/${item.id}`)}>{item.name}</li>)
        )}
      </ul>
    </div>
  );
};

export default Product;
