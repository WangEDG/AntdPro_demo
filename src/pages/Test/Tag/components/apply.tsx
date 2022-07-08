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

  // const initFrom = (values: any) => {
  //   const fzr = values.fzr;
  //   console.log(fzr);

  //   const reg = /(?:\()\w+(?:\))/g;
  //   // const reg = /\([^\)]+\)/g;
  //   const result = fzr.match(reg);
  //   //["(AAA)", "(CCC)", "(BBB)"]

  //   // const reg = /\([^\)]+\)/g;
  //   // const result = values.fzr.match(reg)[0];
  //   console.log('result', result);

  //   const language = 'Chinese (Simplified, China) (中文(中国)) (zh-CN)';

  //   const re = /\（(.+?)\）/gi; // 匹配小括号正则

  //   // 输出了一个数组
  //   console.log(fzr.match(re)); // ["(Simplified, China)", "(中文(中国)", "(zh-CN)"]
  //   console.log(fzr.match(re)[0].replace(/^\(/, '')); // ["(Simplified, China)", "(中文(中国)", "(zh-CN)"]
  //   // console.log(language.match(re)[1].replace(/^\(/, '')); // 中文(中国)

  //   // let str = '阿里巴巴(中国)网络技术有限公司深圳办事处'; //字符串
  //   const keyword = '阿里巴巴(中国)网络技术有限公司'; //关键词
  //   const regT = keyword.replace(/\(/g, '\\(').replace(/\)/g, '\\)'); //针对搜索关键词中有括号的情况，先将括号转换成正则能识别的字符串
  //   console.log(regT);

  //   // str = str.replace(new RegExp(regT, 'g'), '<i class="txtred">' + keyword + '</i>'); //将字符串中包括的关键词高亮显示

  //   const str = '这是一个字符串（html）语句;（html）字符串很常见';
  //   const newStr = str.replace(/\（/g, '/').replace(/\）/g, '');
  //   console.log(newStr);

  //   const jg = newStr.split('/');
  //   console.log(jg);

  //   const strT = '梁翊涛（liangyitao.lyt）';
  //   const regex = /\（/g;
  //   const flg = regex.test(strT);
  //   console.log(flg);
  // };
  const initFrom = (values: any) => {
    const regex = /\（/g;
    const fzr = values.fzr;
    console.log(fzr);

    if (regex.test(fzr)) {
      const newStrOne = fzr.replace(/\（/g, '/').replace(/\）/g, '').split('/')[0];
      const newStrTwo = fzr.replace(/\（/g, '/').replace(/\）/g, '').split('/')[1];
      console.log(newStrOne);
      console.log(newStrTwo);
    }

    // const reg = /(?:\()\w+(?:\))/g;
    // // const reg = /\([^\)]+\)/g;
    // const result = fzr.match(reg);
    // //["(AAA)", "(CCC)", "(BBB)"]

    // // const reg = /\([^\)]+\)/g;
    // // const result = values.fzr.match(reg)[0];
    // console.log('result', result);

    // const language = 'Chinese (Simplified, China) (中文(中国)) (zh-CN)';

    // const re = /\（(.+?)\）/gi; // 匹配小括号正则

    // // 输出了一个数组
    // console.log(fzr.match(re)); // ["(Simplified, China)", "(中文(中国)", "(zh-CN)"]
    // console.log(fzr.match(re)[0].replace(/^\(/, '')); // ["(Simplified, China)", "(中文(中国)", "(zh-CN)"]
    // // console.log(language.match(re)[1].replace(/^\(/, '')); // 中文(中国)

    // // let str = '阿里巴巴(中国)网络技术有限公司深圳办事处'; //字符串
    // const keyword = '阿里巴巴(中国)网络技术有限公司'; //关键词
    // const regT = keyword.replace(/\(/g, '\\(').replace(/\)/g, '\\)'); //针对搜索关键词中有括号的情况，先将括号转换成正则能识别的字符串
    // console.log(regT);

    // // str = str.replace(new RegExp(regT, 'g'), '<i class="txtred">' + keyword + '</i>'); //将字符串中包括的关键词高亮显示

    // const str = '这是一个字符串（html）语句;（html）字符串很常见';
    // const newStr = str.replace(/\（/g, '/').replace(/\）/g, '');
    // console.log(newStr);

    // const jg = newStr.split('/');
    // console.log(jg);

    // const strT = '梁翊涛（liangyitao.lyt）';
    // const regex = /\（/g;
    // const flg = regex.test(strT);
    // console.log(flg);
  };

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
        initialValues={{
          name: '蚂蚁森林',
          fzr: ' 梁翊涛（liangyitao.lyt）',
        }}
        onValuesChange={(changeValues) => console.log(changeValues)}
        onFinish={async (values) => {
          initFrom(values);
        }}
      >
        <ProFormText
          width="md"
          name="name"
          required
          label="客诉:"
          tooltip="最长为 24 位"
          placeholder="请输入名称往后鞥股份嘎嘎嘎盖尔发货哈挂风格哈哈返回"
          // rules={[{ required: true, message: '这是必填项' }]}
          colProps={{
            span: 8,
          }}
        />
        <ProFormSelect
          label="负责人员:"
          name="fzr"
          valueEnum={{
            1: '小王',
            2: '小刘',
            3: '小李',
          }}
          // showSearch //开启搜索
          // fieldProps={{
          //   mode: 'multiple', //多选
          //   autoClearSearchValue: true, //选中后清空搜索框
          //   onChange: (value) => {
          //     return value; //必须要return一个值出去 表单项才会展示值在输入框上
          //   },
          //   // onBlur
          // }}
          // request={fn}
          colProps={{ span: 8 }}
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
        <ProFormText
          width="md"
          name="js"
          label="对应技术:"
          tooltip="最长为 24 位"
          placeholder="请输入名称往后鞥股份嘎嘎嘎盖尔发货哈挂风格哈哈返回"
          // rules={[{ required: true, message: '这是必填项' }]}
          colProps={{
            span: 8,
          }}
        />
        <ProFormText
          width="md"
          name="yy"
          label="对应运营:"
          tooltip="最长为 24 位"
          placeholder="请输入名称往后鞥股份嘎嘎嘎盖尔发货哈挂风格哈哈返回"
          // rules={[{ required: true, message: '这是必填项' }]}
          colProps={{
            span: 8,
          }}
        />
        <ProFormText
          width="md"
          name="pd"
          label="对应PD:"
          tooltip="最长为 24 位"
          placeholder="请输入名称往后鞥股份嘎嘎嘎盖尔发货哈挂风格哈哈返回"
          // rules={[{ required: true, message: '这是必填项' }]}
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
          // initialValue={['zhejiang', 'hangzhou', 'xihu']}
          colProps={{ span: 8 }}
        />
        <ProFormTextArea colProps={{ span: 16 }} name="address" label="详细的工作地址或家庭住址" />
        <ProFormTextArea colProps={{ span: 16 }} name="address" label="详细的工作地址或家庭住址" />

        <ProForm.Group>
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
