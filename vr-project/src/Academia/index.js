import React from "react"
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  VrButton,
  NativeModules,
} from "react-360"

function onclick() {
  NativeModules.LinkingManager.openURL("http://localhost:3000/academia")
}

export default class vr_project extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <VrButton onButtonPress={onclick}>
          <Text style={styles.backToReact}>DE VUELTA A REACT</Text>
        </VrButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
  test: {
    fontSize: 50,
    padding: 70,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
  },
  backToReact: {
    fontSize: 30,
  },
})
