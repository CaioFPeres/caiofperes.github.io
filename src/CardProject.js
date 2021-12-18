import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./breakWord.css"



class CardProject extends React.Component {
  render() {
    return (
      <Card sx={{ mr: 1, ml: this.props.content.marginLeft || 6, mb: 6, display: "inline-block", width: "auto", maxWidth: 330, boxShadow: "10px 10px rgb(143, 143, 143)" }} onClick={ event => { window.open(this.props.content.href)}} >
        <CardActionArea>
          <CardMedia
            component="img"
            height={this.props.content.imageHeight}
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
    );
  };
}

export default CardProject;