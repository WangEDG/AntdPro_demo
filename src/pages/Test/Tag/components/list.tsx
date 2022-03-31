// import React from 'react';
import { Row, Col, List } from 'antd';

import ProForm, { ProFormText } from '@ant-design/pro-form';

import style from '../index.less';

export default function ListTable() {
  const data = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.'];
  const readerItem = (item: any) => {
    return (
      <Row className={style.Row}>
        <Col className={style.Col} span={20}>
          <div>{item}</div>
        </Col>
        <Col className={style.Col} span={4}>
          <div>{item}</div>
        </Col>
      </Row>
    );
  };
  return (
    <div>
      <ProForm
        layout="inline"
        submitter={{
          render: (props, doms) => {
            return <div className={style.sub}>{[...doms]}</div>;
          },
          searchConfig: {
            resetText: '重置',
            submitText: '搜索',
          },
        }}
        // grid={true}
        // rowProps={{
        //   gutter: 20,
        // }}
      >
        <ProFormText
          width="md"
          name="name"
          required
          label="客诉:"
          tooltip="最长为 24 位"
          placeholder="请输入名称往后鞥股份嘎嘎嘎盖尔发货哈挂风格哈哈返回"
          colProps={{
            span: 15,
          }}
        />

        <ProFormText
          width="md"
          name="name"
          required
          label="客诉:"
          tooltip="最长为 24 位"
          placeholder="请输入名称往后鞥股份嘎嘎嘎盖尔发货哈挂风格哈哈返回"
          colProps={{
            span: 15,
          }}
        />
      </ProForm>

      <List
        header={<div>申请记录列表</div>}
        footer={<div>Footer</div>}
        split
        dataSource={data}
        renderItem={readerItem}
      />
    </div>
  );
}
