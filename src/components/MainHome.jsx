import React from 'react'
import Aside from './Aside'
import Article from './Article'
import LangTable from './LangTable'

const MainHome = ({datos}) => {
  return (
    <div>
      <Aside/>
      <Article datos={datos}/>
      <LangTable/>

    </div>
  )
}

export default MainHome