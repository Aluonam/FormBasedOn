import React from 'react'
import style from './GeneralData.module.css'
import { useForm } from 'react-hook-form';

const GeneralData = () => {

  const { register, handleSubmit } = useForm();

  return (
    <div className={style.generalDataContainer}>
      
      <form>
        <div>
          <label>Entidad</label>
          <input type='text'/>

          <label>Código cliente</label>
          <input type='text'/>
        </div>
        <div>
          <label>Nombre del plan</label>
          <input type='text'/>
          
          <label>Descripción del plan</label>
          <input type='text'/>
        </div>
        

      </form>

    </div>
  )
}

export default GeneralData