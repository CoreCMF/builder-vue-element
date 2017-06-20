import Index from './components/index'

import Form from './components/form'
import FormItem from './components/form-item'
import FormItemText from './components/form-item-text'
import FormItemCheckbox from './components/form-item-checkbox'
import FormItemSwitch from './components/form-item-switch'
import FormItemNumber from './components/form-item-number'
import FormItemTextarea from './components/form-item-textarea'
import FormItemHidden from './components/form-item-hidden'
import FormItemPassword from './components/form-item-password'
import FormItemTags from './components/form-item-tags'
import FormItemPicture from './components/form-item-picture'
import FormItemSelect from './components/form-item-select'

import Table from './components/table'
import TableItem from './components/table-item'
import TableItemState from './components/table-item-statu'
import TableItemScope from './components/table-item-scope'
import TableItemButton from './components/table-item-button'

import 'element-ui/lib/theme-default/index.css'

const components = [
  Index,

  Form,
  FormItem,
  FormItemText,
  FormItemCheckbox,
  FormItemSwitch,
  FormItemNumber,
  FormItemTextarea,
  FormItemHidden,
  FormItemPassword,
  FormItemTags,
  FormItemPicture,
  FormItemSelect,

  Table,
  TableItem,
  TableItemState,
  TableItemScope,
  TableItemButton,
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default install
