/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';
import { Button, Spin } from 'antd';
// import { request } from 'umi';
import { useRequest } from 'umi';
import style from './index.less';

const ProTableTest: React.FC = () => {
  // 模拟网络请求
  const editUsername = (username: number, time = 100): Promise<object> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (Math.random() > 0.5) {
        //   resolve();
        // } else {
        //   reject(new Error('Failed to modify username'));
        // }
        if (username > 5) {
          resolve({
            success: true,
            message: '请求成功',
          });
        } else {
          reject(new Error('Failed to modify username'));
        }
      }, time);
    });
  };
  /*ApiFox*/
  // const outLogin = (options: any) => {
  //   return request<Record<string, any>>('	http://127.0.0.1:4523/mock/868262/post/test/one', {
  //     method: 'POST',
  //     ...(options || {}),
  //   });
  // };

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

  const {
    run: test,
    data: testData,
    loading: testLoading,
  } = useRequest(editUsername, {
    manual: true,

    // 对返回值做处理
    formatResult: (res) => res,
    // onBefore: (params: any) => {
    //   debugger;
    //   console.log(params);
    // },
    onSuccess: (data, params) => {
      console.log('请求成功data:', data);
      console.log('请求成功params', params);
    },
    onError: (data, params) => {
      console.log('请求失败data:', data);
      console.log('请求失败params', params);
    },
    // onFinally: () => {},

    // onBefore: () => {},
    // onFinally: () => {},
  });

  useEffect(() => {
    test(10, 100);
    test(20, 3000);
  }, []);

  return (
    <PageContainer>
      <Spin spinning={testLoading}>
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
