import { useEffect } from "react"
import { useState } from "react"
import supabase from "../config/supabaseClient"
import SmoothieCard from "../components/SmoothieCard"

const Home = () => {
  const [fetchError,setFetchError] = useState(null)
  const [smoothies,setSmoothies] = useState(null)

  useEffect(()=>{
    const fetchSmoothies = async() =>{
      const {data,error}= await supabase
      .from('smoothies')
      .select()

      if(error){
        setFetchError('could not fetch smoothies')
        setSmoothies(null)
        console.log(error)
      }
      if(data){
        setSmoothies(data)
        setFetchError(null)
      }
    }

    fetchSmoothies()
  },[])
  return (
    <div className="page home">
      {fetchError && (<p>{fetchError}</p>)}
      {smoothies && (
        <div className='smoothie-grid'>
          {smoothies.map((smoothie)=>(
            <SmoothieCard
            smoothie={smoothie}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Home