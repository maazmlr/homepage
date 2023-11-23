import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const CollectCard = ({img,name,cond}) => (
  <Card
    style={{
      width: 200,
      padding:0
      
    }}
    bodyStyle={{padding: "0"}}
    cover={
      <img
        alt="example"
        src={img}
      />
    }
   
  >
    {/* <Meta 
      title="Captain & company - Certified"/> */}
     
      <h2 style={{fontSize:'1.3rem', padding:'1rem'}} >{name}</h2>
      {cond?null :
      <div className="container">
        
      <div className="item1">
        <p>Floor</p>
        <h2>0.02ETh</h2>
      </div>
      <div className="item2">
        <p>Total Volume</p>
        <h2>6 ETh</h2>
      </div>
      </div>
      }

  </Card>
);
export default CollectCard;