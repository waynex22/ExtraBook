import Home from "../Pages/Home"
import Shop from "../Pages/Shop"
import ShopLayout from "../Layout/Shop"
import Detail from "../Pages/Detail"
import CartCheck from "../Pages/CartCheck"
const publicRoutes = [
    {path: '/' , component: Home},
    {path: '/product/:id', component: Detail},
    {path: '/cart', component: CartCheck},
    {path: '/shop' , component: Shop, layout: ShopLayout}
]
const privateRoutes = [
    {path: '/admin/dashboard'}
]
export {publicRoutes , privateRoutes}