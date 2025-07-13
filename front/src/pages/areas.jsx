import React from 'react'
import AreaCard from '../components/AreaCard'
import SensorCard from '../components/SensorCard';
//import { Card, CardContent } from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
import {PlusIcon,PencilIcon} from "@heroicons/react/24/solid"

const Areas = () => {
  return (
    <div className=" bg-gray-900 min-h-screen flex flex-col items-center">

        <div className='bg-gray-900 py-10'></div>
{/*Saludo para eel usuario */}
          
      <div className="bg-green-300 w-full flex items-center justify-between p-4 rounded-b-3xl">
        <div className="flex items-center space-x-2">
          <div className="bg-white rounded-full p-2">
            <span className="text-2xl">👤</span>
          </div>
          <span className="font-semibold">¡Hola usuario de prueba!</span>
        </div>
        <button className="bg-gray-200 rounded-full p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

    {/*Carrusel de Áreas */}

      {/* Contenido principal */}
      <div className="w-full px-4 py-6 flex-1">
        {/* Áreas */}
        <h2 className="text-white text-lg font-semibold mb-2">Tus Áreas</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          <AreaCard name="Maíz Naltel" img="https://via.placeholder.com/80" />
          <AreaCard name="Sorgo" img="https://via.placeholder.com/80" />
          <AreaCard name="Maíz" img="https://via.placeholder.com/80" />
        </div>

        {/* Sensores */}
        <h2 className="text-white text-lg font-semibold mt-4 mb-2">Tus Sensores</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          <SensorCard name="Humedad" value="50%" alert="39%" img="https://via.placeholder.com/80" />
          <SensorCard name="Temperatura" value="30°C" img="https://via.placeholder.com/80" />
          <SensorCard name="pH" img="https://via.placeholder.com/80" />
        </div>
      </div>

            {/*Boton gestionar y mucho maaaasss */}
      {/* Barra inferior */}
      <div className="bg-white w-full flex justify-around items-center py-4 rounded-t-3xl">
        <button className="bg-black text-white px-6">Gestionar</button>
        <button className="bg-gray-200 rounded-full p-3">
          <PlusIcon />
        </button>
        <button className="bg-gray-200 rounded-full p-3">
          <PencilIcon />
        </button>
      </div>
    </div>


  )
}

export default Areas