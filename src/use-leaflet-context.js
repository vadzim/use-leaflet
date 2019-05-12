// @flow
import { useContext, type Context } from "react"
import { LeafletConsumer, type LeafletContext } from "react-leaflet"

// eslint-disable-next-line no-underscore-dangle
const leafletContext: Context<LeafletContext> = (LeafletConsumer: any)._context

// internal hook
export const useLeafletContext = (): LeafletContext => useContext(leafletContext)
