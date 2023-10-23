import MenuItem from "./MenuItem";

const Menu = (props) => {
  let menuItemsArray = props.items;
  console.log("Inside Menu");
  // console.log(menuItemsArray);
  // menuItemsArray.map((menuItem) => {
  //     console.log(menuItem.id + " " + menuItem.name);
  // })

  return (
    <>
      <div className="container text-center my-5">
        <h4 className="mb-4">Explore our Menu</h4>
        <div className="row">
          {menuItemsArray.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
