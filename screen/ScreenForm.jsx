import DiscountLines from '@/components/discountLines/DiscountLines'
import GeneralData from '@/components/generalData/GeneralData'
import HeaderTitle from '@/components/headerTitle/HeaderTitle'
import ProductPartnership from '@/components/productPartnership/ProductPartnership'
import React from 'react'
import style from './ScreenForm.module.css'

const ScreenForm = () => {
  return (
    <div className={style.screenFormGlobalContainer}>
      <HeaderTitle></HeaderTitle>
      <GeneralData></GeneralData>
      <DiscountLines></DiscountLines>
      <ProductPartnership></ProductPartnership>
    </div>
  )
}

export default ScreenForm