import React from 'react';

export default class Image extends React.Component{
    constructor(props){
        super(props);
        this.state = {loaded: false};
    }

    handleImageLoaded = (e) => {
        this.setState({loaded: true});
    };

    render(){
        const {source, className} = this.props;
        return(
            <div className={className}>
                <div style={{height: "20%", width: "20%"}} className={this.state.loaded? "" : "loading"}></div>
                <img className={!this.state.loaded? "preLoad" : ""} onLoad={this.handleImageLoaded}  src={source} alt="user avatar"/>
            </div>
        )
    }
}
