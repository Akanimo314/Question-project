import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const SingleQuestion = ({id, title, info, ActiveId, toggleId}) => {
  const IsActiveId = id === ActiveId
  return (
    <article className="single-quest">
        <header className="single-que-con">
            <h4>{title}</h4>
            {IsActiveId && <p>{info}</p>}
            {/* {showInfo? <p>{info}</p> : <h3>{''}</h3>} */}
            <button className="bton" onClick={() => toggleId(id)}>
                {IsActiveId? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </header>
    </article>
  )
}

export default SingleQuestion