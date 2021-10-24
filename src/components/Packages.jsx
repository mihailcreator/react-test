import React from "react"
function Packages(){
    return(
        <section className="packages" id="packages">
			<h2>
				Packages
			</h2>
			<hr/>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<div className="prices">
				<div className="price">
					<ol>
						<li className="price_name">
							Basic
						</li>
						<li>
							Floorplanning
						</li>
						<li>
							10 hours support
						</li>
						<li>
							Photography
						</li>
						<li>
							20% furniture discont
						</li>
						<li>
							Good deals
						</li>
						<li>
							<p className="money">
								50 рублей
							</p>
							<p className="period">
								в день
							</p>
						</li>
						<li>
							<button className="button1">
								Sign Up
							</button>
						</li>
					</ol>
				</div>
				<div className="price pro" >
					<ol>
						<li className="price_name">
							Pro
						</li>
						<li>
							Floorplanning
						</li>
						<li>
							50 hours support
						</li>
						<li>
							Photography
						</li>
						<li>
							50% furniture discont
						</li>
						<li>
							GREAT deals
						</li>
						<li>
							<p className="money">
								50 рублей
							</p>
							<p className="period">
								в день
							</p>
						</li>
						<li>
							<button className="button2">
								Sign Up
							</button>
						</li>
				
					</ol>
				</div>
			</div>
		</section>
    )
}
export default Packages