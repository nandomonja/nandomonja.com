import Vue from 'vue'

import UiButton from '@/ui/button.vue'
import UiApp from '@/ui/app.vue'
import UiIcon from '@/ui/icon.vue'
import UiToolbar from '@/ui/toolbar.vue'

const components = { UiButton, UiApp, UiIcon, UiToolbar }

Object.entries(components).forEach(([name, component]) => {
	Vue.component(name, component)
})
