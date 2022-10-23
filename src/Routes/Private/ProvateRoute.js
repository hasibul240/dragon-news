import React from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ProvateRoute = ({ children }) => {

    const user = React.useContext(AuthContext);
    
    return (
        <div>
            
        </div>
    );
};

export default ProvateRoute;