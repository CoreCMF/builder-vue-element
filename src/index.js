import Index from './components/index'
import Form from './components/form'
import 'element-ui/lib/theme-default/index.css'

const components = [
  Index,
  Form
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component('bve-'+component.name, component)
  })
}

export default install
