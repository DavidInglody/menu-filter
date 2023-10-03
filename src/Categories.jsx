const Categories = ({categories, filterItems}) => {

  return <div className="btn-container">
    {categories.map((oneCategory) =>{
      return <div key={oneCategory} className="container-buttons" onClick={()=> filterItems(oneCategory)}>
        <button className="btn">
          {oneCategory}
        </button>
      </div>
    })}
  </div>
}
export default Categories