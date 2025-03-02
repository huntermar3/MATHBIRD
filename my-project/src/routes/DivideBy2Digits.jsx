import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { LiaEarlybirds } from "react-icons/lia";
function DivideBy2Digits(){
    return(
<div className='min-h-screen bg-[#FA5F55] text-white font-serif'>
        <Link to = '/AllTopics'><button className=' bg-white w-[150px] rounded-lg font-medium my-6 mx-auto text-[#FA5F55] hover:bg-red-600 cursor-pointer py-5'>Go Back</button></Link>
        <h1 className='font bold text-4xl flex justify-center uppercase py-10'>Dividing by two digits<LiaEarlybirds></LiaEarlybirds></h1>
        <div className='flex justify-center pb-7'>
            <ReactPlayer
            url = 'https://www.youtube.com/watch?v=HdU_rf7eMTI' 
            controls = {true}
            />
        </div>
    </div>
    ) ;
}

export default DivideBy2Digits;