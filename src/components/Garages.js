import Cars from './Cars';
import Apples from './Apples';

function Garages(){
    //const brand='Ferrari';
    //const colours='Black';
    const carInfo={brand:"Ferrari",colours:"Black"}
    const AppleInfo={type:"Fuji", colours:"Red"}
    //List
    const carList=[
        { brand : "BMW", colours : "red"},
        {brand : "Ford", colours : "pink"},
        {brand : "Tesla", colours : "blue"},
        {brand : "Ferrari", colours : "black"},

    ]
    //list keys
    const numberList=[
        
            1,2,3,4,5,6
        
    ];

    const showCarInfo =carInfo.brand!==undefined && carInfo.colours!==undefined
    return(
        <>
        <h1>Hello Car</h1>
        {/*<Cars brand={brand} colours={colours}/>*/}
        {
            showCarInfo && <Cars carInfo={carInfo}/>}
        <Apples AppleInfo={AppleInfo}/>
        <ul>
            {/*carList.map((carInfo)=><li><Cars carInfo={carInfo}/></li>)*/}
            {/*list key*/}
            {carList.map((carInfo)=><li key={carInfo.brand}><Cars carInfo={carInfo}/></li>)}
           {/* lambda function , transferrign value beween components */}
        </ul>

        <ul>
            {numberList.map((e,index) => <p key={index}>{e}</p>)}
        </ul>

        </>

    );
}

export default Garages;