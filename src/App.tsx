import React from 'react';
import { Button, Typography } from './stories';
import Logo from "./assets/images/logo.png"
import Test from "./assets/images/test.jpg"
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center bg-secondary md:p sm:p-4 2xl:p-20 border overflow-y-auto  h-screen font-sans-1">
      <div className="flex-col flex md:flex-row shadow-lg overflow-hidden grow">
        <div className=" relative grow focus-within:border-blue-1 flex flex-col items-start  bg-white px-6 md:px-12 lg:pt-20">
          <div className="flex justify-end pt-2">
            <img src={Logo} className=" md:h-40" alt="" />
          </div>
          <div className="flex flex-col gap-2 py-4">
            <Typography  variant='xl'> Huge Welcome!</Typography>
            <Button
              onClick={() => navigate("/login")}
              className="sm:text-white lg:text-white px-10 py-4 text-lg text-semibold"
            >
              Get Started
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 bg-white">
          <img
            src={Test}
            alt=""
            className="object-fill max-h-[1000px] "
          />
        </div>
      </div>
    </div>
  );
}

export default App;
