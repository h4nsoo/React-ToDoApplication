import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function ToDo({ task }) {
  return (
    <div className='todo-list'>
      <p>{task.name}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className='edit' />
        <FontAwesomeIcon icon={faTrash} className='delete' />
      </div>
    </div>
  )
}
