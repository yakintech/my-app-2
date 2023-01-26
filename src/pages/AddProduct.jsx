import React from 'react'
import { useDispatch } from 'react-redux'
import { AddProductToApi } from '../store/ProductSlice';

function AddProduct() {

    let dispatch = useDispatch();

    const addNew = () => {

        let newProduct = {
            name:'Iphone',
            unitPrice: 5000
        }

        dispatch(AddProductToApi(newProduct))

    }
  return (<>
    <button onClick={addNew}>Add</button>
  </>
  )
}

export default AddProduct