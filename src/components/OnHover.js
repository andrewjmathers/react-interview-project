import React from 'react';
import Image from './Image';
import styled from 'styled-components';

const PopUp = styled.div`
    div{
        h4{
            font-size: 14px;
            color: #24292e;
            white-space: normal;
        }
        p{
            font-size: 14px;
            color: #24292e;
            white-space: normal;
        }
        padding-left: 20px;
    }
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 2fr;
    position: absolute;
    heigth: 250px;
    width: 250px;
    background-color: white;
    border: 1px solid black;
    padding: 20px;
    z-index: 100;
    transform: translateY(-130%);
`;

const OrgImg = styled(Image)`
    img{
        height: 100%;
        width: auto;
        position: relative;
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
        border-radius: 3px;
    }
    div{
        position: absolute;
    }
    height: 80px;
    width: 80px;
    position: relative;
    display: grid;
    align-self: center;
`;

const OnHover = ({orgs}) =>
    <PopUp>
        <OrgImg source={orgs.avatar_url} />
        <div>
            <h4>{orgs.login}</h4>
            <p>{orgs.description}</p>
        </div>
    </PopUp>

export default OnHover;
