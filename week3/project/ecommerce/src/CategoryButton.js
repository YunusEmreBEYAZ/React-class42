

function CategoryButton({ category, onClick }) {


    function handleClick(category) {

        onClick(category);
    }

    return (
        <div>
            <button onClick={() => handleClick(category)}>
                {category}
            </button>


        </div>
    );
}

export default CategoryButton;