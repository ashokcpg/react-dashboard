import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./topbar.css";
import Avatar from "../../assets/avatar.png";
export default function Topbar() {
	return (
		<div className='topbar'>
			<div className='topbarWrapper'>
				<div className='topLeft'>
					<span className='logo'>Dashboard</span>
				</div>
				<div className='topRight'>
					{/* First Icon */}
					<div className='topbarIconContainer'>
						<NotificationsNone className='material-icons' />
						<span className='topIconBadge'>3</span>
					</div>
					{/* Second Icon */}
					<div className='topbarIconContainer'>
						<Language className='material-icons' />
						<span className='topIconBadge'>5</span>
					</div>
					{/* Third Icon */}
					<div className='topbarIconContainer'>
						<Settings className='material-icons' />
						<span className='topIconBadge'>7</span>
					</div>
					<img src={Avatar} alt='Avatar' className='topAvatar' />
				</div>
			</div>
		</div>
	);
}
