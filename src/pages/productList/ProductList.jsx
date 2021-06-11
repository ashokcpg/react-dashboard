import "./productList.css";

import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../dummyData.js";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
	// console.log(productRows);
	const [data, setData] = useState(productRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};
	// useEffect(() => {
	// 	setData(productRows);
	// }, []);
	const columns = [
		{ field: "id", headerName: "ID", width: 100 },
		{
			field: "",
			headerName: "Product",
			width: 220,
			renderCell: (params) => {
				return (
					<div className='productListUser'>
						<img className='productListImg' src={params.row.img} alt='' />
						{params.row.name}
					</div>
				);
			},
		},
		{ field: "stock", headerName: "Stock", width: 260 },
		{
			field: "status",
			headerName: "Status",
			width: 160,
		},
		{
			field: "price",
			headerName: "Price",
			width: 200,
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/product/" + params.row.id}>
							<button className='productListEdit'>Edit</button>
						</Link>
						<DeleteOutline
							className='productListDelete'
							onClick={() => handleDelete(params.row.id)}
						/>
					</>
				);
			},
		},
	];
	return (
		<div className='productList'>
			<DataGrid
				className='userListTable'
				rows={data}
				disableSelectionOnClick
				columns={columns}
				pageSize={8}
				checkboxSelection
				autoHeight
				disableExtendRowFullWidth
			/>
		</div>
	);
}
