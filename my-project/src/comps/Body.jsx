import { ReactTyped } from "react-typed";
function Body() {
    return(
        <div className='text-black'>
            <div className=' max-w-[800px] mt-[-130px] w-full h-screen mx-auto text-center flex flex-col justify-center text-2xl'>
            <h2 className='font-bold text-3xl py-4'>Do you need help with <span className='text-[#FA5F55]'>Math?</span></h2>
            <h2 className='font-bold text-4xl'>Learn any math from grades 5-8</h2>
            <ReactTyped className='text-2xl font-bold pl-2 text-[#FA5F55] py-4' strings = {[
                'I love Math!',
                'Math is awesome!',
                'I will become great at Math' ,
            ]} 
            typeSpeed={150}
            backSpeed={160}
            loop>
            </ReactTyped>
            </div>
        </div>
    );
}

export default Body;