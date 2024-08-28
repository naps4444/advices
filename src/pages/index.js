import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [adviceData, setAdviceDate] = useState("name");

  const fetchData = async ()=>{
    try{
      const res = await axios.get("https://api.adviceslip.com/advice")
      console.log(res);
      if(res.status === 200) {
        setAdviceDate(res.data.slip)
      }

    }catch (error) {
      console.log(error);
    }
    
    
  }

  useEffect(()=>{
    fetchData()
  },[])

  console.log(adviceData);



  const [isSpinning, setIsSpinning] = useState(false);

  const spinClick = () => {
    setIsSpinning(!isSpinning);
  };







  

  const handleClick = () => {
    fetchData(); 
    spinClick(); 
   
  };


  return (
    <main
      className={`flex font-sans bg min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="w-11/12 mx-auto lg:w-5/12 py-14 my-auto rounded-lg flex flex-col justify-center items-center relative card gap-4 px-12 shadow-lg">
        <h1 className="text-[#52ffa8] text-[10px] font-semibold md:text-[14px] word-spacing text-center">ADVICE #{adviceData.id}</h1>

        <p className="text-white text-center mt-3 text-[28px] md:text-[36px] font-semibold      text ">"{`${adviceData.advice}`}"</p>

        <div className="mt-5">
        <Image src="/pattern-divider-desktop.svg" width={500} height={200} className="lg:block hidden pb-2" alt="" />
        </div>




        <div className="">
        <Image src="/pattern-divider-mobile.svg" width={600} height={200} className="lg:hidden block pb-5" alt="" />
        
        </div>

        <div onClick={handleClick} className="bg-[#52ffa8]  hover:shadow-[0px_4px_35px_#52ffa8] hover:saturate-100 w-[70px] h-[70px] p-5 flex justify-center items-center  rounded-full absolute -bottom-9  transition duration-300 ease-in-out">


        <Image
      src="/icon-dice.svg"
      alt="Spinning"
      width={200} height={200} 
      className={`spin ${isSpinning ? 'spin-active' : ''}`}
    />


        </div>


        
      </div>

      


    </main>
  );
}
