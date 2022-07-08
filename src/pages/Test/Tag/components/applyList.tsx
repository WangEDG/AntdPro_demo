import React, { useRef, useState } from 'react';
import { Row, Col, List, Tag, Button } from 'antd';

import ProForm, { ProFormSelect, ProFormText } from '@ant-design/pro-form';
import Search from './search';
import { map } from 'lodash';
import { FORMLABEL } from '../constant/basic';
import style from '../index.less';

export default function ListTable() {
  const [tagData] = useState([
    {
      name: '搜索集1',
      value: {
        name: '1231',
      },
    },
  ]);
  // const FORMLABEL = {
  //   name: '客诉/舆情原声',
  //   type: 'input',
  //   sjqk: '客诉/事件的核实情况',
  //   status: '舆情事件性质',
  //   disposeStatus: '处置状态',
  //   applyName: '申请名称',
  //   appEnter: 'APP入口',
  // };
  const data = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.'];
  const readerItem = (item: any) => {
    return (
      <Row>
        <Col className={style.Col} span={20}>
          <div>{item}</div>
        </Col>
        <Col className={style.Col} span={4}>
          <div>{item}</div>
        </Col>
      </Row>
    );
  };
  const optionsOne = {
    0: '未解决',
    1: '已解决',
    3: '处理中',
  };
  const optionsTwo = {
    0: '待处理',
    1: '已处理',
    3: '评估中',
    4: '处置完成',
    5: '无需处理',
  };
  const formRef: any = useRef();

  //迭代测试
  const initShowVaule = (value: any, item: any) => {
    switch (item.type) {
      case 'input':
        return value;

      case 'select':
        return item.option[value];

      default:
        return value;
    }
  };
  const collectSearch = (): any[] => {
    const formValue = { ...formRef.current.getFieldsValue() };
    console.log('form:', formValue);
    const result: any[] = [];

    map(formValue, (value, key) => {
      if (value !== undefined && value !== '') {
        const item = FORMLABEL.find((info) => info.name === key);
        result.push({
          label: item ? item.label : '',
          showValue: item ? initShowVaule(value, item) : '',
          key,
          value,
        });
      }
    });
    formRef.current.resetFields();
    return result;
  };
  const triggerSearch = (formValue: any) => {
    console.log(formValue);
    formRef.current.setFieldsValue(formValue);
  };
  const renderTag = () => {
    return tagData.map((item) => {
      return (
        <Button type="link" key={item.name}>
          {item.name}
        </Button>
      );
    });
  };
  return (
    <div>
      <ProForm
        layout="inline"
        submitter={{
          render: (props, doms) => {
            return (
              <div className={style.sub}>
                {[...doms]}
                <Search
                  style={{ marginTop: '20PX' }}
                  collectSearch={collectSearch}
                  formRef={formRef}
                  triggerSearch={triggerSearch}
                />
              </div>
            );
          },
          searchConfig: {
            resetText: '重置',
            submitText: '搜索',
          },
        }}
        formRef={formRef}
      >
        <ProFormText
          width="md"
          name="name"
          required
          label="客诉/舆情原声:"
          tooltip="最长为 24 位"
          placeholder="请输入客诉"
          colProps={{
            span: 15,
          }}
        />
        <ProFormText
          width="md"
          name="sjqk"
          required
          label="客诉/事件的核实情况:"
          tooltip="最长为 24 位"
          colProps={{
            span: 15,
          }}
        />
        <ProFormSelect
          width="md"
          name="status"
          required
          label="舆情事件性质:"
          colProps={{
            span: 15,
          }}
          valueEnum={optionsOne}
        />
        <ProFormSelect
          width="md"
          name="disposeStatus"
          required
          label="处置状态:"
          colProps={{
            span: 15,
          }}
          valueEnum={optionsTwo}
        />
        <ProFormText
          width="md"
          name="applyName"
          required
          label="申请名称:"
          colProps={{
            span: 15,
          }}
        />
        <ProFormText
          width="md"
          name="appEnter"
          required
          label="APP入口:"
          colProps={{
            span: 15,
          }}
        />
      </ProForm>

      <div>{renderTag()}</div>

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
