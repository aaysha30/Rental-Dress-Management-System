import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../store/cartSlice";

export function CartRemove(){

    var desc='';
    const cartList=useSelector((state1)=>{return state1.cartItems.map((e)=>{return e})});
    console.log("cart Remove ->cartlist :"+cartList)
    console.log(cartList.map((e)=>{console.log(e.description)}))
	const dispatch=useDispatch();


	//Remove from cart !!
	
    function handlerRemove(product){
        console.log("Remove : "+product.description)
        dispatch(removeProduct(product))
		console.log("Product : "+product.description)
    }

    return(
        <div>
       {/* <h2>   {cartList.map((e)=>{
        
         { desc=e.description}
         
        <input type="button" value="remove"/>

       })
       
       } </h2>
        <h1>{desc}</h1> */}
        <section className="products section">
					<div className="container">
						<div className="row">
						
						{cartList.map((product)=>{
					const item1=product
				console.log(product.ApparelID)
							return(
								<>
									<div className="col-md-4">
										<div className="product-item">
											<div className="product-thumb">
												<img className="img-responsive" src={product.image} alt="product-img" />
												<div className="preview-meta">
												
												</div>
											</div>
											<div className="product-content">
												<h2>
														{product.description}
														{product.ApparelID}
												</h2>
												<h3>
													{/* <Link to={`/productdetails/${id}`} className="btn btn-main">
														SELECT
													</Link> */}
                                                    
                                                    <input type="button" value="remove" onClick={()=>{handlerRemove(item1)}}/>
												</h3>
												{/* <p className="price" name="pcost">{product.id}</p> */}
											</div>
										</div>
									</div>
								</>
							)//product.apparelid
						})}	


						</div>
					</div>
				</section>
       </div> 
    )
}