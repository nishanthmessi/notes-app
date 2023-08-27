import { categories } from '../utils/db'

const Category = () => {
  return (
    <div className='flex gap-6 my-6'>
      <h1>Categories :</h1>
      <ul className='flex gap-8'>
        {categories.map((category) => (
          <li>{category.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Category
