// @flow

import React from "react"
import { renderIntoDocument, act } from "react-dom/test-utils"
import { Map } from "react-leaflet"
import { useLeafletContext } from "../src/use-leaflet-context"

declare var test: Function
declare var expect: Function

test("useLeafletContext", () => {
	let mapRef
	const UseLeaflet = () => {
		const { map } = useLeafletContext()
		mapRef = map
		return <></>
	}
	const map = renderIntoDocument(
		<Map>
			<UseLeaflet />
		</Map>,
	)
	act(() => {})
	expect((map: any).leafletElement).toBe(mapRef)
})
