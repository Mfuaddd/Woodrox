import React from 'react'
import HeaderTop from '../../components/HeaderTop'
import HeaderBottom from '../../components/HeaderBottom'
import "./index.scss"

function Header() {
  return (
    <div className="header">
      <HeaderTop/>
      <HeaderBottom/>
    </div>
  )
}

export default Header