import React from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
	return (
		<div className='featured'>
			<div className='featuredItem'>
				<span className='featuredTitle'>Sales</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>$4,431</span>
					<span className='featuredMoneyRate green'>
						{" "}
						+62.4 <ArrowUpward className='featuredIcon' />
					</span>
				</div>
				<span className='featuredSub'>Compared to Last Month</span>
			</div>

			{/* Second Item */}
			<div className='featuredItem'>
				<span className='featuredTitle'>Revenue</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>$2,431</span>
					<span className='featuredMoneyRate red'>
						{" "}
						-11.4 <ArrowDownward className='featuredIcon' />
					</span>
				</div>
				<span className='featuredSub'>Compared to Last Month</span>
			</div>

			{/* Third Item */}
			<div className='featuredItem'>
				<span className='featuredTitle'>Cost</span>
				<div className='featuredMoneyContainer'>
					<span className='featuredMoney'>$4,431</span>
					<span className='featuredMoneyRate green'>
						{" "}
						+2.4 <ArrowUpward className='featuredIcon' />
					</span>
				</div>
				<span className='featuredSub'>Compared to Last Month</span>
			</div>
			{/* End of items */}
		</div>
	);
}
