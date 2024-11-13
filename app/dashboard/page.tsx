import React from 'react'
import NavigationBar from '../components/NavigationBar'
import SideBar from '../components/SideBar'

function page() {
  return (
    <div className='flex'>
        <SideBar/>
        <main className='w-[85%]'><NavigationBar/></main>
        

    </div>
  )
}

export default page