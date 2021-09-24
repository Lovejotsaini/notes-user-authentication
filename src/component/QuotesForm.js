import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const QuotesForm = (props) => {
    const { formSubmission, id: slNo, name: author, body: quote, handleToggle } = props
    const [id, setId] = useState(slNo ? slNo : uuidv4())
    const [name, setName] = useState(author ? author : '')
    const [body, setBody] = useState(quote ? quote : '')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: id,
            name: name,
            body: body
        }
        console.log(formData)
        formSubmission(formData)

        //reset form
        if (handleToggle) {
            handleToggle()
        }
        setBody('')
        setName('')
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }
    return (
        <div>
            <h4>Note</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Title"/><br />

                <textarea value={body} onChange={handleBodyChange} placeholder="Your story "/><br />
                <input type="submit" value="save" />
            </form>

        </div>
    )
}

export default QuotesForm