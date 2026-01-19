
import { Route,Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
// import AdminLogin from './components/admin/AdminLogin'
// import ListProduct from './pages/admin/ListProduct'
// import AddProduct from './pages/admin/AddProduct'
// import Orders from './pages/admin/Orders'
 import { ShopContext } from './context/ShopContext'
import { Toaster } from 'react-hot-toast'
import Products from './components/Products'
import ProductSingle from './components/ProductSingle'




function App() {

  // const { showUserLogin, isAdmin } = useContext(ShopContext)
  // const location = useLocation()
  // const isAdminPath = location.pathname.includes('admin');


  return (
    // <main className='overflow-hidden text-tertiary'>
    
    //   <Header  />
    //   <Toaster position='top-left'/>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/cart" element={<Cart />} />
    //     <Route path="login" element={<Login />} />
    //      <Route path="/collections" element={<Products/>} />
    //      <Route path="/collections/product/:id" element={<ProductSingle/>} />
    //     {/* <Route path="/admin" element = {isAdmin ? <Sidebar/> : <AdminLogin/>} >
    //          <Route index element = {isAdmin ? <AddProduct/> : null} />
    //          <Route path = 'list' element={<ListProduct/>}  />
    //          <Route path = 'orders' element = {<Orders/>} />
    //     </Route> */}
        
      
  
    <main className='overflow-hidden text-tertiary'>
      {/* {showUserLogin && <Login />} */}
      {/* {!isAdminPath && <Header />} */}
      <Header  />
      <Toaster position='top-left' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collections" element={<Products/>} />
         <Route path="/collections/product/:id" element={<ProductSingle/>} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/place-orders" element={<PlaceOrder />} /> */}
        {/* <Route path="/my_orders" element={<MyOrders />} /> */}
        {/* <Route path="/loader" element={<Loading />} /> */}
        {/* <Route path="/dresscollection" element={<DressCollection />} /> */}
        {/* <Route path="/worthiness" element={<Worthiness />} /> */}
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/dresscollection/:category" element={<DressCategoryCollection />} />
        <Route path="/dresscollection/:category/:id" element={<DressDetails />} /> */}
        <Route path="/admin">
          {/* <Route index element={<AdminLogin />} /> */}

          {/* <Route
            element={isAdmin ? <Sidebar /> : <Navigate to="/admin" />}
          >
            <Route path="dashboard" element={<DashboardView />} />
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="list" element={<ListProduct />} />
            <Route path="orders" element={<Orders />} />
          </Route> */}
        </Route>

      </Routes>
      <Footer />
    </main>
  )
}

export default App
