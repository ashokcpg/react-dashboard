import "./newProduct.css";
import { Photos } from "../../Photos.js";

export default function NewProduct() {
	return (
		<div className='addProduct'>
			<h1 className='addProductTitle'>New Product</h1>
			<form className='addProductForm'>
				<div className='addProductItem'>
					<label htmlFor='username'>Upload an Image</label>
					<img
						src={Photos[5].product1.type}
						alt='Product Pic'
						className='addProductImage'
					/>
					<input type='file' id='file' />
				</div>

				{/* second field */}
				<div className='addProductItem'>
					<label htmlFor='fullname'>Name</label>
					<input type='text' placeholder='iPhone Pro Max' />
				</div>
				<div className='addProductItem'>
					<label htmlFor='active'>Active</label>
					<select name='active' id='active' className='addProductSelect'>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
				</div>
				<button className='addProductButton'>Create</button>
			</form>
		</div>
	);
}
