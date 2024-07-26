import { LiaEarlybirds } from "react-icons/lia";
import {Link} from 'react-router-dom' ;
function Resources() {
    return (
        <div className='bg-[#FA5F55] min-h-screen text-white font-serif'>
        <Link to = '/'><button className=' bg-white w-[150px] rounded-lg font-medium my-6 mx-auto text-[#FA5F55] hover:bg-red-600 cursor-pointer py-5'>Go Back</button></Link>
       <h1 className='flex justify-center text-4xl text-white m-auto py-10 font-bold'>RESOURCES <LiaEarlybirds></LiaEarlybirds></h1>
       <p className='px-5 indent-8 flex justify-center'>MATHBIRD would not be created without the help of multiple sources.
       </p>
       <br></br>

       <p className='px-5 indent-8 flex justify-center'>Although I believe no one will ever use this website, if you need any additional help, try just searching the topic into YouTube. 
       Even a simple Google search will do the job. Khan Academy is a popular choice. ChatGPT is also a good way to get quick information. I used ChatGBT for some help on this website
       </p>
       <br></br>

       <p className='px-5 indent-8 flex justify-center'>If you are seeing this message, thank you. This is my first "large" scale project.
       I hope you gain some knowledge and believing in this site. I will never ever forget MATHBIRD. Hunter Martin 6-4-24</p>

       <div className='flex justify-center py-10'>
        <a href='https://www.youtube.com' className='text-white underline mx-2'>YouTube</a>
        <a href='https://www.khanacademy.org' className='text-white underline mx-2'>Khan Academy</a>
        <a href='https://www.chatgpt.com' className='text-white underline mx-2'>ChatGPT</a>
    </div>

   </div>
   
    );
}

export default Resources;