import React, {useState} from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const SingleQuestion = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className='single-quest'>
      <div className='singl-que-con'>
        <h3>{title}</h3>
        {showInfo && <p>{info}</p>}
        {/* ======== OR =========
        {showInfo? <p>{info}</p> : <h3>{''}</h3>} */}
      </div>
        <button onClick={() => setShowInfo(!showInfo)} className='bton'>
            {showInfo? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
    </article>
  )
}

export default SingleQuestion