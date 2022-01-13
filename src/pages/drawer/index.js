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
                
                data.map(element => {
                  if(element["标题"]===''){
                    return null
                  }
                  console.log(element);
                  return <Activity activityTitle={element["标题"]} date={element["日期"]} location={element["地点"]} href={element["href"]} />
                })
              }
             </Drawer>
        </div>
    )
}
