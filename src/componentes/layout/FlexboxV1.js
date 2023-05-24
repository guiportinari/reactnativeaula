import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";
export default props => {
   const lado = 50
    return (
    <View style={styles.FlexV1}>
    <Quadrado cor='#0e1463'/>
    <Quadrado cor='#836FFF'/>
    <Quadrado cor='#271ed6'/>
    <Quadrado cor='#ebc3c0'/>
    <Quadrado cor='#290e63'/>
    </View>
    

    )
}

const styles = StyleSheet.create({
FlexV1: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#000'
}
})