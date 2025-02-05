import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid, ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p2 md:p-10 bg-white rounded-xl'>
      <Header category="Page" title = "Employees" />
      <GridComponent
      id='gridComp'
      dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key = {index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services = {[Page, Search, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees