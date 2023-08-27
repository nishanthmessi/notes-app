const Category = ({ categories, selectedCategory, handleCategorySelect }) => {
  return (
    <div className='flex gap-6 my-6'>
      <h1 className='text-lg font-medium'>Categories :</h1>
      <ul className='flex gap-8'>
        <li
          className={`cursor-pointer ${
            !selectedCategory
              ? `font-medium bg-gray-800 text-white px-2 rounded-md`
              : 'hover:underline'
          }`}
          onClick={() => handleCategorySelect(null)}
        >
          All
        </li>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`cursor-pointer ${
              category === selectedCategory
                ? `font-medium bg-gray-800 text-white px-2 rounded-md`
                : 'hover:underline'
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
