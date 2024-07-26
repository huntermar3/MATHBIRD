import {Link} from 'react-router-dom' ;
import classroom from '../assets/classroom.jpeg'

function Grade(){
    return (
        <div className='min-h-screen bg-[#FA5F55] grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
             <Link to = '/'><button className=' bg-white w-[150px] rounded-lg font-medium my-6 mx-auto text-[#FA5F55] hover:bg-red-600 cursor-pointer py-5'>Go Back</button></Link>
            
            <h1 className='col-span-full flex justify-center text-4xl font-bold text-white py-10 m-auto'>Grades</h1>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg w-[100%]" src= {classroom}  alt="" />
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">5th Grade Topics</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Adding and Substracting Decimals <br></br> Adding and Subtracting Fractions <br></br> Volume of Shapes <br></br>Coordinate Plane/Graphing <br></br> </p>
       <Link to = '/AllTopics'><button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FA5F55] rounded-lg justify-center cursor-pointer"'>All Topics </button></Link>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg w-[100%]" src= {classroom}  alt="" />
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">6th Grade Topics</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Dividing by 2 digits<br></br> Rates and percentages <br></br> Order Of Operations <br></br>Negative Numbers <br></br> </p>
        <Link to = '/AllTopics'><button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FA5F55] rounded-lg justify-center cursor-pointer"'>All Topics </button></Link>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg w-[100%]" src= {classroom}  alt="" />
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">7th Grade Topics</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Proportions <br></br> One Step Equations <br></br> Adding and Substracting Negatives <br></br>Combining Like Terms <br></br> </p>
        <Link to = '/AllTopics'><button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FA5F55] rounded-lg justify-center cursor-pointer"'>All Topics </button></Link>
    </div>
</div>

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg w-[100%]" src= {classroom}  alt="" />
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center">Algebra 1</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Variables on Both Sides <br></br> Slope <br></br> X and Y intercepts <br></br>Different ways to Solve for an Equation <br></br> </p>
        <Link to = '/AllTopics'><button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#FA5F55] rounded-lg justify-center cursor-pointer"'>All Topics </button></Link>
    </div>
</div>



        </div>
    );
}
export default Grade;