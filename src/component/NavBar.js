import React from 'react'
import { Link, Route,withRouter } from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Account from './Account';

const NavBar = (props) => {
    const { userLoggedIn, handleAuth } = props
    return (
        <div>
            <div className="topnav">
                <a><Link to="/">Home</Link></a>
                {userLoggedIn ? (
                    <React.Fragment>
                        <a><Link className="lin" to="/account">Account</Link></a>
                        
                        <a><Link onClick={()=>{
                            localStorage.removeItem('token')
                            alert('successfully logged out')
                            handleAuth()
                            props.history.push('/')
                        }}>Logout</Link></a>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <a><Link to="/register">Register</Link></a>
                        <a><Link to="/login">Login</Link></a>
                    </React.Fragment>
                )}
            
                </div>



            <Route path="/" component={Home} exact={true} />
            <Route path="/register" component={Register} />
            <Route path="/account" component={Account}  />
            
            <Route path="/login" render={(props) => {
                return <Login
                    {...props}
                    handleAuth={handleAuth} />
            }} />

        </div>
    )
}
export default withRouter(NavBar)