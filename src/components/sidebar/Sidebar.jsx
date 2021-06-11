import React from "react";

import {
	AttachMoneyOutlined,
	BarChart,
	DynamicFeed,
	LineStyle,
	MailOutline,
	MessageOutlined,
	PermIdentity,
	Report,
	Storefront,
	Timeline,
	TrendingUp,
	WorkOutline,
} from "@material-ui/icons";

import "./sidebar.css";
import { Link } from "react-router-dom";
export default function Sidebar() {
	return (
		<div className='sidebar'>
			{/* First Menu */}
			<div className='sidebarWrapper'>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Dashboard</h3>
					<ul className='sidebarList'>
						<Link to='/' className='sidebarListItem active'>
							<LineStyle className='sidebarIcons' />
							Home
						</Link>
						<Link to='/analytics' className='sidebarListItem'>
							<Timeline className='sidebarIcons' />
							Analytics
						</Link>
						<Link to='/sales' className='sidebarListItem'>
							<TrendingUp className='sidebarIcons' />
							Sales
						</Link>
					</ul>
				</div>
			</div>
			{/* Second Menu */}
			<div className='sidebarWrapper'>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Quick Menu</h3>
					<ul className='sidebarList'>
						<Link to='/users' className='sidebarListItem'>
							<PermIdentity className='sidebarIcons' />
							Users
						</Link>
						<Link to='/products' className='sidebarListItem'>
							<Storefront className='sidebarIcons' />
							Products
						</Link>
						<Link to='/transactions' className='sidebarListItem'>
							<AttachMoneyOutlined className='sidebarIcons' />
							Transations
						</Link>
						<Link to='/reports' className='sidebarListItem'>
							<BarChart className='sidebarIcons' />
							Reports
						</Link>
					</ul>
				</div>
			</div>
			{/* Third Menu */}
			<div className='sidebarWrapper'>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Notifications</h3>
					<ul className='sidebarList'>
						<Link to='/mail' className='sidebarListItem'>
							<MailOutline className='sidebarIcons' />
							Mail
						</Link>
						<Link to='/feedback' className='sidebarListItem'>
							<DynamicFeed className='sidebarIcons' />
							Feedback
						</Link>
						<Link to='/messages' className='sidebarListItem'>
							<MessageOutlined className='sidebarIcons' />
							Messages
						</Link>
					</ul>
				</div>
			</div>
			{/* Fourth Menu */}
			<div className='sidebarWrapper'>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Staff</h3>
					<ul className='sidebarList'>
						<Link to='/manage' className='sidebarListItem'>
							<WorkOutline className='sidebarIcons' />
							Manage
						</Link>
						<Link to='/analytics' className='sidebarListItem'>
							<Timeline className='sidebarIcons' />
							Analytics
						</Link>
						<Link to='/reports' className='sidebarListItem'>
							<Report className='sidebarIcons' />
							Reports
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}
