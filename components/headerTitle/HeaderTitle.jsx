import React from 'react'
import style from './HeaderTitle.module.css'
import HeaderButton from './headerButton/HeaderButton'

const HeaderTitle = () => {
  return (
    <div className={style.headerTitleContainer}>
      
      <HeaderButton></HeaderButton>
      <h2>Crear plan de compra</h2>
      
      </div>
  )
}

export default HeaderTitle