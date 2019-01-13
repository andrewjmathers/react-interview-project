import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    li{
        h4{
            a{
                text-decoration: none;
            }
        }
        p{
            color: #586069!important;
            font-size: 12px!important;
        }
        height: 100px;
        width: 300px;
        border: 1px solid gray;
        padding: 16px!important;
        position: relative;
        overflow: scroll;
        margin: 0 10px;
    }
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
    list-style: none;
    overflow-y: scroll;
    max-height: 100%;
    height: 50vh;
    font-size: 14px;
    padding: 20px;

`;

const Repos = ({repos, page}) =>{
    const repositories = repos.length && repos
        .slice(page-5, page)
        .map((item, i)=>
            <li key={i}>
                <h4><a href={item.svn_url}>{item.name}</a></h4>
                <p>{item.description}</p>
                <p>{item.language}</p>
            </li>
    )
    return <List>{repositories}</List>
}

export default Repos;