import React from "react"
import DetailProduct from "../Components/DetailProduct"
import Comment from '../Components/Comment'
const Detail = () => {

    return (
        <div>
            <DetailProduct />
            <div className="container rounded-xl mt-6 px-5 py-10 mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden bg-white">
                <Comment />
            </div>
        </div>
    )
}

export default Detail;