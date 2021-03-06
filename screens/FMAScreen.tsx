import * as React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function FMAScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground  style= { styles.backgroundImage } source= {require("../assets/images/APPFM.png")}>
        <Text style={styles.title}>FRANJA MORADA APP12341141241</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        {/* <EditScreenInfo path="/screens/FMAScreen.tsx" /> */}
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  backgroundImage:{
    flex: 1,
    resizeMode: 'center', // or 'sctreth'
    
    height: '80%' ,
          width: '100%'
    }
});
