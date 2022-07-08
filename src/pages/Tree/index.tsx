// import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Row, Col, Tree } from 'antd';

export default function index() {
    const treeData = [
        {
            children: [
                {
                    children: [],
                    icon: '',
                    key: 'GM00005141',
                    title: 'GOC内部测试',
                },
                {
                    children: [],
                    icon: '',
                    key: 'GC000',
                    title: '支付宝',
                },
                {
                    children: [],
                    icon: '',
                    key: 'GM052',
                    title: '智能科技',
                },
            ],
            icon: '',
            key: 'GM00003416',
            title: '蚂蚁集团',
        },
    ];
    console.log(treeData);

    return (
        <PageContainer
            header={{
                title: '页面标题',
                breadcrumb: {
                    routes: [
                        {
                            path: '',
                            breadcrumbName: 'Tree组件使用',
                        },
                    ],
                },
            }}
            content="1.Tree组件的使用&#10;2.Tree组件的数据结构&#10;3.Tree组件的技巧"
        >
            {/* <Card> */}
            <Row style={{ height: '100%' }} gutter={16}>
                <Col span={6} style={{ backgroundColor: 'white' }}>
                    <Tree treeData={treeData} />
                </Col>
                <Col span={18} style={{ backgroundColor: 'white' }}>
                    3
                </Col>
            </Row>
            {/* </Card> */}
        </PageContainer>
    );
}
