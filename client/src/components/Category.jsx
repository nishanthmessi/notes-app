const Category = ({ categories, selectedCategory, handleCategorySelect }) => {
  return (
    <div className='flex gap-6 my-6'>
      <h1>Categories :</h1>
      <ul className='flex gap-8'>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`cursor-pointer ${
              category === selectedCategory
                ? 'font-semibold bg-gray-800 text-white px-2 rounded-md'
                : ''
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Category
