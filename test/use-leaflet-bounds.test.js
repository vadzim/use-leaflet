// @flow

import React from "react"
import ReactDOM from "react-dom"
import { Map } from "react-leaflet"
import { useLeafletBounds } from "../src/use-leaflet-bounds"

declare var describe: Function
declare var it: Function
declare var expect: Function

describe("useLeafletBounds", () => {
	let bounds

	const UseLeafletBounds = () => {
		bounds = useLeafletBounds()
		return <></>
	}

	const div = global.document.createElement("div")

	it("should return empty bounds without leaflet", () => {
		ReactDOM.render(<UseLeafletBounds />, div)
		expect(bounds).toEqual([[Infinity, Infinity], [-Infinity, -Infinity]])
	})

	it("should return initial bounds", () => {
		ReactDOM.render(
			<Map bounds={[[60.0, 24.0], [61.0, 26.0]]} style={{ width: "100px", height: "100px" }}>
				<UseLeafletBounds />
			</Map>,
			div,
		)

		expect(bounds).toEqual([[60.23981116999893, 25.312500000000004], [60.23981116999893, 25.312500000000004]])
	})

	it("should react on bounds change", () => {
		ReactDOM.render(
			<Map bounds={[[62.0, 27.0], [63.0, 28.0]]} style={{ width: "100px", height: "100px" }}>
				<UseLeafletBounds />
			</Map>,
			div,
		)
		expect(bounds).toEqual([[62.2679226294176, 28.125000000000004], [62.2679226294176, 28.125000000000004]])
	})

	it("should not react after unmount", () => {
		ReactDOM.render(
			<Map bounds={[[42.0, 37.0], [43.0, 38.0]]} style={{ width: "100px", height: "100px" }}>
				{null}
			</Map>,
			div,
		)
		expect(bounds).toEqual([[62.2679226294176, 28.125000000000004], [62.2679226294176, 28.125000000000004]])
	})
})
