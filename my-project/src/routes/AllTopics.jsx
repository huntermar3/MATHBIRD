import { Link } from 'react-router-dom';

function AllTopics() {
    return (
        <div className='min-h-screen bg-[#FA5F55] flex flex-col items-center p-6 font-serif'>
            <div className='w-full flex justify-start'>
                <Link to='/'><button className='bg-white w-[150px] rounded-lg font-medium my-6 text-[#FA5F55] hover:bg-red-600 cursor-pointer py-5'>Go Back</button></Link>
            </div>
            <h1 className='text-4xl font-bold text-white py-10'>ALL TOPICS</h1>
            <p className='italic font-bold'>click any topic</p>
            <ul className='text-2xl text-white'>
                <li className='py-2'>A:
                    <ul className='px-10 text-xl '>
                        <Link to = "/ASDecimals"><li className='hover:bg-red-500 hover:text-black cursor-pointer'>Adding and Subtracting Decimals (5th Grade)</li></Link>
                        <Link to = "/ASFractions"><li className='hover:bg-red-500 hover:text-black cursor-pointer'>Adding and Subtracting Fractions (5th Grade)</li></Link>
                        <Link to = "/ASNegatives"><li className='hover:bg-red-500  hover:text-black cursor-pointer'>Adding and Substracting Negatives (7th Grade)</li></Link>
                    </ul>
                </li>
                
                <li className='py-2'>C:
                    <ul className='px-10 text-xl'>
                    <Link to = "/CombiningLikeTerms"><li className='hover:bg-red-500 hover:text-black cursor-pointer'>Combining Like Terms (7th Grade)</li></Link>
                    <Link to = "/Graphing"><li className='hover:bg-red-500 hover:text-black cursor-pointer'>Coordinate Plane/Graphing (5th Grade)</li></Link>
                    </ul>
                </li>
                
                <li className='py-2'>D:
                    <ul className='px-10 text-xl'>
                    <Link to = "/SolveEquations"><li className='hover:bg-red-500 hover:text-black cursor-pointer'>Different Ways to Solve for an Equation (Algebra 1)</li></Link>
                    <Link to = "/DivideBy2Digits"><li className='hover:bg-red-500 hover:text-black cursor-pointer'>Dividing by 2 digits (6th Grade)</li></Link>
                    </ul>
                </li>
                
                <li className='py-2'>N:
                    <ul className='px-10 text-xl'>
                    <Link to = "/NegativeNums"><li className='hover:bg-red-500 hover:text-black cursor-pointer'>Negative Numbers (6th Grade)</li></Link>
                    </ul>
                </li>
                
                <li className='py-2'>O:
                    <ul className='px-10 text-xl'>
                    <Link to = "/OneStep"><li className='hover:bg-red-500 hover:text-black cursor-pointer'>One Step Equations (7th Grade)</li></Link>
                    <Link to = "/PEMDAS"> <li className='hover:bg-red-500 hover:text-black cursor-pointer'>Order of Operations (6th Grade)</li></Link>
                    </ul>
                </li>
                
                <li className='py-2'>P:
                    <ul className='px-10 text-xl'>
                    <Link to = "/Proportions"><li className='hover:bg-red-500 hover:text-black cursor-pointer'>Proportions (7th Grade)</li></Link>
                    </ul>
                </li>
                
                <li className='py-2'>R:
                    <ul className='px-10 text-xl'>
                    <Link to = "/Rates"><li className='hover:bg-red-500 hover:text-black cursor-pointer'>Rates and Percentages (6th Grade)</li></Link>
                    </ul>
                </li>
                
                <li className='py-2'>S:
                    <ul className='px-10 text-xl'>
                    <Link to = "/Slope"><li className='hover:bg-red-500 hover:text-black cursor-pointer'>Slope (Algebra 1)</li></Link>
                    </ul>
                </li>
                
                <li className='py-2'>V:
                    <ul className='px-10 text-xl'>
                    <Link to = "/VarOnBothSides"><li className='hover:bg-red-500 hover:text-black cursor-pointer'>Variables on Both Sides (Algebra 1)</li></Link>
                    <Link to = "/Volume"><li className='hover:bg-red-500 hover:text-black cursor-pointer'>Volume of Shapes (5th Grade)</li></Link>
                    </ul>
                </li>
                
                <li className='py-2'>X and Y:
                    <ul className='px-10 text-xl'>
                    <Link to = "/XY"><li className='hover:bg-red-500 hover:text-black cursor-pointer'>X and Y Intercepts (Algebra 1)</li></Link>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default AllTopics;

