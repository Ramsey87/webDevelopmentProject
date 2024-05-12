import React from "react";


function Card(prop){
    return (
        <div>
             <h2>{prop.name}</h2>
    <img
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt={prop.alt}
    />
    <p>{prop.tel}</p>
    <p>{prop.email}</p>

        </div>
   

    )
    
}

export default Card;