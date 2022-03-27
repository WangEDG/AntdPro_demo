// import React from 'react';
import { StepsForm, ProFormText } from '@ant-design/pro-form';
import { Modal } from 'antd';

export type FormValueType = {
  name?: string;
  originalSound?: string;
  physical?: number;
  time?: string;
  frequency?: string;
} & Partial<API.RuleListItem>;
interface UpdateFormProps {
  configModalVisible: boolean;
  onCancel: () => void;
}
export default function UpdateForm(props: UpdateFormProps) {
  const { configModalVisible } = props;

  const onFinish = (values: FormValueType): void => {
    console.log(values);
  };
  return (
    <StepsForm
      stepsProps={{
        size: 'small',
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={640}
            bodyStyle={{ padding: '32px 40px 48px' }}
            destroyOnClose={true}
            title="配置规则"
            // 模态框的footer 会将参数submitter 渲染在模态框的footer位置
            footer={submitter}
            visible={configModalVisible}
            // Modal关必的回调
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={(values: FormValueType): any => {
        onFinish(values);
      }}
    >
      <StepsForm.StepForm title="基本信息">
        <ProFormText
          name="name"
          label="规则编号"
          width="md"
          rules={[{ required: true, message: '规则名称为必填项' }]}
        />
      </StepsForm.StepForm>

      <StepsForm.StepForm title="配置规则属性">
        <ProFormText
          name="originalSound"
          label="舆情/客诉原声"
          width="md"
          rules={[{ required: true, message: '舆情/客诉原声为必填项' }]}
        />
      </StepsForm.StepForm>

      <StepsForm.StepForm title="设置调度周期">
        <ProFormText
          name="physical"
          label="舆情/客诉的实际情况"
          width="md"
          rules={[{ required: true, message: '舆情/客诉的实际情况为必填项' }]}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
}
