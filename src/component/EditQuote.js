import React from 'react'
import QuotesForm from './QuotesForm'
const EditQuote=(props)=>{
const {id,name,body,editItem,handleToggle}=props

const formSubmission=(formData)=>{
    console.log('edit',formData)
    editItem(formData)
}
    return (
        <div>
            <QuotesForm
            id={id}
            name={name}
            body={body}
            formSubmission={formSubmission}
            handleToggle={handleToggle}/>
        </div>
    )
}

export default EditQuote