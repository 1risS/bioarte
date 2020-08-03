// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from "react-360-web"

function init(bundle, parent, options = {}) {
  // Add custom options here
  const SIZE = 300

  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  })

  r360.renderToSurface(
    r360.createRoot("vr_project", {
      /* initial props */
    }),
    r360.getDefaultSurface()
  )

  r360.renderToLocation(r360.createRoot("Corona"), r360.getDefaultLocation())

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("hall_of_finfish.jpg"))
}

window.React360 = { init }
