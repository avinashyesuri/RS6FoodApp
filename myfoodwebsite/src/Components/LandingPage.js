import React, { useEffect, useState } from 'react'
import g1 from '../Imgs/bg.png'
import g2 from '../Imgs/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze 1.png'
import './AllPgs.css'
import SubLandingPg from './SubLandingPg'

const BASEURL_FOOD_WEB = "http://localhost:9000"

const LandingPage = () => {

const [data,setData] = useState(null)
const [filteredData,setfilteredData] = useState(null)
const [seelctedBtn,setseelctedBtn] = useState("all")

const [err,setErr] = useState(null)
const [load,setLoad] = useState(false)

//---------------------------------------------------------------------
// You should use useEffect to fetch data when the component mounts to avoid running the fetch function in an infinite loop.
//  useEffect ensures the fetch operation is called only once when the component is first rendered.






    // const fetchData=async ()=>{
    //     setLoad(true)
    //     try{
    //         const response = await fetch(BASEURL_FOOD_WEB)
    //         const json = await response.json()
    //         setData(json)
    //         setLoad(false)


    //     }catch (error){
    //         setErr("unable to fetch")
    //     }
     
        
    // }



useEffect(()=>{
       const fetchData=async ()=>{
        setLoad(true)
        try{
            const response = await fetch(BASEURL_FOOD_WEB)
            const json = await response.json()
            setData(json)

            setfilteredData(json)
            setLoad(false)


        }catch (error){
            setErr("unable to fetch")
        }
    }
    fetchData()
}, [])
console.log(data)
// the dependency array is used to control when the effect runs. If you don't provide a dependency array, the effect will run after every render, which can cause an infinite loop if the effect updates the state that triggers a re-render.

const searchfood=(e)=>{
    const searchedValu = e.target.value;
    console.log(searchedValu)
    if (searchedValu === ""){
        setfilteredData(null);
    }
    const filter = data?.filter((food)=>food.name.toLowerCase().includes(searchedValu.toLowerCase()))
setfilteredData(filter)
}

const filterType=(type)=>{
    if(type === "all"){
        setfilteredData(data)
        setseelctedBtn('all')
        return;
    }
    const filter = data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()))
setfilteredData(filter)
setseelctedBtn(type)
}




const filterBtns = [{
        name:'All',
        type:'all'
},
{
    name:'Breakfast',
    type:'breakfast'
},
{
    name:'Lunch',
    type:'lunch'
},{
    name:'Dinner',
    type:'dinner'
}]
if(err) return <div>{err}</div>
if(load) return <div>Loading .... </div>




    return (
        <div className="main">
            <div className="main-1">
                <img src={g2} style={{ height: "120px", width: "120px" }} />
                <input type='search' onChange={searchfood} placeholder='Search Food' />
            </div>

            <div className="main_sub_butt">
            {
                filterBtns.map((value,index)=>(
                    <button key ={value.name} onClick={()=> filterType(value.type)}>{value.name} </button>
                ) )}
                {/* <button onClick={()=> filterType("all")}>All</button>
                <button onClick={()=> filterType("breakfast")}>BreakFast</button>
                <button onClick={()=> filterType("lunch")}>Lunch</button>
                <button onClick={()=> filterType("dinner")}>Dinner</button> */}
            </div>

            <div className='bg-img'>
                <SubLandingPg filtdata = {filteredData} URL = {BASEURL_FOOD_WEB}/>
            </div>

        </div>

    )
}

export default LandingPage