import React from 'react'
import Photo from '../Pictures/logo.png';
import Photo1 from '../Pictures/Footer.jpg';
import food1 from '../Pictures/food1.png'
import team from '../Pictures/team.png'
import './Who.css'
function Who() {
  return (
    <div>
        <h1 className='heading'>Who we <span>Are ?</span></h1>

        <div className='Container'>
            <img src={Photo} alt='loading' ></img>

            <div className='secondBlock'>
            <h3 className='subHeading'>Gruby</h3>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <div className='listItems'>
            <ol>
              <li>1.First Item</li>
              <li>2.Second Item</li>
            </ol>
            <ol>
              <li>3.Third Item</li>
              <li>4.Fourth Item</li>
            </ol>
            </div>

            </div>


        </div>


        <div className='bottom'>
          <li className='top'>500+
          <li className='sub'>Customers</li>
          </li>

          <li className='top'>10k+
          <li className='sub'>Order Served</li></li>

          <li className='top'>10k+
          <li className='sub'>Order Served</li></li>
 
          <li className='top'>10k+
          <li className='sub'>Order Served</li></li>
        </div>
        <img src={Photo1} width="1650px" className='photos' alt="error loading" />

        <img src={food1} alt="error loading" />
        <img src={team} alt="error loading" />
    </div>

  )
}

export default Who