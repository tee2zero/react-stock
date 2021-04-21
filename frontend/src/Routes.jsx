import {Route, Switch} from 'react-router-dom'
import AdminLayout from './components/layouts/AdminLayout'
import AuthLayout from './components/layouts/AuthLayout'
import FrontLayout from './components/layouts/FrontLayout'
import About from './pages/about/About'
import Chartjs from './pages/chartjs/Chartjs'
import Dashboard from './pages/dashboard/Dashboard'
import FirebaseAuth from './pages/firebaseauth/FirebaseAuth'
import FirebaseCRUD from './pages/firebasecrud/FirebaseCRUD'
import FirebaseStorage from './pages/firebasestorage/FirebaseStorage'
import Forgotpassword from './pages/forgotpassword/Forgotpassword'
import GoogleMapAPI from './pages/googlemap/GoogleMapAPI'
import Home from './pages/home/Home'
import HookForm from './pages/hookform/HookForm'
import Jwt from './pages/jwt/Jwt'
import Login from './pages/login/Login'
import PageNotFound from './pages/pagenotfound/PageNotFound'
import PdfCSVExprot from './pages/pdfcsvexport/PdfCSVExprot'
import Project from './pages/project/Project'
import ReactAdmin from './pages/reactadmin/ReactAdmin'
import ReactDataGrid from './pages/reactdatagrid/ReactDataGrid'
import ReactYoutubeAPI from './pages/reactytapi/ReactYoutubeAPI'
import ReduxCart from './pages/reduxcart/ReduxCart'
import Register from './pages/register/Register'
import ProductList from './pages/reststrapi/ProductList'
import AddProduct from './pages/reststrapi/AddProduct'
import Team from './pages/team/Team'
import EditProduct from './pages/reststrapi/EditProduct'

const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
   <Route {...rest} render={ props => (
        <Layout><Component {...props}></Component></Layout> 
   )}></Route>
)

const Routes = () => {
    return (
        <Switch>

            {/* Frontend */}
            <AppRoute path="/" exact={true} layout={FrontLayout} component={Home} />
            <AppRoute path="/about" layout={FrontLayout} component={About} />
            <AppRoute path="/teams" layout={FrontLayout} component={Team} />
            <AppRoute path="/projects" layout={FrontLayout} component={Project} />

            {/* Authen */}
            <AppRoute path="/login" layout={AuthLayout} component={Login} />
            <AppRoute path="/register" layout={AuthLayout} component={Register} />
            <AppRoute path="/forgotpassword" layout={AuthLayout} component={Forgotpassword} />

            {/* Backend */}
            <AppRoute path="/dashboard" layout={AdminLayout} component={Dashboard} />
            <AppRoute path="/reststrapi" exact={true} layout={AdminLayout} component={ProductList} />
            <AppRoute path="/reststrapi/addproduct" exact={true} layout={AdminLayout} component={AddProduct} />
            <AppRoute path="/reststrapi/editproduct/:id" exact={true} layout={AdminLayout} component={EditProduct} />


            <AppRoute path="/redux" layout={AdminLayout} component={ReduxCart} />
            <AppRoute path="/jwt" layout={AdminLayout} component={Jwt} />
            <AppRoute path="/chartjs" layout={AdminLayout} component={Chartjs} />
            <AppRoute path="/pdfcsvexport" layout={AdminLayout} component={PdfCSVExprot} />
            <AppRoute path="/hookform" layout={AdminLayout} component={HookForm} />
            <AppRoute path="/googlemap" layout={AdminLayout} component={GoogleMapAPI} />
            <AppRoute path="/firebasecrud" layout={AdminLayout} component={FirebaseCRUD} />
            <AppRoute path="/firebaseauth" layout={AdminLayout} component={FirebaseAuth} />
            <AppRoute path="/firebasestorage" layout={AdminLayout} component={FirebaseStorage} />
            <AppRoute path="/reactadmin" layout={AdminLayout} component={ReactAdmin} />
            <AppRoute path="/reactdatagrid" layout={AdminLayout} component={ReactDataGrid} />
            <AppRoute path="/reactytapi" layout={AdminLayout} component={ReactYoutubeAPI} />
            

             {/* Pagenotfound */}
            <Route component={PageNotFound} />
        </Switch>
    )
}

export default Routes
