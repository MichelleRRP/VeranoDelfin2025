
import landscape from '../assets/fotos/landscape.jpg';
import male_faceless_portrait from '../assets/fotos/male_faceless_portrait.jpg'
import femae_faceless_portrait from '../assets/fotos/female_faceless_portrait.jpg'
 
 const Home = () => {

    return(
    <div className="">
        
      {/* Hero Section */}
          <section 
            className="w-screen min-h-[120vh] bg-cover bg-center bg-no-repeat flex flex-col items-center text-center py-32 justify-start relative"
            style={{ backgroundImage: `url(${landscape})` }}>
            
            {/* Capa oscura con opacidad */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            
            <h2 className="font-Mulish font-extrabold text-9xl sm:text-6xl md:text-[82px] mt-30 text-barcolor relative z-10 text-shadow-lg">
              AgroSoft
            </h2>
            <p className="font-Mulish font-extralight text-3xl text-barcolor relative z-10 text-shadow-lg pt-2">
              Tus plantas al alcance de tu mano
            </p>



        </section>


        <div>

            <section class="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-16 bg-white">
            <div class="bg-green-200 p-6 rounded-lg shadow-md text-center">
              <h2 class="text-xl font-semibold mb-2">Humedad</h2>
              <p>Controla el nivel de humedad ideal para tus plantas.</p>
            </div>
            <div class="bg-green-200 p-6 rounded-lg shadow-md text-center">
              <h2 class="text-xl font-semibold mb-2">pH del suelo</h2>
              <p>Monitorea el pH para mantener un crecimiento óptimo.</p>
            </div>
            <div class="bg-green-200 p-6 rounded-lg shadow-md text-center">
              <h2 class="text-xl font-semibold mb-2">Viento</h2>
              <p>Detecta la fuerza del viento para proteger tus plantas.</p>
            </div>
          </section>

            <section class="px-6 py-16 bg-green-100 text-center">
    <h2 class="text-3xl font-bold mb-6">Nuestro equipo</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div class="bg-white p-4 rounded-lg shadow-md">
       
        <h3 class="font-semibold">Eric Martinez</h3>
        <p class="text-sm text-gray-600">Rol o área</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-md">
        
        <h3 class="font-semibold">Abisai Ruiz</h3>
        <p class="text-sm text-gray-600">Rol o área</p>
      </div>
      <div class="bg-white p-4 rounded-lg shadow-md">
       
        <h3 class="font-semibold">Paulina Romo</h3>
        <p class="text-sm text-gray-600">Rol o área</p>
      </div>
    </div>
  </section>
        </div>
          
        
    </div>
    )
}
export default Home