import React from "react"
import kitchen from "./img/kitchenconcrete.jpg"
import atrium from "./img/atrium.jpg"
import diningroom from "./img/diningroom.jpg"
import bedroom from "./img/bedroom.jpg"
import livingroom from "./img/livingroom.jpg"
import livingroom2 from "./img/livingroom2.jpg"
function Showcase(){
    return(
        <section className="showcase" id="showcase">
			<h2 className="">
				Showcase.
			</h2>
			<hr/>
			<div className="galery">
				<img src={atrium}/>
				<img src={kitchen}/>
				<img src={diningroom}/>
				<img src={bedroom}/>
				<img src={livingroom}/>
				<img src={livingroom2}/>
			</div>
		</section>
    )
}
export default Showcase