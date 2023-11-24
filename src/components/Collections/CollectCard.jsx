import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const CollectCard = ({img,name,cond}) => (
  <Card
    style={{
      width: '22rem',
      padding:0,
      margin:'0 auto',
      boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.6)',
      marginBottom:'2rem'
      
    }}
    bodyStyle={{padding: "0"}}
    cover={
      <img
        alt="example"
        src={img}
      />
    }
   
  >
  
      <h2 style={{fontSize:'1.5rem', padding:'1rem'}} >{name}</h2>
      {cond?null :
      <div className="container">
        
      <div className="item1">
        <p  style={{fontSize:'1.7rem'}}> Floor</p>
        <h2  style={{fontSize:'1.2rem'}}>0.02ETh</h2>
      </div>
      <div className="item2">
        <p  style={{fontSize:'1.7rem'}}>Total Volume</p>
        <h2  style={{fontSize:'1.2rem'}}>6 ETh</h2>
      </div>
      </div>
      }

  </Card>
);
export default CollectCard;