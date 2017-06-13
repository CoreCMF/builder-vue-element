import Index from './components/index'
import Form from './components/form'
import Table from './components/table'
import 'element-ui/lib/theme-default/index.css'

const components = [
  Index,
  Form,
  Table
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component('bve-'+component.name, component)
  })
}

export default install
