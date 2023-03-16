import React from 'react'
import Spline from '@splinetool/react-spline';
import Logo from '../Images/logo.png'



function Home() {
  return (
    <div className='w-full h-screen  relative'>
      <div className="bg-sec absolute top-0 left-0 w-full h-full -z-10">
        <Spline scene="https://prod.spline.design/f8yAAOi2R6vESOlY/scene.splinecode" />
      </div>
      <div className="navbar-mobile hidden absolute top-0 left-0 w-full h-full bg-[rgba(246,246,246)] z-20 flex justify-center items-center">
          <ul className=''>
            <li className='my-5 text-center font-Inter font-semibold text-[rgba(0,0,0)]'><a href="">Home</a></li>
            <li className='my-5 text-center font-Inter font-semibold text-[rgba(0,0,0,.4)]'><a href="">About</a></li>
            <li className='my-5 text-center font-Inter font-semibold text-[rgba(0,0,0,.4)]'><a href="">Services</a></li>
            <li className='my-5 text-center font-Inter font-semibold text-[rgba(0,0,0,.4)]'><a href="">Team</a></li>
            <li className='my-5 text-center font-Inter font-semibold text-[rgba(0,0,0,.4)]'><a href="">Contact</a></li>
          </ul>
      </div>
      <div className="navbar-sec-large-device w-full hidden lg:block lg:h-[10vh]  xl:h-[8vh] 2xl:h-[10vh] absolute top-6 left-0">            
        <div className="navabar w-[80%] mx-auto bg-[rgba(246,246,246)] h-full rounded-full flex justify-between items-center" style={{boxShadow:'0px 0px 20px 2px rgba(0,0,0,.1)'}}>
            <div className="logo-sec flex flex-col justify-center items-center w-1/12">
                <img className='lg:w-[27px] xl:w-[30px] 2xl:w-[50px]' src={Logo} alt="" />
                <h1 className='font-Inter font-bold lg:hidden 2xl:block 2xl:text-base'>Knight</h1>
            </div>
            <div className="navlinks w-11/12  flex justify-end items-center px-10">
                <ul className='h-full flex justify-center items-center'>
                    <li className='font-Inter font-semibold text-black mx-10 lg:text-sm 2xl:text-lg duration-300 hover:text-black'><a href="">Home</a></li>
                    <li className='font-Inter font-semibold text-[rgba(0,0,0,.4)] lg:mx-4 2xl:mx-10 lg:text-sm 2xl:text-lg duration-300 hover:text-black'><a href="">About</a></li>
                    <li className='font-Inter font-semibold text-[rgba(0,0,0,.4)] lg:mx-4 2xl:mx-10 lg:text-sm 2xl:text-lg duration-300 hover:text-black'><a href="">Services</a></li>
                    <li className='font-Inter font-semibold text-[rgba(0,0,0,.4)] lg:mx-4 2xl:mx-10 lg:text-sm 2xl:text-lg duration-300 hover:text-black'><a href="">Team</a></li>                    
                    <li className='font-Inter font-semibold text-[rgba(0,0,0,.4)] lg:mx-4 2xl:mx-10 lg:text-sm 2xl:text-lg duration-300 hover:text-black'><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="navbar-sec-mobile flex lg:hidden w-full h-[8vh]  absolute top-7 left-0 rounded-full justify-center items-center">
        <div className="navbar  h-full  w-[93%] rounded-full flex justify-between items-center">
            <div className="logo w-[8vh] h-[8vh] flex justify-center items-center bg-[rgba(246,246,246)] rounded-full" style={{boxShadow:'0px 0px 20px 2px rgba(0,0,0,.2)'}}>
                <img className='w-[30px] md:w-[40px]' src={Logo} alt="" />
            </div>
            <div className="logo w-[8vh] h-[8vh] flex justify-center items-center rounded-full">
                <button className='w-full h-full bg-[rgba(246,246,246)] rounded-full duration-300 hover:scale-105' style={{boxShadow:'0px 0px 20px 2px rgba(0,0,0,.2)'}}><i class="fa-solid fa-bars"></i></button>
            </div>
        </div>
      </div>
      <div className="home-content w-full h-full flex justify-center items-center ">        
        <div className="content ">
            <div className="heading flex flex-col justify-center items-center">
                <h1 className='font-Inter text-3xl md:text-5xl 2xl:text-6xl font-bold py-5 text-center' style={{background: "-webkit-linear-gradient(#8574f8, #dd7297)" , WebkitBackgroundClip:"text",WebkitTextFillColor: "transparent"}}>Welcome , to <br /> Knight Designs</h1>
                <h1 className='my-3 text-xl'><span className='mr-5'><i class="fa-solid fa-location-dot"></i></span><span className=''>Pakistan</span></h1>
                <h1 className='my-3 text-center text-[.67rem] md:text-base lg:text-[.7rem] 2xl:text-base'>" WE ARE TEAM OF TALENTED DESIGNERS <br /> MAKING WEBSITES WITH LIBRARIES "</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
