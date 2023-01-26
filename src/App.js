import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddProduct from './pages/AddProduct';
import { fetchProducts } from './store/ProductSlice';

function App() {

  let state = useSelector(state => state);
  let dispatch = useDispatch();

  console.log('State ', state);

  useEffect(() => {

    dispatch(fetchProducts())

  }, [])


  return (
    <>
    <h1>{state.error}</h1>
      {
        state.loading == true ? <><h1>loading...</h1></> :
          <ul>
            {
              state.products.map(item => <li key={item.id}>{item.name}</li>)
            }
          </ul>
      }
      <h1>Add Product Page</h1>
      <AddProduct />
    </>

  )
}

export default App