import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../../../components/base";
import { getDetailProduct, updateProduct } from "../../../config/redux/actions/product";

const EditProduct = () => {
  const [form, setForm] = useState({
    id: '',
    name: "",
    id_category: 0,
    description: "",
    price: "",
    stock: "",
    photo: ""
  });
  const navigate = useNavigate()
  const dispatch = useDispatch()
//   const {detail: detailProduct} = useSelector((state)=>state.product)
  const params = useParams()
  const handleGetDetail =async()=>{
    const result = await dispatch(getDetailProduct(params.id))
    setForm({
        ...form,
        id: result.id,
        id_category: result.id_category,
        name: result.name,
        description: result.description,
        price: result.price,
        stock:result.stock,
        photo: result.photo,
        file_photo: null
    })
  }
  useEffect(()=>{
    handleGetDetail()
  },[])
  const handleChange = (e) => {
    setForm((current) => {
      return {
        ...current,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleChangeImage = (e)=>{
    const fileFoto = e.target.files[0]
    const previewFoto = URL.createObjectURL(fileFoto)
    setForm({
        ...form,
        file_photo: fileFoto,
        photo: previewFoto
    })
  }
  const handleEdit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', form.name)
    formData.append('description', form.description)
    formData.append('stock', form.stock)
    formData.append('price', form.price)
    formData.append('id_category', form.id_category)
    formData.append('photo', form.file_photo)
    dispatch(updateProduct(form.id, formData))
    .then(()=>{
        alert('success')
    })
    .catch(()=> alert('error'))
  };
  return (
    <div>
      <h1>page edit product</h1>
      <div>
        <form onSubmit={handleEdit}>
        <img src={form.photo} alt="image" />
        <input type="file" name="image" onChange={handleChangeImage}/>
          <Input
            onChange={handleChange}
            id="name"
            label="Name :"
            placeholder="name"
            name="name"
            value={form.name}
          />
          <Input
            onChange={handleChange}
            id="id_category"
            label="ID Category :"
            placeholder="ID Category"
            name="id_category"
            value={form.id_category}
          />
          <Input
            onChange={handleChange}
            id="description"
            label="description :"
            placeholder="description"
            name="description"
            value={form.description}
          />
          <Input
            onChange={handleChange}
            id="stock"
            label="stock :"
            placeholder="stock"
            name="stock"
            type="number"
            value={form.stock}
          />
           <Input
            onChange={handleChange}
            id="price"
            label="price :"
            placeholder="price"
            name="price"
            type="number"
            value={form.price}
          />
          <br />
          <button type="submit">Edit</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
