import React, { Component } from 'react';
import { List, Rating } from 'antd';
import skillSet from './data/skills';
import 'antd/dist/antd.css';

class SkillList extends Component {
  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={skillSet}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.name}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    );
  }
}

export default SkillList;
