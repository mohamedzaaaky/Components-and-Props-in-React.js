import React from 'react'

const MainContent = ({pageName, designer} ) => {
  return (
    <div>
          <main>
   {pageName}
   <br />
   <h1 className="animate__animated animate__bounce" style={{color:"red"}}>{designer}</h1>
  {designer}
      </main>
    </div>
  )
}

export default MainContent