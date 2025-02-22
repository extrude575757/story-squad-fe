import React from 'react';
import { Layout, Card } from 'antd';
import ParentNavTopBar from '../../common/ParentNavTopBar';
import NewProgressCharts from '../../common/NewProgressCharts';


const RenderNewParentDashboard = props => {
  return (
    <>
      <Layout className="parent-dashboard">
        <ParentNavTopBar />

        <Layout>
          <div className="progress-container">
            <NewProgressCharts />
          </div>

        </Layout>
      </Layout>
    </>
  );
};

export default RenderNewParentDashboard;