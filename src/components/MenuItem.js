import { HashLink } from "react-router-hash-link";

const MenuItem = (props) => {
  // console.log("Inside MenuItem");

  console.log(props.item.id + " " + props.item.name);

  return (
    <>
      <div className="col-sm-4 menu-item" key={props.item.id}>
    <HashLink smooth to={`/menu#${props.item.tag}`} className="hover-underline-animation">
            <img src={`${props.item.image}`} alt={`${props.item.name}`}/>
            <p>{props.item.name}</p>
        </HashLink>

    </div>
    </>
  );
};


 
export default MenuItem;

