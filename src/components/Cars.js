function Cars(props){
    //const {brand , colours}=props
    const {carInfo}=props;
    const {brand , colours}=carInfo;
    
    const text=`Hi , Im a ${colours} ${brand} Car`;
    return(<h2>{text}</h2>);
    
}

export default Cars;