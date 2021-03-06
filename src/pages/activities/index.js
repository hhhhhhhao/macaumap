import React, { useState } from 'react';
import { Modal, Button } from 'antd';

export default function Activity(props) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div>
            <Button onClick={showModal} style={{border:0}}>
                {props.activityTitle}
            </Button>
            
            <Modal title="活动信息" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div>活动名称：<a href={props.href}>{props.activityTitle}</a></div>
                <div>日期：{props.date===" "?"暂无信息":props.date}</div>
                <div>地点: {props.location===" " || props.location=== "待定"?"暂无信息":props.location}</div>
            </Modal>
        </div>
    )
}
