// import { MenuOutlined } from '@ant-design/icons';
// import type { ProColumns } from '@ant-design/pro-components';
// import { ProTable } from '@ant-design/pro-components';
// import { message, Table } from 'antd';
// import { useRef, useState } from 'react';
// import { columns}

// export default function StageView() {

//   return (
//     <>
//       <ProTable
//       rowKey="index"
//       columns={columns}
//       actionRef={actionRef}
//       form={form}
//       pagination={{
//         pageSize: 10,
//       }}
//       dataSource={dataSource}
//       search={true}
//       request={async (params) => {
//         const res = await getRuleList(p, {
//           ...params,
//           orderByPriority: true,
//           current: 1,
//           pageSize: 10,
//           status: 3,
//         });
//         const list = res.data.list.map((item: any, index: number) => ({ ...item, index }));
//         setDataSource(list);
//         setDisableBtn(list[0].inPriorityAudit);
//         return {
//           data: list,
//           success: res?.success,
//           total: res?.data?.total,
//         };
//       }}
//       components={{
//         body: {
//           wrapper: DraggableContainer,
//           row: DraggableBodyRow,
//         },
//       }}
//       toolBarRender={() => [
//         <Button
//           onClick={() => setIsEdit(true)}
//           type="primary"
//           disabled={disableBtn}
//           style={{ display: isEdit ? 'none' : 'block' }}
//         >
//           编 辑
//         </Button>,

//         <Button
//           onClick={() => setIsEdit(false)}
//           type="primary"
//           style={{ display: isEdit ? 'block' : 'none' }}
//         >
//           取消编辑
//         </Button>,
//         <Popconfirm
//           title="确认提交审核吗？"
//           onConfirm={confirmSubmit}
//           okText="确认"
//           cancelText="取消"
//         >
//           <Button type="primary" disabled={!isEdit}>
//             提交审核
//           </Button>
//         </Popconfirm>,

//         <Popconfirm
//           title="是否审核通过"
//           onConfirm={async () => {
//             await client<any>(`审核通过接口`, {
//               method: 'put',
//               params: {},
//             }).then((res) => {
//               if (res?.success)
//                 notification.success({
//                   message: '审核完成',
//                 });
//             });
//             actionRef?.current?.reload();
//           }}
//           onCancel={async () => {
//             await client<any>(`审核失败接口`, {
//               method: 'put',
//               params: {},
//             }).then((res) => {
//               if (res?.success)
//                 notification.success({
//                   message: '审核完成',
//                 });
//             });
//             actionRef?.current?.reload();
//           }}
//           okText="通过"
//           cancelText="拒绝"
//         >
//           <Button type="primary" disabled={!disableBtn}>
//             审 核
//           </Button>
//         </Popconfirm>,
//       ]}
// />
//     </>
//   );
// }
