import * as React from 'react';
import "./Border.css"


class Border extends React.Component {

	constructor(props){
		super(props);

		this.state = {};
        this.state.currentDeg = 90;
        this.state.beginning = 90;
	}

    animateBorderStart(ev){
        this.state.interval = setInterval( () => {
            if(this.state.currentDeg == 271 && this.state.beginning < 271){
                document.getElementById(ev.target.id).style.backgroundImage = "linear-gradient(" + (90).toString() + "deg, transparent 50%, white 50%), linear-gradient(" + (this.state.beginning++).toString() + "deg, transparent 50%, white 50%)";
            }
            else if (this.state.beginning == 271) { // 271 otherwise it wont complete the circle
                // uncomment to be infinite: 
                // this.state.currentDeg = 90;
                // this.state.beginning = 90;
                // document.getElementById(ev.target.id).style.backgroundImage = "linear-gradient(" + (this.state.currentDeg++).toString() + "deg, transparent 50%, rgb(94, 122, 131) 50%), linear-gradient(" + (this.state.beginning).toString() + "deg, transparent 50%, white 50%)";

                // remove interval and proceed to the desired action:
                clearInterval(this.state.interval);
                let e = {};
                e.target = {};
                e.target.id = this.props.content.id;
                this.props.content.onAnimationFinish(this.props.content.app, this.props.content.code, e);
            }
            else{
                document.getElementById(ev.target.id).style.backgroundImage = "linear-gradient(" + (this.state.currentDeg++).toString() + "deg, transparent 50%, rgb(94, 122, 131) 50%), linear-gradient(" + (this.state.beginning).toString() + "deg, transparent 50%, white 50%)";
            }
            
        }, 5);
	}

	animateBorderEnd(ev){
        document.getElementById(ev.target.id).style.backgroundImage = "None";
        clearInterval(this.state.interval);
        this.state.currentDeg = 90;
        this.state.beginning = 90;

        let e = {};
        e.target = {};
        e.target.id = this.props.content.id;
        this.props.content.onAnimationFinish(this.props.content.app, this.props.content.code, e);
	}

    render() {
		return(
            <>
                <div className="Border"
                id={this.props.content.id}
                style={{marginTop: this.props.content.marginTop, marginLeft: this.props.content.marginLeft}}
                onMouseEnter={ event => { 
                    event.target.id = this.props.content.id;
                    this.animateBorderStart(event)}
                }
                onMouseLeave={event => { 
                    event.target.id = this.props.content.id;
                    this.animateBorderEnd(event)}
                }>
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default Border;