import { LiaEarlybirds } from "react-icons/lia";
function Quote(){
    return(
        <div className='bg-white text-black w-[100%] font-serif'>
            <div className='flex align-center justify-center text-7xl'><LiaEarlybirds></LiaEarlybirds></div>
            <h1 className='flex justify-center text-xl pt-10'>"MATHBIRD allowed me learn beyond the classroom at my own pace"</h1>
            <p className='flex justify-center text-xl py-5 font-mono pb-10'><span className='italic px-1 font-mono'>JOHN PORK</span> / 4TH GRADER / MICHIGAN</p>
        </div>
    );
}

export default Quote;