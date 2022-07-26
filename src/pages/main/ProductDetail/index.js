import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getDetailProduct } from '../../../config/redux/actions/product'
import { mapPin, pen } from '../../../herpers/icon'
import {useNavigate} from 'react-router-dom'
const ProducDetail = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {detail: detailProduct} = useSelector((state)=>state.product)
  const params = useParams()
  useEffect(()=>{
    dispatch(getDetailProduct(params.id))
  },[])
  return (
    <div>
      <h1>detail product</h1>
      <ul>
        <img src={pen} alt="pen" />
        <img src={mapPin} alt="mapPin" />
      <li>nama : {detailProduct?.name} </li>
      <li>description : {detailProduct?.description}</li>
      <li>price : {detailProduct?.price}</li>
      </ul>
      <button onClick={()=>navigate(`/main/edit/${detailProduct?.id}`)}>Edit</button>
    </div>
  )
}

export default ProducDetail