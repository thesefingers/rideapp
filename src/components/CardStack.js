import React, {Component} from 'react'
import Card from "./Pack";
import imga from './assets/img1.jpg';
import imgb from './assets/img2.jpg';
import imgc from './assets/img3.jpg';
import imgd from './assets/img4.jpg';





class CardStack extends Component {
constructor(props) {
    super(props);
    this.state = {};
}
render() {
    return (
        <div className="container-fluid">
            <div className="row g-2">
                <div className="col-md-14">
                    <Card imgsrc={imga}/>
                </div>
                <div className="col-md-14">
                    <Card imgsrc={imgb}/>
                </div>
                <div className="col-md-14">
                    <Card imgsrc={imgc}/>
                </div>
                <div className="col-md-14">
                    <Card imgsrc={imgd}/>
                </div>
            </div>
        </div>
    )
}


}


export default CardStack;