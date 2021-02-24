import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>


          <div className="top-title container-fluid  d-lg-block">
            <div className ="row">
             <div className="left col-12" id='upper-text'>Welcome to MyFreshCart online Grocery Store</div>
              </div>
            </div>
     
    <section className='container-fluid' id='header'>
    <div className='row'>
    
      <div className='col-md-12 col-xs-12 top-header'>
        <div className='col-xs-2 col-sm-2 clearfix'>
        <Link to='/' className='a-link'>
          <img src='../Images/review.png' className='logo'  alt='logo'/>
          </Link>
        </div>

        <div className="between col-lg-6 col-ld-12">
                  <form action="" method="POST">
                    <input type="text" placeholder="Search our catalog"/>
                    <button><i className="fa fa-search" aria-hidden="true"></i></button>
                  </form>
                </div>
        <div className='col-xs-2 col-sm-2 clearfix'>
          <div className='cart-icon'>
          <Link to='/cart' className='a-link'><i className="fas fa-shopping-cart">Cart</i></Link>
          </div>
        </div>
        <div className='col-xs-2 col-sm-2 clearfix'>
          <div className='user-login'>
        <Link to='/login' className='a-link'>  <i className="fas fa-user">SignIn</i></Link>
          </div>
        </div>
      </div>
      </div>

    </section>
      
    </>
  )
}

export default Header
