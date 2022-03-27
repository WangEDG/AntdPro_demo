import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';
import { Button, Spin } from 'antd';
import style from './index.less';

const ProTableTest: React.FC = () => {
  const headerTitle = () => {
    return <div className={style.headerTitle}>高级表格测试使用</div>;
  };
  const columns: ProColumns<API.RuleListItem>[] = [
    {
      title: '充电站名称',
      dataIndex: 'name',
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '负责人',
      dataIndex: 'principal',
    },
    {
      title: '联系方式',
      dataIndex: 'phone',
    },
    {
      title: '身份证号码',
      dataIndex: 'snumber',
      hideInSearch: true, //在搜索中不展示
    },
    {
      title: '营业执照编号',
      dataIndex: 'ynumber',
    },
    {
      title: '审核状态',
      dataIndex: 'status',
      valueEnum: {
        // 0: { text: '正常营业', status: 'success' },
        0: { text: '正常营业', status: 'Processing' },
        1: { text: '停业中...', status: 'error' },
        3: { text: '未知', status: 'default' },
      },
    },
  ];
  const tableRequest = (): any => {
    const tableData: any = [
      {
        id: '1',
        name: '孵化园充电站',
        address: '高新区孵化园',
        principal: '小王',
        phone: '15775903456',
        snumber: '511566788934237755',
        ynumber: '76663565',
        status: 0,
      },
      {
        id: '2',
        name: '中海国际电站',
        address: '高新区金融城',
        principal: '小刘',
        phone: '15367403456',
        snumber: '56542898934237755',
        ynumber: '466757',
        status: 1,
      },
      {
        id: '3',
        name: '银泰城电站',
        address: '天府五街银泰城',
        principal: '小李',
        phone: '15360841456',
        snumber: '56542236780113755',
        ynumber: '409657',
        status: 3,
      },
    ];
    return {
      data: tableData,
      success: true,
      total: tableData.length,
    };
  };
  return (
    <PageContainer>
      <Spin spinning={false}>
        <ProTable
          headerTitle={headerTitle()}
          columns={columns}
          rowKey="id" //循环渲染 rowkey属性作为key
          search={{
            labelWidth: 120,
            filterType: 'query',
          }}
          request={tableRequest}
          // table工具栏
          options={false}
          toolBarRender={() => [<Button key="show">查看日志</Button>]}
        />
      </Spin>
    </PageContainer>
  );
};

export default ProTableTest;
