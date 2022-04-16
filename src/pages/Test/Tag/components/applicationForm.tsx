// import React from 'react';
import { Alert } from 'antd';
import ProForm, {
  ProFormText,
  ProFormSelect,
  ProFormRadio,
  ProFormTextArea,
  ProFormCascader,
} from '@ant-design/pro-form';
// import { useState } from 'react';
import _ from 'lodash';

export default function ApplicationForm() {
  const alertMessage = '你好！请准确完整填写。。。';
  const fn: any = _.debounce(async (key) => {
    console.log(key);
  }, 250);

  return (
    <div>
      <Alert
        message={alertMessage}
        type="info"
        showIcon
        closable
        style={{ marginBottom: '20px' }}
      />
      <ProForm
        grid={true}
        rowProps={{
          gutter: [50, 20],
        }}
      >
        <ProFormText
          width="md"
          name="name"
          required
          label="客诉:"
          tooltip="最长为 24 位"
          placeholder="请输入名称往后鞥股份嘎嘎嘎盖尔发货哈挂风格哈哈返回"
          rules={[{ required: true, message: '这是必填项' }]}
          colProps={{
            span: 8,
          }}
        />
        <ProFormText
          width="md"
          name="company"
          label="我方公司名称:"
          placeholder="请输入名称"
          colProps={{
            span: 8,
          }}
        />
        <ProFormSelect
          label="负责人员:"
          name="name"
          valueEnum={{
            1: '小王',
            2: '小刘',
            3: '小李',
          }}
          showSearch //开启搜索
          fieldProps={{
            mode: 'multiple', //多选
            autoClearSearchValue: true, //选中后清空搜索框
            onChange: (value) => {
              return value; //必须要return一个值出去 表单项才会展示值在输入框上
            },
            // onBlur
          }}
          request={fn}
          colProps={{ span: 8 }}
        />
        <ProFormText
          width="md"
          name="name"
          required
          label="对应技术:"
          tooltip="最长为 24 位"
          placeholder="请输入名称往后鞥股份嘎嘎嘎盖尔发货哈挂风格哈哈返回"
          rules={[{ required: true, message: '这是必填项' }]}
          colProps={{
            span: 8,
          }}
        />
        <ProFormText
          width="md"
          name="name"
          required
          label="对应运营:"
          tooltip="最长为 24 位"
          placeholder="请输入名称往后鞥股份嘎嘎嘎盖尔发货哈挂风格哈哈返回"
          rules={[{ required: true, message: '这是必填项' }]}
          colProps={{
            span: 8,
          }}
        />
        <ProFormText
          width="md"
          name="name"
          required
          label="对应PD:"
          tooltip="最长为 24 位"
          placeholder="请输入名称往后鞥股份嘎嘎嘎盖尔发货哈挂风格哈哈返回"
          rules={[{ required: true, message: '这是必填项' }]}
          colProps={{
            span: 8,
          }}
        />
        <ProFormRadio.Group
          name="radio"
          label="是否存在APP端入口:"
          options={[
            {
              label: '是',
              value: 'true',
            },
            {
              label: '否',
              value: 'false',
            },
          ]}
          colProps={{
            span: 8,
          }}
        />

        <ProFormCascader
          width="md"
          request={async () => [
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                  children: [
                    {
                      value: 'xihu',
                      label: 'West Lake',
                    },
                  ],
                },
              ],
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: 'Zhong Hua Men',
                    },
                  ],
                },
              ],
            },
          ]}
          name="area"
          label="区域:"
          initialValue={['zhejiang', 'hangzhou', 'xihu']}
          colProps={{ span: 8 }}
        />
        <ProFormTextArea colProps={{ span: 16 }} name="address" label="详细的工作地址或家庭住址" />
        <ProFormTextArea colProps={{ span: 16 }} name="address" label="详细的工作地址或家庭住址" />

        <ProForm.Group title="ceshi">
          <ProFormSelect
            label="职位:"
            name="level"
            valueEnum={{
              1: 'front end',
              2: 'back end',
              3: 'full stack',
            }}
            colProps={{
              span: 8,
            }}
          />
        </ProForm.Group>
      </ProForm>
    </div>
  );
}
