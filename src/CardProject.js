import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Menu from "./Menu";

import "./breakWord.css"


class CardProject extends React.Component {

  constructor(props){
    super(props);

    this.state = {};
  }


  appendMenu(app, code, e){
    
    //closing listener
    let listener = (ev) => {
      if(this.state.menu && ev.target.id != "menu" && ev.target.id != "menuItem" && ev.target.id != e.target.id){
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
      <>
        <Card sx={{ mr: 1, ml: this.props.content.marginLeft || 6, mb: 6, display: "inline-block", width: 330, boxShadow: "10px 10px rgb(143, 143, 143)" }} onClick={ event => { event.target.id = this.props.content.id; this.appendMenu(this.props.content.app, this.props.content.code, event)}} >
          <CardActionArea>
            {this.state.menu}
            <CardMedia
              component="img"
              height={this.props.content.imageHeight}
              style={ this.state.blur ? {filter: "blur(3px)"} : {filter: "none"}}
              src={this.props.content.src}
              alt="Card"
            />
            <CardContent style={ {height: this.props.content.textHeight || 80, filter: this.state.blur ? "blur(3px)" : "none" }}>
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