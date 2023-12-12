
import {useLocation} from "react-router-dom"
import ListFormat from "./ListFormat"
import SearchBar from "./SearchBar"
import { useEffect, useState } from "react"
import axios from "axios"
import NotFound from "./NotFound"



const SearchResult = () => {
    let loca = useLocation()
    let searchTerm = loca.state
    // let params = useParams()
    // let searchTerm = params.searchTerm
    let [searchData,setSearchData] = useState();
    useEffect(() => {
      const fetchData = async ()=>{
        let resp = await axios.get(`http://localhost:3002/menu/${searchTerm}`)
        let data = await resp.data  
        setSearchData(data)
      };
      fetchData();
    },[searchTerm]);

    let tagArr
    if (searchData){
      tagArr = Array.from(new Set (searchData.map((item)=>item.tag)))
      }

    return ( <>
      
      {<SearchBar/>} 
    
      {searchData?
      (searchData.length>0? <ListFormat foodList={searchData} tagArr={tagArr}/>
      :<NotFound/>)
      :<h3>Loading...</h3>}

      </>
         ) }
 
export default SearchResult;