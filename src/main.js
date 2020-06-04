import * as components from './components'
import { use } from './utils/plugins';

const HkInterface = {
    install(Vue) {
        // Components
        for (let componentKey in components) {
            Vue.use(components[componentKey])
        }        
    }
}

use(HkInterface)

export default HkInterface

// export all components as vue plugin
export * from './components'