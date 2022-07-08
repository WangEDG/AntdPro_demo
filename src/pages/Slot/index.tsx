import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Children from './children';

export default function Slot() {
  const renderNode = (): React.ReactNode => {
    return <h1>这是h1标签,这是在父组件中定义的dome结构</h1>;
  };
  return (
    <PageContainer>
      <div>
        父组件
        <Children renderNode={renderNode} />
      </div>
    </PageContainer>
  );
}
