import React from 'react'

const columns = [{
  title: '因子名称',
  dataIndex: 'factor_name',
},{
  title: '因子ID',
  dataIndex: 'factor_id',
},{
  title: '操作',
  dataIndex: 'action',
}];

export default function FactorListTable() {
  return (
    <div>
      <Table columns={columns} dataSource={[]}></Table>
    </div>
  )
}
