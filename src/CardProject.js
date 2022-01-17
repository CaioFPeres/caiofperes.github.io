import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CardActionArea } from '@mui/material';
import "./breakWord.css"


class CardProject extends React.Component {

  constructor(props){
    super(props);

    this.state = {};

  }

  handleClose = () => {
    this.setState({menu: null});
  };

  appendMenu(app, code, e){
    //window.open(href)
    var rect = e.target.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);

    if(app && code){
      this.setState({menu: 
        <Menu
          id="demo-positioned-menu"
          open={true}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: rect.top - 100,
            horizontal: rect.left + 150,
          }}
          >
          <MenuItem onClick={ev => {window.open(app)}}>App</MenuItem>
          <MenuItem onClick={ev => {window.open(code)}}>Code</MenuItem>
        </Menu>
      });
    }
    else{
      window.open(code || app);
    }
  }

  render() {
    return (
      <>
        {this.state.menu}
        <Card sx={{ mr: 1, ml: this.props.content.marginLeft || 6, mb: 6, display: "inline-block", width: "auto", maxWidth: 330, boxShadow: "10px 10px rgb(143, 143, 143)" }} onClick={ event => { this.appendMenu(this.props.content.app, this.props.content.code, event)}} >
          <CardActionArea>
            <CardMedia
              component="img"
              height={this.props.content.imageHeight}
              style={{minWidth: 330}}
              src={this.props.content.src}
              alt="Card"
            />
            <CardContent style={{ height: this.props.content.textHeight || 80}}>
              <Typography gutterBottom variant="h6" component="div">
                {this.props.content.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" className="breakWord">
                {this.props.content.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    );
  };
}

export default CardProject;