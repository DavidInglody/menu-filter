import MenuItem from "./MenuItem"

const Menu = ({menuItems}) => {

  return <div className="section-center">
    {menuItems.map((oneMeal)=>{
        return <MenuItem key={oneMeal.id} {...oneMeal}/>
    })}
  </div>
}
export default Menu