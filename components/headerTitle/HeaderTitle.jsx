import React from 'react'
import style from './HeaderTitle.module.css'
import HeaderButton from './headerButton/HeaderButton'

const HeaderTitle = ({titleForm}) => {
  return (
    <div className={style.headerTitleContainer}>
      
      <HeaderButton></HeaderButton>
      <h2>{titleForm}</h2>
      
      </div>
  )
}

export default HeaderTitle