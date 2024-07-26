import { LiaEarlybirds } from "react-icons/lia";
import {Link} from 'react-router-dom' ;

function About(){
    return(
        <div className='bg-[#FA5F55] min-h-screen text-white font-serif'>
             <Link to = '/'><button className=' bg-white w-[150px] rounded-lg font-medium my-6 mx-auto text-[#FA5F55] hover:bg-red-600 cursor-pointer py-5'>Go Back</button></Link>
            <h1 className='flex justify-center text-4xl text-white m-auto py-10 font-bold'>ABOUT MATHBIRD<LiaEarlybirds></LiaEarlybirds></h1>
            <p className='px-5 indent-8'>MATHBIRD was created by Hunter Martin. I created this website while I was a junior at Eastern Michigan University. I currently study Computer Science but I always had an interest in teaching.
                My favorite subject in school was always Math and I want to help kids understand Math in a more understanding and fun way.
            </p>
            <br></br>

            <p className='px-5 indent-8'>The idea of MATHBIRD came to me when I realised when I was younger I didn't have anyone to talk to when I couldnt understand something after school.
                My parents couldn't help and other resources online where just too confusing to even start.
            </p>
            <br></br>

            <p className='px-5 indent-8'>The red theme you see around the website is the color that I associate with Math.</p>
        </div>
    );
}

export default About;