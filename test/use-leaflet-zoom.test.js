// @flow

import React from "react"
import ReactDOM from "react-dom"
import { Map } from "react-leaflet"
import { useLeafletZoom } from "../src/use-leaflet-zoom"

declare var describe: Function
declare var it: Function
declare var expect: Function

describe("useLeafletZoom", () => {
	let zoom = -1

	const UseLeafletZoom = () => {
		zoom = useLeafletZoom()
		return <></>
	}

	const div = global.document.createElement("div")

	it("should return 0 without leaflet", () => {
		ReactDOM.render(<UseLeafletZoom />, div)
		expect(zoom).toBe(0)
	})

	it("should return initial zoom", () => {
		ReactDOM.render(
			<Map center={[1.2, 3.4]} zoom={10}>
				<UseLeafletZoom />
			</Map>,
			div,
		)
		expect(zoom).toBe(10)
	})

	it("should react on zoom change", () => {
		ReactDOM.render(
			<Map center={[1.2, 3.4]} zoom={12}>
				<UseLeafletZoom />
			</Map>,
			div,
		)
		expect(zoom).toBe(12)
	})

	it("should not react after unmount", () => {
		ReactDOM.render(
			<Map center={[1.2, 3.4]} zoom={14}>
				{null}
			</Map>,
			div,
		)
		expect(zoom).toBe(12)
	})
})
