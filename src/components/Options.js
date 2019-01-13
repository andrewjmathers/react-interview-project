import React from 'react';
import styled from 'styled-components';

const PageSelect = styled.select`
    width: 100px;
    height: 30px;
    font-size: 15px;
    text-align: center;
    margin-left: 10px;
`;

const Options = ({repo, onChange}) =>{
    const repoCount = Math.ceil(repo.length/5);
    let pagesOptions = []; 
    for(var i = 0; i<repoCount; i++){
        pagesOptions.push(<option key={i} value={i}>{i+1}</option>)
    }
    return(
        <PageSelect onChange={onChange}>
            {pagesOptions}
        </PageSelect>
    )
}

export default Options;
