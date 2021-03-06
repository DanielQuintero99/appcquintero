import React from 'react'


const NotFound = () => {
  return (
    <>
    <div className='marginTop'>
<div className="top">
  <h1 className='notFound'>404</h1>
  <h3 className='notFoundSS'>page not found</h3>
</div>
<div className="notFoundContainer">
  <div className="ghost-copy">
    <div className="one"></div>
    <div className="two"></div>
    <div className="three"></div>
    <div className="four"></div>
  </div>
  <div className="ghost">
    <div className="face">
      <div className="eye"></div>
      <div className="eye-right"></div>
      <div className="mouth"></div>
    </div>
  </div>
  <div className="shadow"></div>
</div>
<div className="bottom">
  <p className='notFoundP'>Boo, looks like a ghost stole this page!</p>
  <div className="buttons">
    <button className="btn">Back</button>
    <button className="btn">Home</button>
  </div>
</div>
</div>
</>
  )
}

export default NotFound