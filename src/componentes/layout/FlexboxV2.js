import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";
export default props => {
   const lado = 50
    return (
    <View style={styles.FlexV2}>
    <Quadrado cor='#0e1463'/>
    <Quadrado cor='#836FFF'/>
    <Quadrado cor='#271ed6'/>
    <Quadrado cor='#ebc3c0'/>
    <Quadrado cor='#290e63'/>
    </View>
    

    )
}

const styles = StyleSheet.create({
FlexV2: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#000'
}
})