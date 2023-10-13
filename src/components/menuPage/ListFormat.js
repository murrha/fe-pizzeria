const ListFormat = (props) => {
    return ( 
        props.tagArr
        .map((tag)=>{
            return(
                <div id={tag} key={tag} className="mx-2 mt-4 mb-5">
                <h3 className="m-2">{tag.toUpperCase()}</h3>
                <div className="scrollMenu">
                {props.foodList.filter(item=>item.tag===tag).map(filterPro=> (
                <div key={filterPro.id} className="cardProduct card  rounded-0 border-light-subtle" style={{"width":"15rem"}}>
                <img src={filterPro.image} className="card-img-top rounded-0" alt="..."/>
                
                <div className="card-body">
                    <p className="card-text fw-bold mb-1">{filterPro.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text text-body fw-semibold d-inline mb-0">{filterPro.price}</p>   
                </div>
                </div>
                </div>))}
 </div>
  </div>)}
   )
     );
}
 
export default ListFormat;