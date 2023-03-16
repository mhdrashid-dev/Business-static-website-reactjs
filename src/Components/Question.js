import React from 'react'
import AboutIMG from '../Images/about.jpg'


function Question() {
  return (
    <div className='w-full min-h-[105vh] md:min-h-[85vh] lg:min-h-[115vh] xl:min-h-[90vh] 2xl:min-h-[80vh] bg-[rgba(246,246,246)] flex justify-center items-start'>
        <div className="about-content w-[90%] md:w-[80%] 2xl:w-[55%] h-full bg-[rgba(236,239,241)] rounded-xl p-5 2xl:p-10 duration-300 hover:scale-110 hover:bg-[rgba(246,246,246)] hover:shadow-mainShadow">
            <div className="heading 2xl:my-8">
                <h1 className='font-Inter text-center font-semibold md:text-lg 2xl:text-2xl 2xl:font-bold'>ASKED QUESTIONS</h1>                
            </div>
            <div className="inner-content w-full h-full  pt-4 flex flex-col justify-center items-center mt-10">
                <div className="question-sec bg-[rgba(246,246,246)] p-2 rounded-md shadow-lg mb-4  md:mb-8 w-full">
                    <div className="question ">
                        <h1 className='text-sm font-bold text-[rgba(0,0,0,.5)] md:text-lg md:text-center 2xl:text-xl'>Non consectetur a erat nam at lectus urna duis?</h1>
                    </div>
                    <div className="answer hidden">
                        <h1 className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</h1>
                    </div>
                </div>
                <div className="question-sec bg-[rgba(246,246,246)] p-2 rounded-md shadow-lg mb-4  md:mb-8 w-full">
                    <div className="question ">
                        <h1 className='text-sm font-bold text-[rgba(0,0,0,.5)] md:text-lg md:text-center 2xl:text-xl'>Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</h1>
                    </div>
                    <div className="answer hidden">
                        <h1 className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</h1>
                    </div>
                </div>
                <div className="question-sec bg-[rgba(246,246,246)] p-2 rounded-md shadow-lg mb-4  md:mb-8 w-full">
                    <div className="question ">
                        <h1 className='text-sm font-bold text-[rgba(0,0,0,.5)] md:text-lg md:text-center 2xl:text-xl'>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?</h1>
                    </div>
                    <div className="answer hidden">
                        <h1 className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</h1>
                    </div>
                </div>
                <div className="question-sec bg-[rgba(246,246,246)] p-2 rounded-md shadow-lg mb-4  md:mb-8 w-full">
                    <div className="question ">
                        <h1 className='text-sm font-bold text-[rgba(0,0,0,.5)] md:text-lg md:text-center 2xl:text-xl'>Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?</h1>
                    </div>
                    <div className="answer hidden">
                        <h1 className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</h1>
                    </div>
                </div>
                <div className="question-sec bg-[rgba(246,246,246)] p-2 rounded-md shadow-lg mb-4  md:mb-8 w-full">
                    <div className="question ">
                        <h1 className='text-sm font-bold text-[rgba(0,0,0,.5)] md:text-lg md:text-center 2xl:text-xl'>Tempus quam pellentesque nec nam aliquam sem et tortor consequat?</h1>
                    </div>
                    <div className="answer hidden">
                        <h1 className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in</h1>
                    </div>
                </div>
                <div className="question-sec bg-[rgba(246,246,246)] p-2 rounded-md shadow-lg mb-4 md:mb-8 w-full">
                    <div className="question ">
                        <h1 className='text-sm font-bold text-[rgba(0,0,0,.5)] md:text-lg md:text-center 2xl:text-xl'>Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?</h1>
                    </div>
                    <div className="answer hidden">
                        <h1 className='text-[.78rem] text-[rgba(0,0,0,.3)] my-3 md:text-sm md:px-2 2xl:text-lg'>Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Question
