// import React from 'react';

import moment from "moment";

interface Props {
  renderNode: () => any;
}
export default function Children(props: Props) {
  const { renderNode } = props;
  // 对某个标准时间进行处理
  const date = new Date("2022-04-18T16:34:45+09:21");
  console.log(date);
  const flg = moment.isMoment("2022-04-18T16:34:45+09:21");
  console.log(flg);


  return (
    <div>
      子组件 如果想实现插槽的效果,可以在父组件定义一个函数,函数返回ReactNode,在子组件调用
      {renderNode()}
    </div>
  );
}
