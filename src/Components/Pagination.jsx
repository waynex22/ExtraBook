const Pagination = ({ totalPosts, postPerPage, setCurrentPage, currentPage }) => {
    const totalPages = Math.ceil(totalPosts / postPerPage)
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

    return (
        <div className="flex items-center justify-center">
            {pages.map((page) => (
                <button
                    className={`${page === currentPage ? 'bg-transparent border-solid border-2 rounded-lg border-red-600' : 'bg-transparent hover:border-red-600 border-solid border-2 rounded-lg border-gray-300'
                        } px-2 py-1 mx-2`}
                    key={page}
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    )
}
export default Pagination
