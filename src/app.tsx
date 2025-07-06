import { type Signal, component$, createContextId, useContextProvider, useSignal, useTask$ } from '@builder.io/qwik'
import viteLogo from '/vite.svg'
import qwikLogo from './assets/qwik.svg'
import { Nav } from './features/nav/Nav'

export const isPortraitContext = createContextId<Signal<Boolean>>('isPortraitContext')

export const App = component$(() => {
	const count = useSignal(0)

	const isPortrait = useSignal(window.matchMedia('(orientation: portrait)').matches)
	useContextProvider(isPortraitContext, isPortrait)

	useTask$(({ track }) => {
		track(() => isPortrait.value)

		const handler = () => {
			isPortrait.value = window.matchMedia('(orientation: portrait)').matches
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', handler)
			return () => window.removeEventListener('resize', handler)
		}
	})

	return (
		<>
			<h1>Vite + Qwik</h1>
			<Nav />
		</>
	)
})
