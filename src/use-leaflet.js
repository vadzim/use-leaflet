// @flow
import { useContext, type Context } from "react"
import { LeafletConsumer, type LeafletContext } from "react-leaflet"

// eslint-disable-next-line no-underscore-dangle
const leafletContext: Context<LeafletContext> = (LeafletConsumer: any)._context

/**
 * React hook for react-leaflet. Returns the same value as withLeaflet HOC from the react-lealfet module.
 * @returns {LeafletContext} LeafletContext.
 */
export const useLeaflet = (): LeafletContext => useContext(leafletContext)
