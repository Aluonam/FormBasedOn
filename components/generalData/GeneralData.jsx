import React from 'react'
import style from './GeneralData.module.css'
import { useForm } from 'react-hook-form';

const GeneralData = () => {

  const { register, handleSubmit } = useForm();

  return (
    <div className={style.generalDataContainer}>
      
      <form>


      </form>

    </div>
  )
}

export default GeneralData