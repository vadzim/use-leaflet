// @flow

import React, { useEffect } from "react"
import { renderIntoDocument, act } from "react-dom/test-utils"
import { Map } from "react-leaflet"
import { useLeaflet } from "../src/use-leaflet"

declare var test: Function
declare var expect: Function

test("useLeaflet", () => {
	let mapRef
	const UseLeaflet = () => {
		const { map } = useLeaflet()
		useEffect(() => {
			mapRef = map
		})
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
