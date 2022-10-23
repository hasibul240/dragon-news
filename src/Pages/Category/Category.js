import React from 'react';
import { useLoaderData }  from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {

    const category_news = useLoaderData();

    return (
        <div>
            <h3>this is category {category_news.length}</h3>
            {
                category_news.map(news => <NewsSummaryCard key={news._id} news={news} />)
            }
        </div>
    );
};

export default Category;