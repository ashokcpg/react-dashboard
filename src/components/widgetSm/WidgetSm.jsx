import "./widgetsm.css";
import ProfileImg1 from "../../assets/profile1.jpg";
import ProfileImg2 from "../../assets/profile2.jpg";
import ProfileImg3 from "../../assets/profile3.jpg";
import ProfileImg4 from "../../assets/profile4.jpg";
import ProfileImg5 from "../../assets/profile5.jpg";
import { Visibility } from "@material-ui/icons";

const WidgetSm = () => {
	return (
		<div className='widgetSm'>
			<span className='widgetSmTitle'>
				New Join Members
				<ul className='widgetSmList'>
					<li className='widgetSmListItem'>
						<img
							src={ProfileImg1}
							alt='Profile Avatar'
							className='widgetSmImg'
						/>
						<div className='widgetSmUser'>
							<span className='widgetSmUsername'>William Nye</span>
							<span className='widgetSmUserTitle'>Developer</span>
						</div>
						<button className='widgetSmButton'>
							<Visibility className='widgetSmIcon' /> Display
						</button>
					</li>
					{/* User Two */}
					<li className='widgetSmListItem'>
						<img
							src={ProfileImg2}
							alt='Profile Avatar'
							className='widgetSmImg'
						/>
						<div className='widgetSmUser'>
							<span className='widgetSmUsername'>Adam Smith</span>
							<span className='widgetSmUserTitle'> Engineer</span>
						</div>
						<button className='widgetSmButton'>
							<Visibility className='widgetSmIcon' /> Display
						</button>
					</li>
					{/* User Three */}
					<li className='widgetSmListItem'>
						<img
							src={ProfileImg3}
							alt='Profile Avatar'
							className='widgetSmImg'
						/>
						<div className='widgetSmUser'>
							<span className='widgetSmUsername'>John Coonley</span>
							<span className='widgetSmUserTitle'>Designer</span>
						</div>
						<button className='widgetSmButton'>
							<Visibility className='widgetSmIcon' /> Display
						</button>
					</li>
					{/* User Four */}
					<li className='widgetSmListItem'>
						<img
							src={ProfileImg4}
							alt='Profile Avatar'
							className='widgetSmImg'
						/>
						<div className='widgetSmUser'>
							<span className='widgetSmUsername'>Ashton Rickley</span>
							<span className='widgetSmUserTitle'>Marketing Manager</span>
						</div>
						<button className='widgetSmButton'>
							<Visibility className='widgetSmIcon' /> Display
						</button>
					</li>
					{/* User Five */}
					<li className='widgetSmListItem'>
						<img
							src={ProfileImg5}
							alt='Profile Avatar'
							className='widgetSmImg'
						/>
						<div className='widgetSmUser'>
							<span className='widgetSmUsername'>Robert Huth</span>
							<span className='widgetSmUserTitle'>Relationship Manager</span>
						</div>
						<button className='widgetSmButton'>
							<Visibility className='widgetSmIcon' /> Display
						</button>
					</li>
					{/* End  */}
				</ul>
			</span>
		</div>
	);
};

export default WidgetSm;
