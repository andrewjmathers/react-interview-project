import React from 'react';
import InfoLoader from './InfoLoader';
import Organizations from './Organizations';
import UserAvatar from './UserAvatar';


const Info = ({userInfo}) => 
    <InfoLoader component={userInfo}>
        <UserAvatar user={userInfo.user} />
        <Organizations orgs={userInfo.orgs} />
    </InfoLoader>

export default Info;
