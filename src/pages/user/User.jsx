import "./user.css";
import { Photos } from "../../Photos.js";
import {
	CalendarToday,
	LocationSearching,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
	Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function User() {
	return (
		<div className='user'>
			<div className='userTitleContainer'>
				<h1 className='userTitle'>Edit User</h1>
				<Link to='/newUser'>
					<button className='userAddButton'>Create</button>
				</Link>
			</div>
			<div className='userContainer'>
				<div className='userShow'>
					<div className='userShowTop'>
						<img
							src={Photos[0].photo1.type}
							alt='Test Placeholder'
							className='userShowImg'
						/>
						<div className='userShowTopTitle'>
							<span className='userShowUsername'>Admin Admin</span>
							<span className='userShowUserTitle'>Software Engineer</span>
						</div>
					</div>
					<div className='userShowBottom'>
						<span className='userShowTitle'>Account Details</span>
						<div className='userShowInfo'>
							<PermIdentity className='userShowIcon' />
							<span className='userShowInfoTitle'>adminadmin</span>
						</div>
						{/* second */}
						<div className='userShowInfo'>
							<CalendarToday className='userShowIcon' />
							<span className='userShowInfoTitle'>10 June, 1999</span>
						</div>
						{/* third */}
						<span className='userShowTitle'>Contact Details</span>

						<div className='userShowInfo'>
							<PhoneAndroid className='userShowIcon' />
							<span className='userShowInfoTitle'>+123 456 7890</span>
						</div>
						{/* fourth */}
						<div className='userShowInfo'>
							<MailOutline className='userShowIcon' />
							<span className='userShowInfoTitle'>adminadmin@gmail.com</span>
						</div>
						{/* fifth */}
						<div className='userShowInfo'>
							<LocationSearching className='userShowIcon' />
							<span className='userShowInfoTitle'>Pokhara, Nepal</span>
						</div>
						{/* End */}
					</div>
				</div>
				<div className='userUpdate'>
					<span className='userUpdateTitle'>Edit</span>
					<form className='userUpdateForm'>
						<div className='userUpdateLeft'>
							<div className='userUpdateItem'>
								<label>Username</label>
								<input
									type='text'
									placeholder='adminadmin'
									className='userUpdateInput'
								/>
							</div>
							{/* Second */}
							<div className='userUpdateItem'>
								<label>Fullname</label>
								<input
									type='text'
									placeholder='Admin Admin'
									className='userUpdateInput'
								/>
							</div>
							{/* Third */}
							<div className='userUpdateItem'>
								<label>Email</label>
								<input
									type='text'
									placeholder='adminadmin@gmai.com'
									className='userUpdateInput'
								/>
							</div>
							{/* Fourth */}
							<div className='userUpdateItem'>
								<label>Phone</label>
								<input
									type='text'
									placeholder='+123 456 7890'
									className='userUpdateInput'
								/>
							</div>
							{/* Fifth */}
							<div className='userUpdateItem'>
								<label>Address</label>
								<input
									type='text'
									placeholder='Pokhara, Nepal'
									className='userUpdateInput'
								/>
							</div>
							{/* End */}
						</div>
						<div className='userUpdateRight'>
							<div className='userUpdateUpload'>
								<img
									src={Photos[0].photo1.type}
									className='userUpdateImg'
									alt=''
								/>
								<label htmlFor='file'>
									<Publish className='userUpdateIcon' />
								</label>
								<input
									type='file'
									name=''
									id='file'
									style={{ display: "none" }}
								/>
							</div>
							<button className='userUpdateButton'>Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
