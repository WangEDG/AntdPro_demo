import { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';

import ApplicationForm from './components/applicationForm';
import List from './components/list';

import style from './index.less';

export default function Tab() {
  const [activeTabKey, setActiveTabKey] = useState('one');
  const tabList = [
    {
      key: 'one',
      tab: '申请列表',
    },
    {
      key: 'two',
      tab: '历史记录',
    },
  ];
  const tabNode = {
    one: <ApplicationForm />,
    two: <List />,
  };

  return (
    <PageContainer>
      <div className={style.tabBar}>
        <Card
          style={{ width: '100%' }}
          tabList={tabList}
          activeTabKey={activeTabKey}
          onTabChange={(key) => {
            setActiveTabKey(key);
          }}
        >
          {tabNode[activeTabKey]}
        </Card>
      </div>
    </PageContainer>
  );
}
