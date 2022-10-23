import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, set_categories] = React.useState([]);

    React.useEffect(() => {
        fetch('https://dragon-news-server-hasibul240.vercel.app/news-categories')
            .then(res => res.json())
            .then(data => set_categories(data));
    }, []);

    return (
        <div>
            <h3>All Categories</h3>
            <div>
                {
                    categories.map(category =>
                        <p key={category.id}>
                            <Link to={`/category/${category.id}`}>{category.name}</Link>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;