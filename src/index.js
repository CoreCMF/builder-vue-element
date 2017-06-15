import Index from './components/index'
import Form from './components/form'

import FormItem from './components/form-item'
import FormItemText from './components/form-item-text'
import FormItemCheckbox from './components/form-item-checkbox'
import FormItemSwitch from './components/form-item-switch'
import FormItemNumber from './components/form-item-number'
import FormItemTextarea from './components/form-item-textarea'
import FormItemHidden from './components/form-item-hidden'

import Table from './components/table'

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

  Table,
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default install
