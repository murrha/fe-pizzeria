
import { useLocation, useParams } from "react-router-dom"
import ListFormat from "./ListFormat"
import SearchBar from "./SearchBar"



const SearchResult = () => {
    let loca = useLocation()
    let params = useParams()
    let searchFilterArr = loca.state
    let tagArr = Array.from (new Set(searchFilterArr.map(food=>food.tag)))
    let searchTerm = params.searchTerm
    
    
    return ( <>
      
      {<SearchBar value={searchTerm} disabled={true} readOnly={true}/>} 
      <ListFormat tagArr={tagArr} foodList={searchFilterArr}/>
      </>
         ) }
 
export default SearchResult;