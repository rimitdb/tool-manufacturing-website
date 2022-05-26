import React, { useEffect, useState } from 'react'
import ToolDetails from './Tool'

const Tools = () => {
  const [tools, setTools] = useState([])
  useEffect(() => {
    fetch(`https://morning-badlands-27515.herokuapp.com/tool`)
      .then(res => res.json())
      .then(data => setTools(data))
  }, [])

  return (
    <div className="container">
      <h3 className="text-3xl text-center text-danger">Electric Tools</h3>
      <div className="row">
        {
          tools.slice(0).reverse().map(tool => (
            <ToolDetails
              key={tool._id}
              tool={tool}
            ></ToolDetails>
          ))}
      </div>
    </div>


  )
}

export default Tools
