import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Menu from "./Menu";
import Border from "./Border"
import "./breakWord.css"


class CardProject extends React.Component {

	constructor(props){
		super(props);

		this.state = {};
		this.appendMenu = this.appendMenu.bind(this);
	}

	appendMenu(app, code, e){
		
		//closing listener
		let listener = (ev) => {
			if(this.state.menu && ev.target.id !== "menu" && ev.target.id !== "menuItem" && ev.target.id !== e.target.id){
				this.setState({blur: false, menu: null});
				document.removeEventListener("click", listener);
			}
		};

		if(app && code){
			this.setState({blur: true, menu: <Menu app={app} code={code}/>});

			if(!this.state.menu)
				document.addEventListener("click", listener);
		}
		else{
			window.open(code || app);
		}

	}


	render() {
		return (
			<Border content={{
				marginTop: this.props.content.marginTop,
				marginLeft: this.props.content.marginLeft,
				id: this.props.content.id,
				app: this.props.content.app,
				code: this.props.content.code,
				onAnimationFinish: this.appendMenu}}>
				<Card sx={{ 
					mb: -0.5,
					position: "relative",
					display: "inline-block",
					width: 330}}>
					<CardActionArea>
						{this.state.menu}
						<CardMedia
							component="img"
							height={this.props.content.imageHeight}
							style={ this.state.blur ? {filter: "blur(3px)"} : {filter: "none"}}
							src={this.props.content.src}
							alt="Card"
						/>
						<CardContent style={ {height: this.props.content.textHeight || 80 }}>
							<Typography gutterBottom variant="h6" component="div">
								{this.props.content.title}
							</Typography>
							<Typography variant="body2" color="text.secondary" className="breakWord">
								{this.props.content.description}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Border>
		);
	};
}

export default CardProject;