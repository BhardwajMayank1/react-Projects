import React, { useState , useEffect} from 'react'
import axios from 'axios'
import Productcard from './Productcard'

const App = () => {

  // in new code we use useeffect and debounce its mean api runs and we see results after 5 seconds :))))

  const [query,setQuery]=useState('')
  const [product,setProduct]=useState([])
    const [loading, setLoading] = useState(false)
    const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {

    const timer = setTimeout(() => {
    setDebouncedQuery(query)
  }, 500)

  return () => {
    clearTimeout(timer)
  }}),

  useEffect(() => {

  if (!debouncedQuery.trim()) {
    setProduct([])
   
    return
  }

  const fetchProducts = async () => {
    try {
      setLoading(true)



      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${debouncedQuery}`
      )

      setProduct(response.data.products)
      

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  fetchProducts()

}, [debouncedQuery])

  

   
          // 🔥 runs whenever query changes

//   const submitHandler=(e)=>{
//     e.preventDefault()
//   }

// const media = async()=>{
//   const response =await axios.get(`https://dummyjson.com/products/search?q=${query}`)
//   // console.log(response)
//   setProduct(response.data.products)
//   console.log(response.data.products)

// }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>

       <input type="text"
       value={query}
       placeholder='Product'
       onChange={(e)=>{setQuery(e.target.value)}}
        />
         {loading && <h3>Loading...</h3>}

        <button onClick={()=>{
          media()
        }}>Search</button>
      </form>
      <ul>
        {product.map(function(elem,idx){
          return <div key={idx}>
            <Productcard images={elem.thumbnail}  
            brand={elem.brand} 
            availabilityStatus={elem.availabilityStatus} 
            price={elem.price}/>
          </div>
        })}
      </ul>
    </div>
  )
}

export default App
