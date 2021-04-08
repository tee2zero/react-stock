import {Route, Switch} from 'react-router-dom'
import AdminLayout from './components/layouts/AdminLayout'
import AuthLayout from './components/layouts/AuthLayout'
import FrontLayout from './components/layouts/FrontLayout'
import About from './pages/about/About'
import Dashboard from './pages/dashboard/Dashboard'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import PageNotFound from './pages/pagenotfound/PageNotFound'
import Product from './pages/product/Product'
import Project from './pages/project/Project'
import Register from './pages/register/Register'
import Team from './pages/team/Team'

const AppRoute = ({component: Component, layout: Layout, ...rest}: any) => (
   <Route {...rest} render={ props => (
        <Layout><Component {...props}></Component></Layout> 
   )}></Route>
)

const Routes = () => {
    return (
        <Switch>

            <AppRoute path="/" exact={true} layout={FrontLayout} component={Home} />
            <AppRoute path="/about" layout={FrontLayout} component={About} />
            <AppRoute path="/teams" layout={FrontLayout} component={Team} />
            <AppRoute path="/projects" layout={FrontLayout} component={Project} />

            <AppRoute path="/login" layout={AuthLayout} component={Login} />
            <AppRoute path="/register" layout={AuthLayout} component={Register} />

            <AppRoute path="/dashboard" layout={AdminLayout} component={Dashboard} />
            <AppRoute path="/products" layout={AdminLayout} component={Product} />

            <Route component={PageNotFound} />
        </Switch>
    )
}

export default Routes
