import Home from "../Pages/Home"
import Shop from "../Pages/Shop"
import ShopLayout from "../Layout/Shop"
import Detail from "../Pages/Detail"
import CartCheck from "../Pages/CartCheck"
import Dashboard from "../Pages/DashBoard"
import Product from "../Pages/Admin/Product"
import AddProduct from "../Pages/Admin/AddProduct"
import EditingProduct from "../Pages/Admin/EditingProduct"
import Checkout from "../Pages/Checkout"
import Comment from "../Pages/Admin/Comment"
import DetailComments from "../Pages/Admin/DetailComment"
import Order from "../Pages/Order"
import OrderDetail from "../Pages/OrderDetail"
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product/:id', component: Detail },
    { path: '/cart', component: CartCheck },
    { path: '/shop', component: Shop, layout: ShopLayout },
    { path: '/checkout', component: Checkout },
    { path: '/myorder', component: Order },
    { path: '/myorder/:id', component: OrderDetail}
]

const privateRoutes = [
    { path: '/admin', component: Dashboard, role: 'admin' },
    { path: '/admin/product', component: Product, role: 'admin' },
    { path: '/admin/product/add', component: AddProduct, role: 'admin' },
    { path: '/admin/product/:_id', component: EditingProduct, role: 'admin' },
    { path: '/admin/comment/', component: Comment, role: 'admin' },
    { path: '/admin/comment/:_id', component: DetailComments, role: 'admin' }
]
export { publicRoutes, privateRoutes }