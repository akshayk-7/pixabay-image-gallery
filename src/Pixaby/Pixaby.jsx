import React, { useEffect, useState } from 'react'

const Pixaby = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [debounceValue, setDebounceValue] = useState('')
  const [error, setError] = useState('')

  const apiKey = import.meta.env.VITE_PIXABAY_API_KEY

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(search)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [search])

  useEffect(() => {
    if (!apiKey) {
      setError('Missing VITE_PIXABAY_API_KEY in .env')
      setData([])
      return
    }

    const query = debounceValue.trim() || 'nature'
    const controller = new AbortController()

    setError('')

    fetch(
      `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&page=${currentPage}&per_page=12`,
      { signal: controller.signal }
    )
      .then((res) => {return res.json()})
      .then((d) => setData(d.hits || []))
      // .catch((err) => {
      //   if (err.name !== 'AbortError') {
      //     setError(err.message)
      //     setData([])
      //   }
      // })

    return () => controller.abort()
  }, [apiKey, debounceValue, currentPage])

  function handleNext() {
    setCurrentPage((prev) => prev + 1)
  }

  function handlePrev() {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className=''>
      <h1 className='title'>Image Gallery</h1>
      <input
        type='text'
        placeholder='Search Images..'
        onChange={(e) => {
          setSearch(e.target.value)
          setCurrentPage(1)
        }}
      />

      {error && <p>{error}</p>}

      <div>
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.webformatURL} alt={item.tags || 'Pixabay image'} />
          </div>
        ))}
      </div>

      <div>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <span>{currentPage}</span>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Pixaby
