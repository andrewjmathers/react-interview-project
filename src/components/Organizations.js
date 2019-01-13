import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import OnHover from './OnHover';

const Orgs = styled.div`
    ul{
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-row-gap: 10px;
        overflow-y: scroll;
        max-width: 230px;
        justify-content: flex-start;
        padding: 0;
        white-space: nowrap;
        height: 100%;
        min-height: 100px;
    }
    h4{
        text-align: left;
    }
`;

const OrgList = styled(Image)`
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
    height: 35px;
    width: 35px;
    position: relative;
`;

export default class Organizations extends React.Component{
    constructor(props){
        super(props);
        this.state = {hovered: false};
    }
    
    onHover = (e) =>{
        let target = e.target.nodeName === "LI"?
            e.target
        :
            e.target.parentNode.nodeName === "LI"?
                e.target.parentNode
            :
                e.target.parentNode.parentNode
            ;
        ;

        this.setState({hovered: target.id});
    }

    onLeave = () =>{
        this.setState({hovered: false});
    }

    render(){
        
        const 
            {orgs} = this.props,
            organisations = orgs && orgs.map((org, i)=>
                <li key={i} id={i} onMouseOver={this.onHover} onMouseLeave={this.onLeave}>
                    <OrgList source={org.avatar_url} />
                    {parseInt(this.state.hovered) === i && <OnHover orgs={org} />}
                </li>
            );

        return(
            <Orgs>
                <h4>Organizations</h4>
                {organisations.length?
                    <ul>{organisations}</ul>
                :
                    <p>Nothing to display</p>
                }
            </Orgs>
        );
    }
}