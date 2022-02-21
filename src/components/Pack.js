import React from "react";


const Card = (props) => {
    return (
        <div class="card mb-3">
            <div class="row g-2">
                <div class="col-md-4">
                    <img src={props.imgsrc} class="img-fluid rounded-start" alt="map" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        {/* <h5 class="card-title">Card title</h5> */}
                        <ul class="card-text" text={props.text}>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>  
      
    )
}

export default Card;