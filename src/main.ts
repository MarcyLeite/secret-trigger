import { createApp, getCurrentInstance } from 'vue'
import App from './App.vue'

import { createSecretTrigger } from './plugins/secret-trigger/index'

const app = createApp(App)

const secretTrigger = createSecretTrigger({
	easterEgg: {
		triggerMap: {
			konami: [
				'ArrowUp',
				'ArrowUp',
				'ArrowDown',
				'ArrowDown',
				'ArrowLeft',
				'ArrowRight',
				'ArrowLeft',
				'ArrowRight',
				'B',
				'A',
				'Enter'
			]
		}
	}
})

app.use(secretTrigger)
app.mount('#app')
