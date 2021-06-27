import React from 'react'
import { Table } from 'antd'

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
      这是第二个版本
      <Table columns={columns} dataSource={[]}></Table>
    </div>
  )
}
