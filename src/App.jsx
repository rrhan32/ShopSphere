// import CssBaseline from "@mui/material/CssBaseline";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
import "./App.css";
// import ReactDOM from "react-dom/client";
// import { useState, useEffect } from "react";
// import CardSample from "./components/CardSample";
import ResponsiveAppBar from "./components/Navbar"
// import BasicPagination from "./components/Pagination/pagination";
// import "@coreui/coreui/dist/css/coreui.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// function App() {
//   const [products, setProducts] = useState([]);
//   const [count, setCount] = useState(0);
//   const [total_price, setTotal_Price] = useState(0);
//   const [inputvalue, setInputValue] = useState("jewelery");
import {Provider} from 'react-redux'
import store from './Redux/store'
import MediaCard from "./components/MediaCard";
//   useEffect(() => {
//     // Make the API call when the component mounts
//     fetch(`https://fakestoreapi.com/products/category/${inputvalue}`)
//       .then((res) => res.json())
//       .then((json) => {
//         setProducts(json); // Update the state with the fetched data
//         // console.log(json);
//       });
//   }, [inputvalue]); // The empty dependency array means this effect runs once after the component mounts

//   const handleSearch = (searchInput: any) => {
//     // Update the state variable in the parent component with the search data
//     setInputValue(searchInput);
//     // You can also perform any other processing with the search data here
//   };

//   const handleeCardClick = () => {
//     setCount(count + 1);
//     setTotal_Price(total_price + 100);
//   };
//   useEffect(() => {
//     if (count) console.log(count);
//   }, [count]);

//   return (
//     <div>
//       <CssBaseline />
//       <ResponsiveAppBar
//         position="sticky"
//         your_cart={count}
//         total_price={total_price}
//         onSearch={handleSearch}
//       />
//     <div className="bgclr">
//       <h1>E-COMMERCE</h1>
//       {/* <CCarousel controls>
//   <CCarouselItem>
//     <CImage className="d-block w-100" src="https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg" alt="slide 1" />
//   </CCarouselItem>
//   <CCarouselItem>
//     <CImage className="d-block w-100" src="https://coreui.io/react/docs/static/vue-8a74d93fde1a02c247304291cce46797.jpg" alt="slide 2" />
//   </CCarouselItem>
//   <CCarouselItem>
//     <CImage className="d-block w-100" src="https://coreui.io/react/docs/static/angular-2f3764e2ec8b0b47ebe68f2f80260ef1.jpg" alt="slide 3" />
//   </CCarouselItem>
//   </CCarousel> */}

//       <Container>
//         <Box sx={{ mt: 3 }}>
//           <CardSample onCardsClick={handleeCardClick} product_api={products} />
//         </Box>
//         <BasicPagination />
//       </Container>
//       </div>
//     </div>
//   );
// }
// export default App;
import React from 'react'
import API from  './components/api'
import Navbar from './components/Navbar'

function App() {
  return (
    <Provider store={store}>
    <div className='App'>
      <Navbar/>
      <API/>
    </div>
    </Provider>
  )
}

export default App