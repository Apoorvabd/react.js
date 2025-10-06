import image1 from './assets/image1.avif'
import { FaTrashAlt } from "react-icons/fa";

function Card2(){
    return (
        <>
        <div className="flex h-[90px] ml-12 w-[80%]  rounded-md shadow-xl  ">
            <div className="bg- w-[70%] h-[75px] mt-2 flex p-3  gap-2 overflow-hidden">
                <img src={image1} alt="  lyg" className='w-[110px] h-[75px] object-cover rounded-xl mt-0'/>
                <div className=' w-[130px] h-[70px]'>
                    <div>
                        <p>Pancake</p>
                    </div>
                    <div className=' ml-4  w-[79%] border-2 border-green-400 shadow-xl h-[35px] flex justify-center rounded-md'>
                        <button className='w-8 h-[30px] rounded-s-md bg-slate-50 text-3xl items-center flex justify-center'> - </button>
                        <span className='w-10 h-[30px] bg-green-100   text-[16px] flex justify-center items-center'> 1 </span>
                        <button className='w-8 h-[30px] bg-slate-50 rounded-e-md text-2xl flex justify-center items-center' >+</button>
                    </div>
                </div>
            </div>
            <div className=" md:w-[30%] mt-4 h-16  ">
                <p className='flex justify-self-end mr-2 text-green-800 text-lg'>price: 499/-</p>
                <p className=' flex justify-self-end mr-2 text-red-800 text-lg mt-2'><FaTrashAlt /></p>


            </div>
        </div>
        </>
    )

}
export default Card2