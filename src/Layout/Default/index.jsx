import Header from "./Header"
import Footer from "./Footer"

const DefaultLayout = ( {children} ) => {
    return (
        <div className="container mx-auto h-100vh">
            <Header />
            <div>
                {children}
            </div>
            
            <Footer />
         
        </div>
    )
}
export default DefaultLayout