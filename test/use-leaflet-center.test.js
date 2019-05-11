// @flow

import React from "react"
import ReactDOM from "react-dom"
import { Map } from "react-leaflet"
import { useLeafletCenter } from "../src/use-leaflet-center"

declare var describe: Function
declare var it: Function
declare var expect: Function

describe("useLeaflet", () => {
	let center

	const UseLeafletCenter = () => {
		center = useLeafletCenter()
		return <></>
	}

	const div = global.document.createElement("div")

	it("should return zeroed center without leaflet", () => {
		ReactDOM.render(<UseLeafletCenter />, div)
		expect(center).toEqual([0, 0])
	})

	it("should return initial center", () => {
		ReactDOM.render(
			<Map center={[1.2, 3.4]} zoom={10}>
				<UseLeafletCenter />
			</Map>,
			div,
		)

		expect(center).toEqual([1.2, 3.4])
	})

	it("should react on center change", () => {
		ReactDOM.render(
			<Map center={[5.6, 7.8]} zoom={10}>
				<UseLeafletCenter />
			</Map>,
			div,
		)
		expect(center).toEqual([5.6, 7.8])
	})

	it("should not react after unmount", () => {
		ReactDOM.render(
			<Map center={[9.0, 10.0]} zoom={10}>
				{null}
			</Map>,
			div,
		)
		expect(center).toEqual([5.6, 7.8])
	})
})
