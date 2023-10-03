import { useState } from "react";
import Title from "./Title";
import menu from "./data"
import Menu from "./Menu";
import Categories from "./Categories";


const result = ["all", ...new Set(menu.map((oneCategory)=> oneCategory.category))]

const App = () => {
  
  const[menuItems,setMenuItems]= useState(menu)
  // const[categories,setCategories]= useState(result)
  
  const filterItems = (category)=>{
    if(category === "all"){
      setMenuItems(menu)
      return
    }
    const newItems = menu.filter((item)=> item.category === category)
    setMenuItems(newItems)
  }

  return <main>
    <section>
      <Title text="our menu"/>
      <Categories categories={result} filterItems={filterItems}/>
      <Menu menuItems={menuItems}/>
    </section>
  </main>
};
export default App;
