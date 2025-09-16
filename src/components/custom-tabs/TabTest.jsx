import React from 'react'
import CustomTabs from './CustomTabs'

const TabTest = () => {
  function RandomComponent(){
    return <h1>Tab3</h1>
  }

  const tabs=[
    {
      label : 'Tab1',
      content: <h1>Tab1</h1>

    },
    {
  
      label : 'Tab2',
      content: <h1>Tab2</h1>
    },
    {
      
      label : 'Tab3',
      content: <RandomComponent/>
    }
  ]
  return (
    <CustomTabs tabs={tabs}/>
  )
}

export default TabTest

