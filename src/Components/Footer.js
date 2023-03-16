import React from 'react'

function Footer() {
  return (
    <div className='w-full h-[20vh] bg-[rgba(246,246,246)] flex justify-center items-center '>
        <div className="content w-full md:w-[90%] lg:w-[70%] h-full bg-[rgba(236,239,241)] rounded-2xl flex justify-center items-center shadow-mainShadow">
            <div className="info">
                <div className="logo  flex justify-center items-center my-5">
                    <i class="fa-brands fa-twitter text-xl lg:text-3xl mx-5 duration-300 hover:scale-125"></i>
                    <i class="fa-brands fa-facebook text-xl lg:text-3xl mx-5 duration-300 hover:scale-125"></i>
                    <i class="fa-brands fa-linkedin text-xl lg:text-3xl mx-5 duration-300 hover:scale-125"></i>
                </div>
                <h1 className='font-Inter text-[rgba(0,0,0,.5)] text-[.7rem] text-center lg:text-sm 2xl:text-base'>Copyright © 2021 Olivier Ifrah. All rights reserved.</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer
