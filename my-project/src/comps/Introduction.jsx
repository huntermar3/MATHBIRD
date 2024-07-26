import ReactPlayer from 'react-player'
import { LiaEarlybirds } from "react-icons/lia";

function Introduction(){
    return (
    <div className='bg-[#FA5F55] w-[100%] m-auto'> 
        <h1 className='text-white font-bold text-3xl py-3 flex justify-center'> Welcome to MATHBIRD!<LiaEarlybirds/> </h1>
        <p className='font-bold pl-5 flex justify-center pb-3 italic text-black'>We can help you with Math of various subjects.</p>
        <div className='flex justify-center pb-7'>
        <ReactPlayer 
        url='https://www.youtube.com/shorts/OfHdmEm7xwI' 
        controls = {true} />
        </div>
    </div>
    );
}

export default Introduction;