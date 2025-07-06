import { component$, useContext } from '@builder.io/qwik'
import { isPortraitContext } from '~/app'

export const Nav = component$(() => {
	const isPortrait = useContext(isPortraitContext)

	return (
		<div>{JSON.stringify(isPortrait.value)}</div>
	)
})
