import React from 'react';
import './Components.css'
function Container_main(){
    return (
        <div className='flex justify-center m-24'>
        <div className="p-5 rounded-[20px] h-fit w-fit container_main">
            <img className='w-[150px] m-2 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-125 focus:scale-125' src="src/assests/Profile_pic.jpg" alt="" />
            <p className='text-white text-[20px] font-bold'>Rahul Gupta</p>
            <p className='text-white text-[15px] font-bold mt-[-18px]'>Janakpur Dham, Nepal</p>
            <p className='text-yellow-500 text-[13px] font-bold mt-[-12px]'>*Full Stack Developer in Learning Stage</p>            
            <div className='flex flex-col gap-2'>
                <a className=' border-2 rounded-[9px] text-center pt-1 pb-1 w-[300px] text-white font-bold hover:text-yellow-500 focus:text-yellow-500 links' href="https://github.com/gupta7888888">GithHub</a>
                <a className='border-2 rounded-[9px] text-center pt-1 pb-1 w-[300px] text-white font-bold hover:text-yellow-500 focus:text-yellow-500 links' href="https://www.linkedin.com/in/rahul-kumar-gupta-949000219/">LinkedIn</a>
                <a className='border-2 rounded-[9px] text-center pt-1 pb-1 w-[300px] text-white font-bold hover:text-yellow-500 focus:text-yellow-500 links' href="https://x.com/Khadus_Rahul">Twitter</a>
                <a className='border-2 rounded-[9px] text-center pt-1 pb-1 w-[300px] text-white font-bold hover:text-yellow-500 focus:text-yellow-500 links' href="https://www.upwork.com/freelancers/~0159c6fbd4e4ad23c1?mp_source=share">Upwork</a>
                <a className='border-2 rounded-[9px] text-center pt-1 pb-1 w-[300px] text-white font-bold hover:text-yellow-500 focus:text-yellow-500 links' href="https://www.facebook.com/profile.php?id=100009717708532">Facebook</a>




            </div>
        </div>
        </div>
    )
}

export default Container_main;