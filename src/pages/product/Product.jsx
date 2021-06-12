import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/charts/Chart";

import { productData } from "../../dummyData.js";
import { Photos } from "../../Photos.js";
import { Publish } from "@material-ui/icons";

export default function Product() {
	return (
		<div className='product'>
			<div className='productTitleContainer'>
				<h1 className='productTitle'>Product</h1>
				<Link to='/newProduct'>
					<button className='productAddButton'>Create</button>
				</Link>
			</div>
			<div className='productTop'>
				<div className='productTopLeft'>
					<Chart data={productData} dataKey='Sales' title='Sales Performance' />
				</div>
				<div className='productTopRight'>
					<div className='productInfo'>
						<div className='productInfoTop'>
							<img
								src={Photos[5].product1.type}
								alt='Product Img'
								className='productInfoImg'
							/>
							<span className='productName'>Apple Airpods</span>
						</div>
						<div className='productInfoBottom'>
							<div className='productInfoItem'>
								<span className='productInfoKey'>id:</span>
								<span className='productInfoValue'>123</span>
							</div>
							{/* Sales */}
							<div className='productInfoItem'>
								<span className='productInfoKey'>Sales:</span>
								<span className='productInfoValue'>6842</span>
							</div>
							{/* Info */}
							<div className='productInfoItem'>
								<span className='productInfoKey'>Active:</span>
								<span className='productInfoValue'>6123</span>
							</div>
							{/* Stock */}
							<div className='productInfoItem'>
								<span className='productInfoKey'>In Stock:</span>
								<span className='productInfoValue'>No</span>
							</div>
							{/* End */}
						</div>
					</div>
				</div>
			</div>
			<div className='productBottom'>
				<form action='' className='productForm'>
					<div className='productFormLeft'>
						<label htmlFor='name'>Product Name</label>
						<input type='text' placeholder='Apple AirPod' />
						<label htmlFor='stock'>In Stock</label>
						<select name='active' id='active' className='productStockSelect'>
							<option value='yes'>Yes</option>
							<option value='no'>No</option>
						</select>
					</div>
					<div className='productFormRight'>
						<div className='productUpload'>
							<img
								src={Photos[5].product1.type}
								alt='Product'
								className='productUploadImg'
							/>
							<label htmlFor='file'>
								<Publish />
							</label>
							<input type='file' style={{ display: "none" }} id='file' />
						</div>
						<button className='productButton'>Update</button>
					</div>
				</form>
			</div>
		</div>
	);
}
