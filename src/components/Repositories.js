import React from 'react';
import InfoLoader from './InfoLoader';
import Repos from './Repos';
import Options from './Options';


export default class Repo extends React.Component{

    constructor(props){
        super(props);
        this.state = {page: 1};
    }

    onSelectChange = (e) =>{
        const selected = parseInt(e.target.selectedOptions[0].innerHTML);
        this.setState({page: selected});
    }

    render(){
        const {repo} = this.props;
        return(
            <InfoLoader component={repo}>
                <h1>Repositories</h1>
                {
                    repo.repositories && 
                    <div>
                        <Repos repos={repo.repositories} page={this.state.page*5}/>
                        <span>Page:</span><Options onChange={this.onSelectChange} repo={repo.repositories}/>
                    </div>
                }
            </InfoLoader>
        );
    }
}   
