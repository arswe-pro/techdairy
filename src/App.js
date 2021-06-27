import React, { createContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ForgotPassword from './Account/ForgotPassword'
import Login from './Account/Login'
import register from './Account/register'
import loaders from './assets/img/loaders.gif'
import PrivateRoute from './Authentication/PrivateRoute'
import Auth, { AuthContextProvider } from './Authentication/useAuth'
import FooterComponent from './Components/Footer'
import Navbar from './Components/Navbar'
import NotFound from './Components/NotFound'
import Post from './Components/Post'
import Dashboard from './Dashboard/Dashboard'
import Detail from './Screen/Detail'
import Home from './Screen/Home'
export const UserContext = createContext()

const App = () => {
    const auth = Auth()
    return auth.user === undefined || auth.user ? (
        <AuthContextProvider>
            <Router>
                <Navbar />

                <Switch>
                    <Route exact path='/' component={Home} />

                    <Route path='/Post' component={Post} />

                    <Route path='/Detail/:id' component={Detail} />

                    <Route path='/Login' component={Login} />

                    <Route path='/register' component={register} />

                    <Route path='/ForgotPassword' component={ForgotPassword} />

                    <PrivateRoute path='/Dashboard' component={Dashboard} />

                    <Route path='*' component={NotFound} />
                </Switch>

                <FooterComponent />
            </Router>
        </AuthContextProvider>
    ) : (
        <div style={{ textAlign: 'center' }}>
            <img src={loaders} alt='loading' width='500' />
        </div>
    )
}

export default App
