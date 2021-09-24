import React from 'react'
import QuotesForm from './QuotesForm'

const AddQuote = (props) => {
    const { addItem } = props

    const formSubmission = (formData) => {
        addItem(formData)
    }
    return (
        <div className="addquote">
            <QuotesForm formSubmission={formSubmission} />
        </div>
    )
}

export default AddQuote