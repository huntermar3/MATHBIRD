import {Link} from 'react-router-dom'
function Footer() {
    return(
        <div className='bg-[#FA5F55] w-[100%] text-white m-auto'>
            <h1 className='font-bold flex justify-center text-3xl p-10'>WHAT ARE YOU WAITING FOR LETS LEARN!!!!</h1>
            <Link to = '/AllTopics'><button className='flex justify-center bg-white w-[200px] rounded-md font-medium my-6 mx-auto text-[#FA5F55] hover:bg-red-600 cursor-pointer py-5'>Lets Start!</button></Link>
            <div className='py-5'></div>
        </div>
    );
}
export default Footer;