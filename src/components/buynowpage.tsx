const BuyNowPage = (props:any) => {
  // const { state } = props.location || {};
  const { total_items, total_amount } =props
    return(
      <div>
      <h2>Your Cart : {total_items}</h2>
      <h1> Total Amount : {total_amount}</h1>
      </div>
    )
  };
  
  export default BuyNowPage;
