import { LiaEarlybirds } from "react-icons/lia";
import {Link} from 'react-router-dom' ;

function Navbar() {
    return (
        <div className='text-white bg bg-[#FA5F55] text-4xl w-[100%] font-serif flex justify-evenly pb-5'>
            <h1 className='font-bold pt-4 flex justify-center'>MATHBIRD <LiaEarlybirds></LiaEarlybirds></h1>
           <Link to = "/AllTopics"><button className="px-5 text-2xl hover:bg-red-600">All Topics</button></Link>
            <Link to = "/about"><button className="px-5 text-2xl hover:bg-red-600">About</button></Link>
            <Link to = "/grade"><button className="px-5 text-2xl hover:bg-red-600">Grades</button></Link>
            <Link to = "/resources"><button className="px-5 text-2xl hover:bg-red-600">Resources</button></Link>

        </div>
    );
}

export default Navbar;