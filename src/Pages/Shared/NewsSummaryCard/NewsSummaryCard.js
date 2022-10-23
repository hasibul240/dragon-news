import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {

    const { _id, author, title, details, total_view, image_url, rating } = news;
    const { name, img, published_date } = author;
    const {number} = rating;

    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between'>
                <div className='d-flex'>
                    <Image className='me-2' roundedCircle src={img} style={{ height: "60px" }} />
                    <div>
                        <p className='mb-0 mt-1'>{name}</p>
                        <p className='mb-0'>{published_date}</p>
                    </div>
                </div>
                <div className='mt-3'>
                    <FaRegBookmark className='me-2'/>
                    <FaShareAlt/>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details?.length > 250 ? <>{details.slice(0, 250) + '.....'} <Link to={`/news/${_id}`}>Read More</Link></> : <>{details}</>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <FaStar className='text-warning me-2' />
                    <span>{number}</span>
                </div>
                <div className='d-flex align-items-center'>
                    <FaEye className='me-2'/>
                    <span>{total_view} views</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;