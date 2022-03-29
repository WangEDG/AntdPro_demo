// import React from 'react';
import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';
import { Link } from 'umi';
// import { PlusOutlined } from '@ant-design/icons';
// import { useState } from 'react';

import UpdateForm from './updateForm';
import CollectForm from './collectForm';
import { useState } from 'react';

import '../index.less';

export default function Table(props: any) {
  const { msg } = props;

  const [configModalVisible, setConfigModalVisible] = useState<boolean>(false);

  //申请记录
  const applyForColumns: ProColumns<API.RuleListItem>[] = [
    {
      title: '规则编号',
      dataIndex: 'name',
      // 排序
      sorter: (a: any, b: any) => a.name - b.name,
      width: 120,
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
      width: 120,
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
      width: 150,
      render: (_, record) => {
        return [
          <a
            key="config"
            onClick={() => {
              setConfigModalVisible(true);
            }}
          >
            配置
          </a>,
          <Link
            to={'/test/tag/detail/:12'}
            key="detail"
            onClick={() => {
              console.log(_);
              console.log(record);
            }}
          >
            详情
          </Link>,
          <a key="cancel">取消</a>,
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
  const tableRequest = (params: any, sort: any, filter: any): any => {
    console.log(params);
    console.log(sort);
    console.log(filter);

    const oneTableData: any = [
      {
        id: '1',
        name: '78900123460',
        originalSound: '长大后懂得了一个道理，不贬低别人喜欢的东西，是一种素养',
        content: '愿你被生活温柔以待，愿你温柔地对待生活',
        physical: '难过的时候，就把自己当成另一个人。当初怎么安慰别人，现在就怎么安慰自己',
        nature: '正常维权事件',
        status: 1,
      },
      {
        id: '3',
        name: '8465780235',
        originalSound: '长大后懂得了一个道理，不贬低别人喜欢的东西，是一种素养',
        content: '愿你被生活温柔以待，愿你温柔地对待生活',
        physical: '难过的时候，就把自己当成另一个人。当初怎么安慰别人，现在就怎么安慰自己',
        nature: '正常维权事件',
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
      <ProTable
        // headerTitle={
        //   <>
        //     <div>Basic Table</div>
        //   </>
        // }
        // headerTitle={renderTag()}
        columns={msg === 'one' ? applyForColumns : historyColumns}
        rowKey="id"
        request={tableRequest}
        //搜索表单按钮自定义
        search={{
          defaultCollapsed: false,
          labelWidth: 'auto',
          optionRender: (searchConfig, formProps, dom) => {
            return [...dom.reverse(), <CollectForm key="search" />];
          },
        }}
        //操作栏自定义
        //toolBarRender={false}

        //关闭整个操作栏
        options={false}
        // 翻页的配置项
        pagination={{
          className: 'pagCustom',
          size: 'small',
          pageSize: 5,
          total: 100,
          hideOnSinglePage: true,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, rang) => {
            return `共${total}条，展示第${rang[0] + '-' + rang[1]} 条`;
          },
        }}
      />

      {/* 配置表单 (分布表单) */}
      <UpdateForm
        configModalVisible={configModalVisible}
        onCancel={() => {
          setConfigModalVisible(false);
        }}
      />
    </>
  );
}
