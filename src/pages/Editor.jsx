import React from 'react'
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { EditorData } from '../data/dummy';
import { Header } from '../components';

const Editor = () => {
  return (
    <div className='m-1 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <header category = "App" title = "Kanban" />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services = {[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor