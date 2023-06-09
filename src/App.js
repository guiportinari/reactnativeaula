import React from "react"
import {Text, View, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import Primeiro from './componentes/Primeiro'
// import Of, {Comp1, Comp2} from './componentes/MultiplosComponentes'
// import MinMax from "./componentes/MinMax"
// import Aleatorio from "./componentes/Aleatorio"
// import Titulo from "./componentes/Titulo"
// import Botao from "./componentes/Botao"
// import Contador from "./componentes/Contador"
//import AtividadeDiaDaSemana from "./componentes/AtividadeDiaDaSemana"
// import Pai from "./componentes/direta/Pai"
// import ContadorV2 from "./componentes/contador/ContadorV2"
// import HomeScreen from "./componentes/HomeScreen"
// import DetailsScreen from "./componentes/DetailsScreen"
import Familia from "./componentes/relacao/Familia"
import Membro from "./componentes/relacao/Membro"
import { SafeAreaView } from "react-native-safe-area-context"
import ListaProdutoV2 from "./componentes/produto/ListaProdutoV2"
import Quadrado from "./componentes/layout/Quadrado"
import FlexboxV1 from "./componentes/layout/FlexboxV1"
import FlexboxV2 from "./componentes/layout/FlexboxV2"
import FlexboxV3 from "./componentes/layout/FlexboxV3"
const Stack = createNativeStackNavigator()
export default () => (
  <SafeAreaView style={styles.TelaIniciante}>
   
   <FlexboxV3/>


   </SafeAreaView> 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //Comentarios
  
  
  /* < ListaProdutoV2/> */
  //  <Familia>
  //   <Membro nome="Jorge" sobrenome="Pereiras"/>
  //   <Membro nome="Edinaldo" sobrenome="Pereiras"/>
  //   <Membro nome="Marcinho" sobrenome="Pereiras"/>
  //   <Membro nome="Roberta" sobrenome="Pereiras"/>
  //  </Familia>
  //     <Familia>
  //     <Membro nome="Lucas" sobrenome="Da Silva"/>
  //     <Membro nome="Fernando" sobrenome="Da Silva"/>
  //     <Membro nome="Jorge" sobrenome="Da Silva"/>
  //     <Membro nome="Marcia" sobrenome="Da Silva"/>
      
  //     </Familia> 
    // <NavigationContainer>
    //         <Stack.Navigator>
    //             <Stack.Screen name="Home" component={HomeScreen}/>
    //             <Stack.Screen name="Details" component={DetailsScreen}/>
    //         </Stack.Navigator>
    //     </NavigationContainer>
      
      //<ContadorV2/> 
      /*<Pai/>
      
      <Pai/>
      <AtividadeDiaDaSemana />
      <Contador inicial={100}/>
      <Botao/>
      <Titulo principal="Cadastro Produto"
              secundario="Tela de Cadastro"/>
         <Primeiro/>
        <Text>1 + 2</Text>
        <Text>O valor da soma de 1 + 2 = {1+2}</Text>
        <Comp1/>
        <Comp2/>
        <Of/> 
        <MinMax min="3" max="20"/>
        <MinMax min="5" max="40"/>
        <MinMax min="7" max="55"/>
        <Aleatorio miny={1} maxx={100} />*/
)
    



// export default App

const styles = StyleSheet.create({
    TelaIniciante: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})



//lista de comentarios





// function App(){
//     const jsx = <Text>Kaua Henrique</Text>
//     return jsx
// }

// const App = function () {
//     return <Text>Component 2</Text>
// }

// export default function(){
//     return <Text>Component 3</Text>
// }

// export default () => {
//     return <Text>Component 4</Text>
// }
