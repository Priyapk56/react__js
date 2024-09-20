import React from "react";

class Apples extends React.Component{
    render()
    {
        const {AppleInfo}=this.props;
        const{type,colours}=AppleInfo
        return (<h1>Im a {colours} {type} Apple!</h1>)
    }

}
export default Apples;