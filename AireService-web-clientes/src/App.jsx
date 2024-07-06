import { useState } from 'react'
import logo from './assets/logo.png';
import whatsapp from './assets/whatsapp.png';
import phone from './assets/phone.png';
import menu from './assets/menu.png';
import persona from './assets/persona.png';


function App() {
  return (
    <div className='max-w-[520px] items-center m-auto'>

        <div className='bg-white w-full flex justify-center items-center'>
           <div><img src={logo} alt="Logo" className='m-auto pt-5' width="100" /></div>
        </div>

       <div className="w-full text-center pt-10 px-5">
        <p className='font-sans text-xl font-bold'>Solicita un Profesional de Confianza</p>
        <p className='font-sans text-base'>Rellena el formulario y obtén al instante una lista de expertos disponibles.</p>
       </div>

       <section className='px-5'>
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
            <label className='font-sans text-sm'>Escriba brevemente para qué requiere*</label>
            <textarea type='text' placeholder='' className='w-full p-3 rounded border-2 mt-2 focus:border-customAzul focus:outline-none'/>
          </div>

          <button type='submit' className='w-full p-3 rounded bg-customAzul text-white mt-5'>Buscar</button>  {/* Button styling can be customized according to your needs */}
           
          <div>
            <p className='text-center font-sans text-xs pt-3 text-gray-400 pb-10'>Tu información está segura con nosotros. Utilizamos tecnologías avanzadas para proteger tus datos y nunca los compartiremos sin tu consentimiento.</p>
          </div>
         
          <p className='text-center text-sm text-balance font-semibold pt-2 pb-5'>Resultados para Servicio técnico en aire acondicionado</p>  {/* Terms & Conditions link can be customized according to your needs */}
        </form>
      </section>

  <div className='max-w-[520px]'>
     <div className='w-full px-5 pb-10'>
        <table className="w-full">
          <thead>
            <tr className='border-t bg-slate-100'>
              <th className='font-sans text-base py-2'>Profesional</th>
              <th className='font-sans text-base'>Teléfono</th>
              <th className='font-sans text-base'>Whatsapp</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-t'>
              <td className='border-t font-sans font-semibold text-sm py-3 px-1'>
                  <div className='flex items-center gap-3'>
                      <div className='w-[36px]'><img src={persona} alt='' /></div>
                      <div className='font-sans text-xs'>Ariel Gentile</div>
                  </div>
                </td>
              <td className='border-t p-3'>
                 <button className='flex gap-1 p-2 bg-slate-400 rounded text-white font-sans text-base w-[100%] items-center justify-center' onClick={null}>
                  <div><img src={phone} alt="WhatsApp" width="14"/></div>
                  <div className='font-sans text-xs'>Llamar aqui</div>
                 </button>
              </td>
              <td className='border-t font-sans text-base'>
                 <button className='flex gap-1 p-2 bg-lime-700 rounded text-white font-sans text-base w-[100%] items-center justify-center' onClick={null}>
                  <div><img src={whatsapp} alt="WhatsApp" width="14"/></div>
                  <div className='font-sans text-xs'>Contactar</div>
                 </button>
              </td>
            </tr>
            <tr className='border-t p-3'>
            <td className='border-t font-sans font-semibold text-sm py-3 px-1'>
                  <div className='flex items-center gap-3'>
                      <div className='w-[36px]'><img src={persona} alt='' /></div>
                      <div className='font-sans text-xs'>Ariel Gentile</div>
                  </div>
                </td>
              <td className='border-t p-3'>
                 <button className='flex gap-1 p-2 bg-slate-400 rounded text-white font-sans text-base w-[100%] items-center justify-center' onClick={null}>
                  <div><img src={phone} alt="WhatsApp" width="14"/></div>
                  <div className='font-sans text-xs'>Llamar aqui</div>
                 </button>
              </td>
              <td className='border-t p-0 font-sans text-base'>
                  <button className='flex gap-1 p-2 bg-lime-700 rounded text-white font-sans text-base w-[100%] items-center justify-center' onClick={null}>
                   <div><img src={whatsapp} alt="WhatsApp" width="14" /></div>
                   <div className='font-sans text-xs'>Contactar</div>
                  </button>
              </td>
            </tr>
            <tr className='border-t'>
            <td className='border-t font-sans font-semibold text-sm py-3 px-1'>
                  <div className='flex items-center gap-3'>
                      <div className='w-[36px]'><img src={persona} alt='' /></div>
                      <div className='font-sans text-xs'>Ariel Gentile</div>
                  </div>
                </td>
              <td className='border-t p-3'>
                 <button className='flex gap-1 p-2 bg-slate-400 rounded text-white font-sans text-base w-[100%] items-center justify-center' onClick={null}>
                  <div><img src={phone} alt="WhatsApp" width="14"/></div>
                  <div className='font-sans text-xs'>Llamar aqui</div>
                 </button>
              </td>
              <td className='border-t p-0 font-sans text-base'>
                   <button className='flex gap-1 p-2 bg-lime-700 rounded text-white font-sans text-base w-[100%] items-center justify-center' onClick={null}>
                      <div><img src={whatsapp} alt="WhatsApp" width="14" /></div>
                      <div className='font-sans text-xs'>Contactar</div>
                   </button>
              </td>
            </tr>
          </tbody>
         </table>
     </div>
 </div>
      <p className='text-center font-sans text-xs pt-5 text-gray-400 pb-5'>Todos los derechos reservados Airecenter © 2024</p>
    </div>
  )
}

export default App
