import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchProducts } from '../Redux';
import MediaCard from "./MediaCard"
import Grid from '@mui/material/Grid';
function Api() {
    const productData=useSelector(state=>state.Product);
    // console.log(productData);
    // console.log('product data',productData);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts('jewelery'))
    console.log(productData);
    },[])
    useEffect(() => {
      // This effect will run whenever productData changes
      // console.log('Product data has changed:', productData);
    }, [productData]);

    return productData.loading ? (
      <h1>Loading...</h1>
  ) : productData.error ? (
      <h1>{productData.error}</h1>
  ) : (
      <div>
          <h2>Product List </h2>
          <Grid container spacing={2}>
              {productData && productData.products && productData.products.map((product) => (
                  <Grid item xs={4} key={product.id}> 
                  <MediaCard key={product.id} info={product}>{product.title}</MediaCard>
                  </Grid>
              
              ))}
          </Grid>
      </div>
  );
}

export default Api;