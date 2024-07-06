import { useState } from 'react'
import logo from './assets/logo.png';
import whatsapp from './assets/whatsapp.png';
import phone from './assets/phone.png';

function App() {
  return (
    <div className='max-w-[520px] items-center m-auto'>
       <section className='p-5'>
        <img src={logo} alt="Logo" className='m-auto pb-10 pt-10'/> 
        <form>
          <div className='w-full pt-5'>
            <label className='font-sans text-sm'>Nombre*</label>
            <input type='text' placeholder='Escribe tu nombre' className='w-full p-3 rounded border-2 mt-2 focus:border-customAzul focus:outline-none'/>
          </div>
          <div className='w-full pt-5'>
            <label className='font-sans text-sm'>Correo electrónico*</label>
            <input type='text' placeholder='Escribe tu correo electrónico' className='w-full p-3 rounded border-2 mt-2 focus:border-customAzul focus:outline-none'/>
          </div>

          <div className='w-full pt-5'>
              <label className='font-sans text-sm'>Teléfono*</label>
              <div className='flex'>
                  <select className='w-2/2 p-3 rounded border-2 mt-2 focus:border-customAzul focus:outline-none'>
                      <option value='' disabled selected>Selecciona</option>
                      <option value='+54'>AR (+54)</option>
                      <option value='+56'>Cl (+56)</option>
                      <option value='+591'>BO (+591)</option>
                  </select>
                  <input type='text' placeholder='Escribe tu teléfono' className='w-full p-3 rounded border-2 mt-2 ml-2 focus:border-customAzul focus:outline-none'/>
              </div>
           </div>

          <div className='w-full pt-5'>
            <label className='font-sans text-sm'>Tipo de solicitud*</label>
            <select type='select' placeholder='Escribe tu nombre' className='w-full p-3 rounded border-2 mt-2 focus:border-customAzul focus:outline-none'>
                <option value='' disabled selected>Selecciona una opción</option>
                <option value='solicitud1'>Solicitud 1</option>
                <option value='solicitud2'>Solicitud 2</option>
                <option value='solicitud3'>Solicitud 3</option>
            </select>
          </div>

          <div className='w-full pt-5'>
            <label className='font-sans text-sm'>Correo electrónico*</label>
            <textarea type='text' placeholder='Escribe tu correo electrónico' className='w-full p-3 rounded border-2 mt-2 focus:border-customAzul focus:outline-none'/>
          </div>

          <button type='submit' className='w-full p-3 rounded bg-customAzul text-white mt-5'>Buscar</button>  {/* Button styling can be customized according to your needs */}
          <p className='text-center text-sm text-balance font-semibold pt-5'>Resultados para Servicio técnico en aire acondicionado</p>  {/* Terms & Conditions link can be customized according to your needs */}
        </form>
      </section>

  <div className='max-w-[520px]'>
     <div className='w-full px-5 pb-10'>
        <table className="w-full">
          <thead>
            <tr className='border-t p-1'>
              <th className='border-t p-1 font-sans text-base'>Nombre</th>
              <th className='border-t p-1 font-sans text-base'>Teléfono</th>
              <th className='border-t p-1 font-sans text-base'>Whatsapp</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-t p-1'>
              <td className='border-t font-sans font-semibold text-sm'>Ariel Gentile</td>
              <td className='border-t p-1'>
                 <button className='flex gap-2 p-2 bg-sky-600 rounded text-white font-sans text-base w-[100%] items-center justify-center' onClick={null}>
                  <div><img src={phone} alt="WhatsApp" width="20"/></div>
                  <div className='font-sans text-sm'>Llamar aqui</div>
                 </button>
              </td>
              <td className='border-t p-1 font-sans text-base'>
                 <button className='flex gap-2 p-2 bg-lime-700 rounded text-white font-sans text-base w-[100%] items-center justify-center' onClick={null}>
                  <div><img src={whatsapp} alt="WhatsApp" width="20"/></div>
                  <div className='font-sans text-sm'>Contactar</div>
                 </button>
              </td>
            </tr>
            <tr className='border-t p-1'>
              <td className='border-t font-sans font-semibold text-sm'>Pedro Molina</td>
              <td className='border-t p-1 font-sans text-base'>
                   <button className='flex gap-2 p-2 bg-sky-600 rounded text-white font-sans text-base w-[100%] items-center justify-center' onClick={null}>
                   <div><img src={phone} alt="WhatsApp" width="20"/></div>
                   <div className='font-sans text-sm'>Llamar aqui</div>
                   </button>
              </td>
              <td className='border-t p-1 font-sans text-base'>
                  <button className='flex gap-2 p-2 bg-lime-700 rounded text-white font-sans text-base w-[100%] items-center justify-center' onClick={null}>
                  <div><img src={whatsapp} alt="WhatsApp" width="20"/></div>
                  <div className='font-sans text-sm'>Contactar</div>
                  </button>
              </td>
            </tr>
            <tr className='border-t'>
              <td className='border-t font-semibold text-sm'>Juan Medaño</td>
              <td className='border-t font-sans text-base'>
                  <button className='flex gap-2 p-2 bg-sky-600 rounded text-white font-sans text-base w-[100%] items-center justify-center' onClick={null}>
                  <div><img src={phone} alt="WhatsApp" width="20" /></div>
                  <div className='font-sans text-sm'>Llamar aqui</div>
                  </button>
              </td>
              <td className='border-t p-1 font-sans text-base'>
                   <button className='flex gap-2 p-2 bg-lime-700 rounded text-white font-sans text-base w-[100%] items-center justify-center' onClick={null}>
                   <div><img src={whatsapp} alt="WhatsApp" width="20" /></div>
                   <div className='font-sans text-sm'>Contactar</div>
                   </button>
              </td>
            </tr>
          </tbody>
         </table>
     </div>
 </div>
    
    </div>
  )
}

export default App
