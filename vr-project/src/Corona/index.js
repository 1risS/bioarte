import React, { PureComponent } from "react"
import { asset } from "react-360"
import Entity from "Entity"

export default class Corona extends PureComponent {
  render() {
    return (
      <Entity
        source={{
          gltf2: asset("corona.gltf"),
        }}
        style={{
          transform: [
            { scaleX: scale },
            { scaleY: scale },
            { scaleZ: scale },
            { translate: [-10, 0, -10] },
          ],
        }}
      />
    )
  }
}
