import React from 'react'
import Tabs3 from './Tabs3'

const Tabs3Test = () => {

  const tab4 = () => {
    return <h1>This is Tab 4</h1>
  }

  const tabs3 = [
    {
      index: 0,
      name: 'Tab1',
      content: <h1>This is Tab 1</h1>
    },
    {
      index: 1,
      name: 'Tab2',
      content: <h1>This is Tab 2</h1>
    },
    {
      index: 2,
      name: 'Tab3',
      content: <h1>This is Tab 3</h1>
    },
    {
      index: 3,
      name: 'Tab4',
      content: tab4() // ✅ Call the function, don't use it as JSX
    }
  ]

  return (
    <Tabs3 tabs3={tabs3} />
  )
}

export default Tabs3Test
