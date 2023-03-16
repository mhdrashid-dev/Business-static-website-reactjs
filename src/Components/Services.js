import React from 'react'
import serviceOne from '../Images/service-1.jpg'
import serviceTwo from '../Images/service-2.jpg'

function Services() {
  return (
    <div className='w-full min-h-[180vh] md:min-h-[155vh] lg:min-h-[145vh] xl:min-h-[135vh] 2xl:min-h-[125vh] bg-[rgba(246,246,246)] flex justify-center items-start'>
        <div className="about-content w-[90%] md:w-[80%] 2xl:w-[55%] h-full bg-[rgba(236,239,241)] rounded-xl p-5 2xl:p-10 duration-300 hover:scale-105 hover:bg-[rgba(246,246,246)] hover:shadow-mainShadow">
            <div className="heading 2xl:my-8">
                <h1 className='font-Inter text-center font-semibold md:text-lg 2xl:text-2xl 2xl:font-bold'>SERVICES</h1>
                <h1 className='text-[rgba(0,0,0,.3)] text-[.6rem] my-2 font-Inter text-center md:text-sm 2xl:text-base'>Magnam dolores commodi suscipit eius consequatur</h1>
            </div>
            <div className="inner-content w-full h-full  mt-2 pt-4 lg:flex lg:justify-center lg:items-center mb-16 lg:mb-20 xl:mb-28 md:mb-20">
                <div className="about-content lg:w-1/2">
                    <ul className='ml-3 md:ml-8' style={{listStyle:'dotted'}}>
                        <li className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</li>
                        <li className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</li>
                        <li className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</li>
                        <li className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</li>
                        <li className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum facilis, consectetur autem cum rem!</li>
                    </ul>                    
                </div>
                <div className="image-sec p-3 bg-[rgba(246,246,246)] rounded-xl shadow-xl w-full lg:w-1/2">
                    <img className='w-full  rounded-lg' src={serviceOne} alt="" />
                </div>
            </div>
            <div className="inner-content w-full h-full pt-4 lg:flex lg:justify-center lg:items-center mt-16 lg:mt-20 xl:mt-28 md:mt-20">
                <div className="about-content lg:w-1/2 order-2">
                <ul className='ml-3 md:ml-8' style={{listStyle:'dotted'}}>
                        <li className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</li>
                        <li className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</li>
                        <li className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</li>
                        <li className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</li>
                        <li className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eum facilis, consectetur autem cum rem!</li>
                    </ul>
                </div>
                <div className="image-sec p-3 bg-[rgba(246,246,246)] rounded-xl shadow-xl w-full lg:w-1/2 order-1">
                    <img className='w-full rounded-lg' src={serviceTwo} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
