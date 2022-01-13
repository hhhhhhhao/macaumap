import React from 'react'
import { Map, Marker } from '@pansy/react-amap';
import Drawer from '../drawer'

export default function index() {
    return (
        <div  style={{ height: 800}}>
            <Map rotateEnable={false} zoomEnable={true}>
                <Drawer/>	
                <Marker
                    position={{
                    longitude: 113.544038,
                    latitude: 22.195077
                    }}
                />
            </Map>
        </div>
    )
}
