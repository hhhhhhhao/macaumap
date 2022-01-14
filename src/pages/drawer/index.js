import React, { useState} from 'react';
import { Drawer, Button } from 'antd';
import Activity from '../activities'
import './index.css'
import data from '../../data/data.json'

export default function Drawer1() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
    return (
        <div>
            <Button type="primary" onClick={showDrawer} className="drawerButton">
              查看所有活动
            </Button>
            <Drawer title="活动信息" placement="right" onClose={onClose} visible={visible}>
              {
                
                data.map((element,index) => {
                  if(element["title"]===''){
                    return null
                  }
                  return <Activity key={index} activityTitle={element["title"]} date={element["date"]} location={element["location"]} href={element["href"]} />
                })
              }
             </Drawer>
        </div>
    )
}
