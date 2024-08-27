import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import SpinningImage from "@/Component/Spin";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [adviceData, setAdviceDate] = useState("name");

  //get data from an api endpoint
  //variables re used to store input
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
  


  return (
    <main
      className={`flex font-sans bg min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="w-11/12 mx-auto lg:w-5/12 py-14 my-auto rounded-lg flex flex-col justify-center items-center relative card gap-4 px-12 shadow-lg">
        <h1 className="text-[#52ffa8] word-spacing text-center">ADVICE #{adviceData.id}</h1>

        <p className="text-white text-center mt-3 text-[28px] font-semibold      text ">"{`${adviceData.advice}`}"</p>

        <div className="mt-5">
        <Image src="/pattern-divider-desktop.svg" width={500} height={200} className="lg:block hidden pb-2" alt="" />
        </div>




        <div className="">
        <Image src="/pattern-divider-mobile.svg" width={600} height={200} className="lg:hidden block pb-5" alt="" />
        
        </div>

        <div onClick={fetchData} className="bg-[#52ffa8]  hover:shadow-[0px_4px_35px_#52ffa8] hover:saturate-100 w-[70px] h-[70px] p-5 flex justify-center items-center rounded-full absolute -bottom-6  transition duration-300 ease-in-out">
          <SpinningImage/>


          {/* <Image src="/icon-dice.svg" width={200} height={200} alt="" /> */}
        </div>


        
      </div>

      


    </main>
  );
}
