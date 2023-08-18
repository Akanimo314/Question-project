import React from 'react'
import SingleQuestion from "./SingleQuestion";


const Questions = ({data}) => {
  return (
    <div className='quest-con'>
      {data.map((question) => {
          return(
              <SingleQuestion key={question.id} {...question}/>
          )
      })}
    </div>
  )
}

export default Questions