import React, { useState, useEffect } from 'react'
import axios from 'axios'
import QuotesList from './QuotesList'
import AddQuote from './addQuote'


const Account = (props) => {
    const [user, setUser] = useState({})
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        axios.get("http://dct-user-auth.herokuapp.com/users/account", {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }).then((response) => {
            const result = response.data
            setUser(result)
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])



    useEffect(() => {
        const result = JSON.parse(localStorage.getItem('quotes')) || []
        setQuotes(result)
    }, [])

    useEffect(() => {
        localStorage.setItem('quotes', JSON.stringify(quotes))
    }, [quotes])


    const addItem = (quote) => {
        //console.log("container",quote)
        const result = [quote, ...quotes]
        setQuotes(result)
    }

    const removeItem = (id) => {
        const result = quotes.filter((quote) => {
            return quote.id !== id
        })
        setQuotes(result)
    }
    const editItem = (quote) => {
        const result = quotes.map((q) => {
            if (q.id === quote.id) {
                return { ...q, ...quote }
            } else {
                return { ...q }
            }
        })
        setQuotes(result)
    }

    return (
        <div class="grid-container">
            <div class="item1">
                <h1 className="hi">Hi ,{user.username}</h1>
                <h5 className="emailhead">email - {user.email}</h5>
                <p className="caption"><em>“You can always edit a bad page. You can’t edit a blank page.”</em></p>
            </div>
            <div class="item2">
                <QuotesList quotes={quotes} removeItem={removeItem}
                    editItem={editItem} />
            </div>
            <div class="item3">
                <AddQuote addItem={addItem} />
            </div>

        </div>
    )
}
export default Account