import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>Here is out terms and conditions</h3>
            <p>go back to: <Link to='/resister'>go back</Link></p>
        </div>
    );
};

export default Terms;