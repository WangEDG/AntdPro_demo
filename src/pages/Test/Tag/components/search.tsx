import React, { useState } from 'react';
// import {
//   ModalForm,
//   ProFormText,
//   ProFormDatePicker,
//   ProFormUploadButton,
// } from '@ant-design/pro-form';
import { Button, Modal, message } from 'antd';

// const waitTime = (time: number = 100) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, time);
//   });
// };

// export default function CollectForm() {
//   return (
//     <ModalForm
//       width={500}
//       title="收藏搜索项"
//       trigger={<Button>收藏搜索</Button>}
//       submitter={{
//         render: (props, defaultDoms) => {
//           console.log(defaultDoms);
//           console.log(props);

//           return [
//             // ...defaultDoms,
//             <Button
//               key="cancel"
//               onClick={() => {
//                 props.reset();
//               }}
//             >
//               取消搜索
//             </Button>,
//             <Button
//               type="primary"
//               key="ok"
//               onClick={() => {
//                 props.submit();
//               }}
//             >
//               新建搜索
//             </Button>,
//           ];
//         },
//       }}
//       onFinish={async (values) => {
//         await waitTime(2000);
//         console.log(values);
//         message.success('提交成功');
//         return true;
//       }}
//       labelAlign="left"
//       labelCol={{ flex: '110px' }}
//       //   labelCol={{ span: 8 }}
//       //   wrapperCol={{ span: 16 }}
//       layout="horizontal"
//     >
//       <ProFormText
//         width="md"
//         name="name"
//         label="搜索集名称"
//         placeholder="请输入名称"
//         rules={[{ required: true, message: '搜索集名称为必填项' }]}
//       />
//       <ProFormDatePicker name="date" label="创建日期" />

//       <ProFormUploadButton
//         name="upload"
//         label="文件上传"
//         max={2}
//         fieldProps={{
//           name: 'file',
//           listType: 'picture-card',
//         }}
//         action="/upload.do"
//         extra="longgggggggggggggggggggggggggggggggggg"
//       />

//       <ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称" />
//     </ModalForm>
//   );
// }
interface Props {
  style: any;
  collectSearch: () => any[];
  triggerSearch: (formValue: any) => void;
  formRef: any;
}
export default function Search(props: Props) {
  const { style, collectSearch, triggerSearch, formRef } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState<any[]>([]);

  console.log('刷新');

  const handleOk = () => {
    const formValue = {};
    formData.forEach((item) => {
      formValue[item.key] = item.value;
    });

    triggerSearch(formValue);
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const searchBtn = () => {
    const formValue = collectSearch();
    if (formValue.length === 0) {
      message.error('请先填写搜索项');
    } else {
      setFormData(formValue);
      setIsModalVisible(true);
    }
  };
  const renderValue = (dataArr: any[]) => {
    const Dom = dataArr.map((item) => {
      return (
        <div key={item.label}>
          <span>{item.label}:</span> &nbsp;
          <span>{item.showValue}</span>
        </div>
      );
    });
    return Dom;
  };
  return (
    <div style={style}>
      <Button onClick={searchBtn}>收藏搜索</Button>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {isModalVisible && renderValue(formData)}
      </Modal>
    </div>
  );
}
