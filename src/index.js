import Index from './components/index'
import Form from './components/form'
import FormItem from './components/form-item'
import Table from './components/table'
import 'element-ui/lib/theme-default/index.css'

const components = [
  Index,
  Form,
  Table,
  FormItem
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default install
