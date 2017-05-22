import Index from './components/index'
const components = [
  Index
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component('Bve-'+component.name, component)
  })
}

export default install
