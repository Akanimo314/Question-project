import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({data, ActiveId, toggleId}) => {
  return (
    <div className="quest-con">
      {data.map((question) => {
          return(
              <SingleQuestion question={question.id} {...question} 
              ActiveId={ActiveId} toggleId={toggleId}/>
          )
      })}
  </div>
  )
}

export default Questions