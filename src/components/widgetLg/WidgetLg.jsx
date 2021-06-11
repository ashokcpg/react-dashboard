import "./widgetlg.css";
import ProfileImg1 from "../../assets/profile1.jpg";
import ProfileImg3 from "../../assets/profile3.jpg";
import ProfileImg4 from "../../assets/profile4.jpg";
import ProfileImg5 from "../../assets/profile5.jpg";

const Button = ({ type }) => {
	return <button className={"widgetLgButton " + type}>{type}</button>;
};

const WidgetLg = () => {
	return (
		<div className='widgetLg'>
			<h3 className='widgetLgTitle'>Latest Transactions</h3>
			<table className='widgetLgTable'>
				<tr className='widgetLgTr'>
					<th className='widgetLgTh'>Customer</th>
					<th className='widgetLgTh'>Date</th>
					<th className='widgetLgTh'>Amount</th>
					<th className='widgetLgTh'>Status</th>
				</tr>
				{/* First Item */}
				<tr className='widgetLgTr'>
					<td className='widgetLgUser'>
						<img src={ProfileImg5} alt='asd' className='widgetLgImg' />
						<span className='widgetLgName'>Susan Smith</span>
					</td>
					<td className='widgetLgDate'>04 Jun 2021</td>
					<td className='widgetLgAmount'>$425.80</td>
					<td className='widgetLgStatus'>
						<Button type='Approved' />
					</td>
				</tr>
				{/* Second Item */}
				<tr className='widgetLgTr'>
					<td className='widgetLgUser'>
						<img src={ProfileImg3} alt='asd' className='widgetLgImg' />
						<span className='widgetLgName'>Adam Vague</span>
					</td>
					<td className='widgetLgDate'>07 Jun 2021</td>
					<td className='widgetLgAmount'>$222.80</td>
					<td className='widgetLgStatus'>
						<Button type='Declined' />
					</td>
				</tr>
				{/* Third Item */}
				<tr className='widgetLgTr'>
					<td className='widgetLgUser'>
						<img src={ProfileImg1} alt='asd' className='widgetLgImg' />
						<span className='widgetLgName'>Billy Torvalds</span>
					</td>
					<td className='widgetLgDate'>31 May 2021</td>
					<td className='widgetLgAmount'>$612.11</td>
					<td className='widgetLgStatus'>
						<Button type='Pending' />
					</td>
				</tr>
				{/* Fourth Item */}
				<tr className='widgetLgTr'>
					<td className='widgetLgUser'>
						<img src={ProfileImg4} alt='asd' className='widgetLgImg' />
						<span className='widgetLgName'>Stella Clanton</span>
					</td>
					<td className='widgetLgDate'>09 Jun 2021</td>
					<td className='widgetLgAmount'>$871.51</td>
					<td className='widgetLgStatus'>
						<Button type='Approved' />
					</td>
				</tr>
				{/* end */}
			</table>
		</div>
	);
};

export default WidgetLg;
