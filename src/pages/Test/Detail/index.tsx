import React from 'react';
// Timeline
// Descriptions
import lodash from 'lodash';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Row, Col, Badge, Descriptions, Steps, Typography } from 'antd';
import style from './index.less';
const { Step } = Steps;

export default function Detail() {
  const StepsData = {
    apply: {
      handler: '三孚',
      createTime: '2022-07-11 00:12:45',
      status: '2',
      suggestion:
        '是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级UV产品的严苛考验。我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行',
    },
    audit: {
      handler: '三孚',
      createTime: '2022-07-11 00:12:45',
      status: '通过',
      suggestion:
        '是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级UV产品的严苛考验。我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行',
    },
    disposal: [
      {
        handler: '三孚',
        createTime: '2022-07-11 00:12:45',
        status: '通过',
        suggestion: '我觉得还ok',
      },
    ],
  };
  const randerText = () => {
    return <span>处理完成</span>;
  };
  const DescriptionsOption = [
    {
      labelName: '客诉/舆情对应的产品功能/业务流程',
      value: 'ks',
      span: 1,
    },
    {
      labelName: '客诉/舆情对应的产品功能/业务流程',
      value: 'ks',
      span: 1,
    },
    {
      labelName: '客诉/舆情对应的产品功能/业务流程',
      value: 'ks',
      span: 1,
    },
    {
      labelName: '客诉/舆情对应的产品功能/业务流程',
      value: 'ks',
      span: 3,
    },
    {
      labelName: '客诉/舆情对应的产品功能/业务流程',
      value: 'ks',
      span: 1,
    },
    {
      labelName: '客诉/舆情对应的产品功能/业务流程',
      value: 'ks',
      span: 1,
    },
    {
      labelName: '客诉/舆情对应的产品功能/业务流程',
      value: 'ks',
      span: 1,
    },
  ];
  const DescriptionsOptionT = [
    {
      labelName: '舆情/客诉原声',
      value: 'yq',
      span: 1,
    },
    {
      labelName: '舆情/客诉的实际核实情况',
      value: 'shiji',
      span: 1,
    },
  ];
  const data = {
    ks: '支付宝运动',
    yq: '支付宝运动,在我不知情的情况下调用我的LBS定位,好烦啊',
    shiji: [
      '经过核实客诉的情况,可以确定是合规的,用户的更广泛的挨个大概我回复回复回复会返回回复回复回复发',
      '经过核实客诉的情况,可以确定是合规的,用户的更广泛的挨个大概我回复回复回复会返回回复回复回复发',
      '经过核实客诉的情况,可以确定是合规的,用户的更广泛的挨个大概我回复回复回复会返回回复回复回复发',
    ],
  };
  const renderTitle = (tag: any) => {
    return (
      <Row gutter={10}>
        <Col>三忽</Col>
        <Col>2022-12-02</Col>
        <Col>{tag}</Col>
      </Row>
    );
  };
  const description = (par: any, params: any) => {
    console.log(Object.keys(par));

    return (
      <div className={style.description}>
        <div>
          {params.handler ? <span>{params.handler}</span> : <span>-</span>}
          {params.createTime ? <span>{params.createTime}</span> : null}
        </div>
        {params.status ? (
          params.status === '1' ? (
            <div>发起审批</div>
          ) : params.status === '2' ? (
            <div>审批中</div>
          ) : (
            <div>审批通过</div>
          )
        ) : null}
        {params.suggestion ? (
          <div>
            <Descriptions>
              <Descriptions.Item label="审批意见" contentStyle={{ color: 'red' }}>
                <Typography.Text
                  ellipsis={{ tooltip: params.suggestion }}
                  style={{ color: 'red', width: '300px' }}
                >
                  {params.suggestion}
                </Typography.Text>
              </Descriptions.Item>
            </Descriptions>
          </div>
        ) : null}
      </div>
    );
  };
  return (
    <PageContainer>
      <Card title="基本信息">
        <div className={style.basicInfo}>
          <Row
            style={{
              borderBottom: '0.5px solid #f2f2f2',
            }}
          >
            <Col className={style.colOne} span={20}>
              <Descriptions
                column={3}
                labelStyle={{
                  color: 'indigo',
                }}
                contentStyle={{
                  color: 'red',
                }}
              >
                {DescriptionsOption.map((item) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <Descriptions.Item label={item.labelName} span={item.span}>
                      {data[item.value]}
                    </Descriptions.Item>
                  );
                })}
              </Descriptions>
              <Descriptions>
                <Descriptions.Item label="UserName">12</Descriptions.Item>
              </Descriptions>
            </Col>
            <Col className={style.colTwo} span={4}>
              <div className={style.tag}>状态</div>
              <div className={style.tag}>
                <Badge color="blue" status="success" text={randerText()} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col className={style.colOne} span={20}>
              <Descriptions
                column={1}
                labelStyle={{
                  color: 'indigo',
                }}
                contentStyle={{
                  color: 'red',
                  display: 'block',
                }}
              >
                {DescriptionsOptionT.map((item) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <Descriptions.Item label={item.labelName} span={item.span}>
                      {typeof data[item.value] === 'string'
                        ? data[item.value]
                        : data[item.value].map((info: any, index: any) => {
                            // eslint-disable-next-line react/jsx-key
                            return <div key={info}>{`${index + 1} .  ${info}`}</div>;
                          })}
                    </Descriptions.Item>
                  );
                })}
              </Descriptions>
            </Col>
            <Col className={style.colTwo} span={4}>
              <div className={style.tag}>状态</div>
              <div className={style.tag}>
                <Badge color="blue" status="success" text={randerText()} />
              </div>
            </Col>
          </Row>
        </div>
      </Card>
      <Card title="审批流程">
        <Steps progressDot current={5} direction="vertical">
          <Step
            title={renderTitle('进行中。。。。')}
            description={description(StepsData, StepsData.apply)}
          />
          <Step title="Finished" description="This is a description. This is a description." />
          <Step title="In Progress" description="This is a description. This is a description." />
          <Step title="Waiting" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </Card>
    </PageContainer>
  );
}
