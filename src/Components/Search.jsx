import React, { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import PopperSearch from "./PopperSearch"
import * as searchService from '../apiService/searchService'
import { useDebounc } from '../Hooks/debounce'
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [result, setResult] = useState([])
  const inputRef = useRef(null)
  const debounce = useDebounc(searchQuery, 500)
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
  }
  const clear = () => {
    setSearchQuery('')
    setIsSearchFocused(false)
  }
  useEffect(() => {
    if (!debounce.trim()) {
      setResult([])
      return
    }
    const fecthApi = async () => {
      const res = await searchService.search(debounce)
      setResult(res)
    }
    fecthApi()
  }, [debounce])
  const searchResult = result.map((item, index) => (
    <section key={index}>
      <Link to={`/product/${item._id}`} onClick={clear} className=" ">
        <div className="flex justify-start items-center">
          <img src={item.image} alt={item.title} className="h-[50px] w-[50px] object-cover object-center m-4" />
          <h3 className="text-gray-400 m-4">{item.title}</h3>
        </div>
      </Link>
    </section>
  ))
  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setIsSearchFocused(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return (
    <div className="flex flex-col relative flex-start items-center">
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-white sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none"></div>
          <input
            type="search"
            id="default-search"
            ref={inputRef}
            name="search"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setIsSearchFocused(true)}
            className="block w-[550px] p-3 text-sm  border border-gray-300 rounded-xl bg-gray-50 focus:ring-red-500 focus:border-red-500"
            placeholder="Nhập tùm lum để tìm ....."
            required
          />
          <div
            className="text-white flex absolute right-3 bottom-1 cursor-pointer font-medium rounded-lg text-sm px-4 py-2"
          >
            {searchQuery && (
              <svg onClick={() => setSearchQuery('')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-gray-600 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            <div className="w-[1px] bg-gray-500 py-3 mx-4"></div>
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-gray-500 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>

        </div>
      </form>
      {isSearchFocused && (
        <div className="absolute z-50 w-full top-12 left-0">
          <PopperSearch>{searchResult}</PopperSearch>
        </div>
      )}
    </div>
  )
}

export default Search
