import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {

    const all_news = useLoaderData();
    useTitle('Home')
    return (
        <div>
            <h2>this is home</h2>
            {
                all_news.map(news => <NewsSummaryCard key={news._id} news={news}/>)
            }
        </div>
    );
};

export default Home;