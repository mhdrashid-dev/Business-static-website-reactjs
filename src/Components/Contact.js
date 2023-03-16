import React from 'react'
import AboutIMG from '../Images/about.jpg'

function Contact() {
  return (
    <div className='w-full min-h-[100vh] md:min-h-[70vh] lg:min-h-[115vh] xl:min-h-[80vh] bg-[rgba(246,246,246)] flex justify-center items-start'>
        <div className="about-content w-[90%] md:w-[80%] 2xl:w-[55%] h-full bg-[rgba(236,239,241)] rounded-xl p-5 2xl:p-10 duration-300 hover:scale-110 hover:bg-[rgba(246,246,246)] hover:shadow-mainShadow">
            <div className="heading 2xl:my-8">
                <h1 className='font-Inter text-center font-semibold md:text-lg 2xl:text-2xl 2xl:font-bold'>CONTACT</h1>
                <h1 className='text-[rgba(0,0,0,.3)] text-[.6rem] my-2 font-Inter text-center md:text-sm lg:text-[.7rem] 2xl:text-sm'>Magnam dolores commodi suscipit eius consequatur</h1>
            </div>
            <div className="inner-content w-full h-full  mt-2 pt-4 flex flex-col lg:flex-row justify-center items-center ">
                <div className="info hidden md:min-h-[10vh] lg:min-h-[71vh] xl:min-h-[53.3vh] 2xl:min-h-[50vh] bg-[rgba(246,246,246)] w-full lg:w-1/3 mb-5 lg:mb-0 lg:mr-5 rounded-md shadow-mainShadow lg:flex justify-center items-center">
                    <ul className='w-full h-full '>
                        <li className='w-full flex justify-center items-center my-12'>
                            <div className="icon w-1/3 text-center">
                                <i class="fa-solid fa-location-dot text-2xl"></i>
                            </div>
                            <div className="info w-2/3 font-Inter">
                                <h1 className='lg:text-base 2xl:text-lg font-bold text-[rgba(0,0,0,.7)]'>Location :</h1>
                                <h1 className='lg:text-[.7rem] 2xl:text-base text-[rgba(0,0,0,.4)]'>A108 Adam Street,</h1>
                                <h1 className='lg:text-[.7rem] 2xl:text-base text-[rgba(0,0,0,.4)]'>New York, NY 535022</h1>
                            </div>
                        </li>
                        <li className='w-full flex justify-center items-center my-12'>
                            <div className="icon w-1/3 text-center">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div className="info w-2/3 font-Inter">
                                <h1 className='lg:text-base  2xl:text-lg font-bold text-[rgba(0,0,0,.7)]'>Email :</h1>
                                <h1 className='lg:text-[.7rem] 2xl:text-base text-[rgba(0,0,0,.4)]'>info@example.com</h1>                               
                            </div>
                        </li>
                        <li className='w-full flex justify-center items-center my-12'>
                            <div className="icon w-1/3 text-center">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div className="info w-2/3 font-Inter">
                                <h1 className='lg:text-base 2xl:text-lg font-bold text-[rgba(0,0,0,.7)]'>Call :</h1>
                                <h1 className='lg:text-[.7rem] 2xl:text-base text-[rgba(0,0,0,.4)]'>+1 5589 55488 55s</h1>                                
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="user-req min-h-[50vh] md:min-h-[20vh] lg:min-h-[60vh] xl:min-h-[50vh] bg-[rgba(246,246,246)] w-full lg:w-2/3 rounded-md shadow-mainShadow mt-5 lg:mt-0" >
                    <form className='w-full p-2 flex flex-col justify-between items-center' action="">
                        <div className="name-and-email w-full">
                            <div className="name-sec w-full my-2 2xl:my-4 bg-[rgba(236,239,241)] rounded-md overflow-hidden px-2 py-1 2xl:px-3 2xl:py-2">
                                <input className='w-full text-[.7rem] bg-transparent 2xl:text-sm' type="text" placeholder='Your Name'/>
                            </div>
                            <div className="email-sec w-full my-2 2xl:my-4 bg-[rgba(236,239,241)] rounded-md overflow-hidden px-2 py-1 2xl:px-3 2xl:py-2">
                                <input className='w-full text-[.7rem] bg-transparent 2xl:text-sm' type="text" placeholder='Your Email' />
                            </div>
                        </div>
                        <div className="-subjct-sec w-full my-2 2xl:my-4 bg-[rgba(236,239,241)] rounded-md overflow-hidden px-2 py-1 2xl:px-3 2xl:py-2">
                            <input className='w-full text-[.7rem] bg-transparent 2xl:text-sm' type="text" placeholder='Subject' />
                        </div>
                        <textarea className='w-full text-[.7rem] 2xl:my-4 bg-[rgba(236,239,241)] 2xl:text-sm my-2 px-2  py-1 2xl:px-3 2xl:py-2' name="" placeholder='Enter your opinion' id="" cols="30" rows="15"></textarea>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
