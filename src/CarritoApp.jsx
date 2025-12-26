import { Navigate, Route, Routes } from 'react-router-dom'
import './CarritoApp.css'
import { NavbarComponent } from './components/NavbarComponent'
import { ProductsPage } from './pages/ProductsPage'
import { CartPage } from './pages/CartPage'
import { ProductProvider } from './context/ProductProvider'
import { CartProvider } from './context/CartProvider'

export const CarritoApp = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <NavbarComponent />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<ProductsPage />}></Route>
                        <Route path='/carrito' element={<CartPage />}></Route>
                        <Route path='/*' element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ProductProvider>
    )
}
