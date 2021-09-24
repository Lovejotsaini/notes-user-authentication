import React from 'react'
import QuotesItem from './QuotesItem'

const QuotesList=(props)=>{
const {quotes,removeItem,editItem}=props
    return (
        <div>
            {
                quotes.length===0?(
                    <div>
                        <h1>No Quotes found</h1>
                        <p>Add your first quote</p>
                    </div>
                ):(
                    <div>
                        <h4 className="lensize">Notes-{quotes.length}</h4>
                        {
                            quotes.map((quote)=>{
                                return <QuotesItem key={quote.id} {...quote} 
                                removeItem={removeItem}
                                editItem={editItem}/>
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default QuotesList