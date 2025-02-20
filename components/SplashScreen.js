import { Text, View, StyleSheet, Image } from 'react-native';
import React , {useEffect} from 'react';

export default function SplashScreen({navigation}) {

useEffect(()=>{
  setTimeout(()=>{
    navigation.replace('Login');
  },3000)
},[navigation]);
  
  return (
    <View style={styles.container}>
     <View style={styles.container}>
      <Image 
        style={styles.logo} 
        source={{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20230816223829/geeksgforgeeks-logo-1.png' }} 
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Change this to match your theme
  },
  logo: {
    width: 200, 
    height: 100, 
    resizeMode: 'contain',
  },
});