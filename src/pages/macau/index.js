import React,{useState} from 'react'
import { Map, Marker } from '@pansy/react-amap';
import Drawer from '../drawer'
import data from '../../data/data.json'
import './index.css'

export default function Index() {
    const [locationInfo, setLocationInfo] = useState('');
    const [titleInfo, setTitleInfo] = useState('');
    const [dateInfo, setDateInfo] = useState('');

    return (
        <div  style={{ height: 800}}>
            <Map rotateEnable={false} zoomEnable={true}>
                <Drawer/>	
                {
                    data.map((element,index) => {
                        if(element["title"]===''){
                            return null
                        }
                        let tmp=element["longitudeAndLatitude"].split(',');
                        return <div>
                            <Marker
                                key={index}
                                position={{
                                    longitude: tmp[0],
                                    latitude: tmp[1]
                                }}

                                events={{
                                    mouseover: (e) => {
                                        setLocationInfo(element["location"])
                                        setTitleInfo(element["title"])
                                        setDateInfo(element["date"])
                                    },
                                }}
                            >
                                <div className='icon'>{/* {element["title"].substring(0,5)} */}</div>
                            </Marker>
                        </div>
                    })
                }
            </Map>
            <div className='InformationBoard'>
                <div>{locationInfo}</div>
                <div>{titleInfo}</div>
                {
                    dateInfo.split(' ').map((value1)=>{
                        return <div>{value1}</div>
                    })
                }
            </div>
        </div>
    )
}
