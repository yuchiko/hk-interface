import Banner from './Banner'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, Banner)
    }
}

use(Plugin)

export default Plugin

export {
    Banner as HkBanner
}