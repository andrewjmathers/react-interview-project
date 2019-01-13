import React from 'react';
import styled from 'styled-components';
import Image from './Image.js';

const Username = styled.div`
    h1{
        font-size: 26px;
        line-height: 30px;
        color: #24292e;
        margin: 0;
        margin-top: 0.67em;
    }
    h2{
        color: #666;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 24px;
        margin: 0;
    }
    span{
        font-size: 14px;
        padding-left: 10px;
        color: #24292e;
    }
    svg{
        vertical-align: text-bottom;
        fill: #6a737d;
    }
    text-align: left;
    line-height: 30px;
    padding: 0;
    margin: 0;
    margin-bottom: 0.67em;
    
`;

const ProfilePicture = styled(Image)`
    img{
        height: 100%;
        width: auto;
        position: relative;
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
    }
    div{
        position: absolute;
    }
    height: 229px;
    width: 229px;
    position: relative;
`;

const UserAvatar = ({user}) =>
    <div>
        <ProfilePicture source={user.avatar_url} />
        <Username>
            <h1>{user.name}</h1>
            <h2>{user.login}</h2>
            {user.location && <svg viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fillRule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path></svg>}
            <span>{user.location}</span>
        </Username>
    </div>


export default UserAvatar;