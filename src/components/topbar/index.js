import Topbar from './Topbar'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
    install(Vue) {
        registerComponent(Vue, Topbar)
    }
}

use(Plugin)

export default Plugin

export {
    Topbar as HkTopbar
}