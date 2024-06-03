import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Selection, Filter, Resize, Sort, ContextMenu, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
const Customers = () => {
  return (
    <div className='m-2 md:m-10 p2 md:p-10 bg-white rounded-xl'>
      <Header category="Page" title = "Customers" />
      <GridComponent
      id='gridComp'
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{allowDeleting: true, allowEditing: true}}
      width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key = {index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services = {[Page, Selection, Edit, Sort, Filter, Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Customers