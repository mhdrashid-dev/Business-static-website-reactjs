import React from 'react'
import AboutIMG from '../Images/about.jpg'
import Spline from '@splinetool/react-spline';

function About() {
  return (
    <div className='w-full min-h-[135vh] md:min-h-[100vh] lg:min-h-[115vh] xl:min-h-[80vh] bg-[rgba(246,246,246)] flex justify-center items-start'>        
        <div className="about-content w-[90%] md:w-[80%] 2xl:w-[55%] h-full bg-[rgba(236,239,241)] rounded-xl p-5 2xl:p-10 duration-300 hover:scale-110 hover:bg-[rgba(246,246,246)] hover:shadow-mainShadow">
            <div className="heading 2xl:my-8">
                <h1 className='font-Inter text-center font-semibold md:text-lg 2xl:text-2xl 2xl:font-bold'>ABOUT US</h1>
                <h1 className='text-[rgba(0,0,0,.3)] text-[.6rem] my-2 font-Inter text-center md:text-sm 2xl:text-base'>Magnam dolores commodi suscipit eius consequatur</h1>
            </div>
            <div className="inner-content w-full h-full  mt-2 pt-4 lg:flex lg:justify-center lg:items-center ">
                <div className="about-content lg:w-1/2">
                    <h1 className='text-sm font-bold text-[rgba(0,0,0,.5)] md:text-lg md:text-center 2xl:text-2xl'>Voluptatem dignissimos provident quasi corporis</h1>
                    <h1 className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h1>
                    <h1 className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis unde obcaecati eos quis ad beatae non. Dolore corrupti aspernatur quaerat quam soluta perferendis numquam, deserunt laudantium asperiores reiciendis rem alias laborum id aut nulla provident? Iste voluptate adipisci fuga atque est at dolorum, maxime reprehenderit non, ab vel dolorem aliquid?</h1>
                    <button className='bg-[rgba(246,246,246)] my-4 mx-0 px-2 py-2 text-sm lg:mx-2 lg:px-5 lg:py-3 rounded-md duration-300 hover:scale-105 shadow-mainShadow lg:text-lg font-semibold text-[rgba(0,0,0,.6)]'>Read More <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="image-sec p-3 bg-[rgba(246,246,246)] rounded-xl shadow-xl w-full lg:w-1/2">
                    <img className='w-full  rounded-lg' src={AboutIMG} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
