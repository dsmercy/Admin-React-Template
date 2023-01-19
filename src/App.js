import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './features/Dashboard';
import Layout from './features/Layout/Layout';
import OrderDetails from './features/orders/OrderDetails';
import OrdersList from './features/orders/OrdersList';
import AddProduct from './features/products/AddProduct';
import ProductDetails from './features/products/ProductDetails';
import ProductList from './features/products/ProductList';

function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="orders" element={<OrdersList />} />
                    <Route path="ordersdetails" element={<OrderDetails />} />
                    <Route path="products" element={<ProductList />} />
                    <Route path="productdetails" element={<ProductDetails />} />
                    <Route path="addproduct" element={<AddProduct />} />
                </Route>
            </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
