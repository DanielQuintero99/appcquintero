import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'

export const SignUp = (
	{
		user, 
		name, 
		email, 
		phone, 
		adress, 
		setName, 
		setEmail, 
		setPhone, 
		setAdress,
		handleSubmit,
		handleLogIn,
		password,
		setPassword,
		finishWhenLogIn,
		cart
	}) => {
  return (
    <>{
		cart.length===0 && user ? <Navigate to="/"/>:
		user?
	<div className="section form">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<Form className="section pb-5 pt-5 pt-sm-2 text-center">
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											 <h4 >Shippin Data</h4>
											<div className="form-group">
												<input type="text" name="Address" className="form-style" placeholder="Your Address" id="adress" autocomplete="off" 
												value={adress} onChange={(e) => { setAdress(e.currentTarget.value) }}/>
												<i className="input-icon uil uil-user"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="text" name="phoneNumber" className="form-style" placeholder="Your Phone Number" id="phoneNumber" autocomplete="off"
												value={phone} onChange={(e) => { setPhone(e.currentTarget.value) }} />
												<i className="input-icon uil uil-at"></i>
											</div> 
											<Button onClick={finishWhenLogIn} >Submit</Button>
                            				<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</Form>
		      	</div>
	      	</div>
	    </div>
	</div>
:
<div className="section form">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<Form className="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Log In</h4>
											<div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"
												value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} />
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off"
												value={password} onChange={(e) => { setPassword(e.currentTarget.value) }}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<Button onClick={handleLogIn} >Submit</Button>
                            				<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div className="card-back">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Sign Up</h4>
											<div className="form-group">
												<input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autocomplete="off"
												value={name} onChange={(e) => {setName(e.currentTarget.value)}}/>
												<i className="input-icon uil uil-user"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"
												value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} />
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Set Your Password" id="logpass" autocomplete="off"
												value={password} onChange={(e) => { setPassword(e.currentTarget.value) }}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<Button onClick={handleSubmit} >Submit</Button>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</Form>
		      	</div>
	      	</div>
	    </div>
	</div>
	}
	
    </>
  )
}
