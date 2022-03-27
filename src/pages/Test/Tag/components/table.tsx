// import React from 'react';
import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';
// import { Button, Tag, Space, Select } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';
// import { useState } from 'react';

export default function Table(props: any) {
  const { msg } = props;

  //申请记录
  const applyForColumns: ProColumns<API.RuleListItem>[] = [
    {
      title: '规则编号',
      dataIndex: 'name',
    },
    {
      title: '舆情/客诉原声',
      dataIndex: 'originalSound',
      hideInSearch: true,
    },
    {
      title: '内容描述',
      dataIndex: 'content',
      hideInSearch: true,
    },
    {
      title: '舆情/客诉的实际情况',
      dataIndex: 'physical',
      //   hideInSearch: true,
    },
    {
      title: '舆情事件性质',
      dataIndex: 'nature',
      hideInSearch: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueEnum: {
        0: { text: '进行中', status: 'Processing' },
        1: { text: '已关闭', status: 'error' },
        3: { text: '已完结', status: 'default' },
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => {
        return [
          <a
            key="config"
            // onClick={() => {
            //   handleUpdateModalVisible(true);
            //   setCurrentRow(record);
            // }}
          >
            详情
          </a>,
          <a
            key="cancel"
            // onClick={() => {
            //   handleUpdateModalVisible(true);
            //   setCurrentRow(record);
            // }}
          >
            取消
          </a>,
        ];
      },
    },
  ];
  //历史记录
  const historyColumns: ProColumns<API.RuleListItem>[] = [
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
  //表格数据
  const tableRequest = (): any => {
    // debugger;
    const oneTableData: any = [
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
    const twoTableData: any = [
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
    ];

    return {
      data: msg === 'one' ? oneTableData : twoTableData,
      success: true,
      total: msg === 'one' ? oneTableData.length : twoTableData.length,
    };
  };
  // const [tagList] = useState([
  //   '测试记录1',
  //   '测试记录2',
  //   '测试记录2',
  //   '测试记录3',
  //   '测试记录5',
  //   '测试记录6',
  //   '测试记录7',
  // ]);
  // const renderTag = () => {
  //   return tagList.map((item, index) => (
  //     // eslint-disable-next-line react/no-array-index-key
  //     <div key={index} style={{ marginLeft: '10px' }}>
  //       {item}
  //     </div>
  //   ));
  // };
  return (
    <>
      <div>{/* <Tag>124</Tag> */}</div>
      <ProTable
        // headerTitle={
        //   <>
        //     <div>Basic Table</div>
        //   </>
        // }
        // headerTitle={renderTag()}
        columns={msg === 'one' ? applyForColumns : historyColumns}
        request={tableRequest}
        //搜索表单按钮自定义
        search={{
          defaultCollapsed: false,
          labelWidth: 'auto',
          //   optionRender: (searchConfig, formProps, dom) => {
          //     return [
          //       //   ...dom.reverse(),
          //       <Button>导出</Button>,
          //     ];
          //   },
        }}
        //操作栏自定义
        //toolBarRender={false}
        //关闭整个操作栏
        options={false}
      />
    </>
  );
}
