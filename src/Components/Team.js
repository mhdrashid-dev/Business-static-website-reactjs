import React from 'react'
import TeamOne from '../Images/team-1.jpg'
import TeamTwo from '../Images/team-2.jpg'
import TeamThree from '../Images/team-3.jpg'


function Team() {
  return (
    <div className='w-full min-h-[265vh] md:min-h-[225vh] lg:min-h-[115vh] xl:min-h-[95vh] bg-[rgba(246,246,246)] flex justify-center items-start'>
        <div className="about-content w-[90%] md:w-[60%] lg:w-[80%] 2xl:w-[55%] h-full bg-[rgba(236,239,241)] rounded-xl p-5 2xl:p-10 duration-300 hover:scale-110 hover:bg-[rgba(246,246,246)] hover:shadow-mainShadow">
            <div className="heading 2xl:my-8">
                <h1 className='font-Inter text-center font-semibold md:text-lg 2xl:text-2xl 2xl:font-bold'>TEAM</h1>
                <h1 className='text-[rgba(0,0,0,.3)] text-[.6rem] my-2 font-Inter text-center md:text-sm 2xl:text-base'>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga eum quidem</h1>
            </div>
            <div className="inner-content w-full h-full pt-4 grid lg:grid-cols-3 lg:gap-10 md:mt-16 lg:mt-16 2xl:mt-20">
                <div className="team-1 bg-[rgba(246,246,246)] w-full min-h-[46vh] rounded-lg shadow-lg mb-28 lg:mb-0">
                    <div className="img-sec p-3 rounded-md">
                        <img className='rounded-md' src={TeamOne} alt="" />
                    </div>
                    <div className="about-team p-3">
                        <h1 className='font-Inter text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg text-[rgba(0,0,0,.7)] font-bold'>Walter White</h1>
                        <h1 className='font-Inter text-[.74rem] md:text-base lg:text-[.74rem] xl:text-[.78rem] 2xl:text-sm text-[rgba(0,0,0,.5)]'>CHIEF EXECUTIVE OFFICER</h1>
                        <p className='font-Inter text-[.7rem] md:text-[.86rem] lg:text-[.73rem] xl:text-[.7rem] 2xl:text-[.78rem] text-[rgba(0,0,0,.7)] mt-4'>Animi est delectus alias quam repellendus nihil nobis dolor. Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis</p>
                    </div>
                </div>
                <div className="team-1 bg-[rgba(246,246,246)] w-full min-h-[46vh] rounded-lg shadow-lg mb-28 lg:mb-0">
                    <div className="img-sec p-3 rounded-md">
                        <img className='rounded-md' src={TeamTwo} alt="" />
                    </div>
                    <div className="about-team p-3">
                        <h1 className='font-Inter text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg text-[rgba(0,0,0,.7)] font-bold'>Sarah Jhonson</h1>
                        <h1 className='font-Inter text-[.74rem] md:text-base lg:text-[.74rem] xl:text-[.78rem] 2xl:text-sm text-[rgba(0,0,0,.5)]'>PRODUCT MANAGER</h1>
                        <p className='font-Inter text-[.7rem] md:text-[.86rem] lg:text-[.73rem] xl:text-[.7rem] 2xl:text-[.78rem] text-[rgba(0,0,0,.7)] mt-4'>Aspernatur iste esse aliquam enim et corporis. Molestiae voluptatem aut eligendi quis aut. Libero vel amet voluptatem eos rerum non doloremque</p>
                    </div>
                </div>
                <div className="team-1 bg-[rgba(246,246,246)] w-full  min-h-[46vh] rounded-lg shadow-lg ">
                    <div className="img-sec p-3 rounded-md">
                        <img className='rounded-md' src={TeamThree} alt="" />
                    </div>
                    <div className="about-team p-3">
                        <h1 className='font-Inter text-sm md:text-base lg:text-sm xl:text-base 2xl:text-lg text-[rgba(0,0,0,.7)] font-bold'>William Anderson</h1>
                        <h1 className='font-Inter text-[.74rem] md:text-base lg:text-[.74rem] xl:text-[.78rem] 2xl:text-sm text-[rgba(0,0,0,.5)]'>CTO</h1>
                        <p className='font-Inter text-[.7rem]  md:text-[.86rem] lg:text-[.73rem] xl:text-[.7rem] 2xl:text-[.78rem] text-[rgba(0,0,0,.7)] mt-4'>Ut enim possimus nihil cupiditate beatae. Veniam facere quae non qui necessitatibus rerum eos vero. Maxime sit sunt quo dolor autem est qui quaerat</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team
