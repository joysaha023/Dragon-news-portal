import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-lg font-bold mb-4">All Category</h2>
            {
                categories.map(categorie => <Link 
                    key={categorie.id}
                    to={`/categore/${categorie.id}`}
                    className='block p-6 text-lg hover:bg-gray-200 rounded-md text-gray-500 hover:text-black text-xl font-semibold'
                >{categorie.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;