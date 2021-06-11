import "./chart.css";
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
	return (
		<div className='chart'>
			<h3 className='chartTitle'>{title}</h3>
			<ResponsiveContainer width='100%' aspect={4 / 1} height='100%'>
				<LineChart data={data}>
					<XAxis dataKey='Month' stroke='#5550bd' interval='0' />
					<Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
					<Tooltip />
					{grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
					<Legend />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};
export default Chart;
