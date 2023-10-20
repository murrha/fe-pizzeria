const MenuItem = (props) => {

    console.log("Inside MenuItem"); 

    console.log(props.item.id + " " + props.item.name);

    return (<>
        
            <div className="col-sm-4 menu-item" key={props.item.id}>
                <a href="/#" className="hover-underline-animation">
                    <img src={`${props.item.image}`} alt={`${props.item.name}`}/>
                    <p>{props.item.name}</p>
                </a>

            </div>
    </>  );
}
 
export default MenuItem;