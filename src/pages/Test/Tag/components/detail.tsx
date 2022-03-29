// import React from 'react'
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Steps, Row, Col } from 'antd';

const { Step } = Steps;

import style from '../index.less';

export default function Detail() {
  const renderTitle = () => {
    return (
      <Row gutter={10}>
        <Col>三忽</Col>
        <Col>2022-12-02</Col>
        <Col>进行中。。。</Col>
      </Row>
    );
  };
  return (
    <PageContainer>
      <Card>
        {/* <Row>
          <Col span={24}>col</Col>
        </Row>
        <Row>
          <Col span={24}>col</Col>
        </Row> */}
        <div className={style.detail}>
          <div className={style.top}>
            {/* <Empty /> */}
            123
          </div>
          <div className={style.bottom}>
            <Steps progressDot current={5} direction="vertical">
              <Step title={renderTitle()} />
              <Step title="Finished" description="This is a description. This is a description." />
              <Step
                title="In Progress"
                description="This is a description. This is a description."
              />
              <Step title="Waiting" description="This is a description." />
              <Step title="Waiting" description="This is a description." />
            </Steps>
          </div>
        </div>
      </Card>
    </PageContainer>
  );
}
