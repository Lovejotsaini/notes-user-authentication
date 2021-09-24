import React, { useState } from 'react'
import EditQuote from './EditQuote'

const QuotesItem = (props) => {
    const { name, body, id, removeItem ,editItem} = props
    const [toggle, setToggle] = useState(false)

    const handleRemove = () => {
        const confirmRemove = window.confirm("Are you sure")
        if (confirmRemove) {
            removeItem(id)
        }
    }

    const handleToggle = () => {
        const result = !toggle
        setToggle(result)
    }
    return (
        <div>{toggle ? (
            <div>
                <EditQuote id={id} body={body} name={name}
                editItem={editItem}
                handleToggle={handleToggle}/>
                <button className="btn" onClick={handleToggle}>cancel</button>
            </div>
        ) : (
            <div className="noteslist">
                <blockquote className="qhead">{name}</blockquote>
                <p><em className="qbody">{body}</em></p>
                <button  className="btn" onClick={handleToggle}>edit</button>
                <button  className="btn" onClick={handleRemove}>remove</button>

            </div>
        )}

        </div>
    )
}
export default QuotesItem