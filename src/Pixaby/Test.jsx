import React, { useEffect, useState } from 'react'
import './Style.css'
import Navbar from './Navbar/index'
import Card from './ImageCard/Card'
import Footer from './Footer/Footer'


const Test = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [debounceValue, setDebounceValue] = useState('')
    const [totalPages, setTotalPages] = useState(0)
    const perPage = 8
    // totalPages  = totalHits / 10
    

     useEffect(() => {
        const timer = setTimeout(() => {
          setDebounceValue(search)
        }, 500)
    
        return () => {
          clearTimeout(timer)
        }
      }, [search])

      useEffect(()=>{
        const query = debounceValue.trim() || 'nature'
        fetch(`https://pixabay.com/api/?key=54709926-c36f300a5bda0b419bf291357&q=${encodeURIComponent(query)}&image_type=photo&page=${currentPage}&per_page=8`)
        .then(res => res.json())
        .then(d =>{ setData(d.hits)
          setTotalPages(Math.ceil(d.totalHits / perPage))
        })
      },[debounceValue,currentPage])

     function handlePrev(){
  setCurrentPage((prev) => Math.max(prev - 1, 1))
}

      function handleNext(){
  setCurrentPage((prev)=> Math.min(prev + 1, totalPages))
}

     function handleSearch(searchItem){
  setSearch(searchItem)
  setCurrentPage(1)
}

  return (
    <>
     <Navbar setSearch={setSearch} setCurrentPage={setCurrentPage} handleSearch={handleSearch} />
      {/* images */}
      {/* import ImageCard from './ImageCard' */}

    <div className="grid">
        {data.map((item) => (
        <Card key={item.id} item={item} />
     ))}
    </div>


      {/* pagination */}
      <div className='pagination'>
        <button onClick={handlePrev} disabled={currentPage === 1} >Prev</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={handleNext} >Next</button>
      </div>

      <Footer />
   </>

    
  )
}

export default Test
