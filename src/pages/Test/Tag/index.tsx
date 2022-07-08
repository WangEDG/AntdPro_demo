import { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';

import ApplicationForm from './components/apply';
import List from './components/applyList';

import style from './index.less';

export default function Tab() {
  const [activeTabKey, setActiveTabKey] = useState('applyList');
  const tabList = [
    {
      key: 'apply',
      tab: '申请列表',
    },
    {
      key: 'applyList',
      tab: '历史记录',
    },
  ];
  const tabNode = {
    apply: <ApplicationForm />,
    applyList: <List />,
  };

  return (
    <PageContainer
      header={{
        title: '页面标题',
        breadcrumb: {
          routes: [
            {
              path: '',
              breadcrumbName: '一级页面',
            },
            {
              path: '',
              breadcrumbName: '二级页面',
            },
            {
              path: '',
              breadcrumbName: '当前页面',
            },
          ],
        },
      }}
      content="欢迎使用 ProLayout 组件"
    >
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
