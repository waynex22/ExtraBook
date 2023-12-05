import React from 'react'
import { Rating } from 'flowbite-react'
const CommentItem = ({ comment }) => {
    const { account_id, content, createdAt, rating } = comment
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedTime = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`
    const filledStars = Array.from({ length: rating }, (_, index) => index + 1);
    return (
        <article className="p-6 text-base bg-white rounded-lg ">
            <div className="flex mb-4 mt-4">
            <Rating>
                    {filledStars.map((star, index) => (
                        <Rating.Star key={index} />
                    ))}
                    {Array.from({ length: 5 - rating }, (_, index) => (
                        <Rating.Star key={rating + index} filled={false} />
                    ))}
                </Rating>
            </div>
            <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold"><img
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://dss.andaman.gov.in/ShipETicketingWeb/images/login_image.png"
                        alt="Michael Gough" />{account_id.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        <div >{formattedTime}</div>
                    </div>
                </div>
            </footer>
            <div className="text-gray-500 dark:text-gray-400">{content}</div>
        </article>
    )

}
export default CommentItem