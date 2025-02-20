import {SafeAreaView, Text, View, StyleSheet, Image ,TextInput,Button,Alert} from 'react-native';
import React , {useState , useEffect} from 'react';



export default function Login({navigation}) {
 
  const [user,setUser]=useState('');
  const [password,setPassword]=useState('')
  const [req,setReq]=useState('Username');
  const [isUserFocused, setIsUserFocused] = useState(false); 
  const [isPasswordFocused, setIsPasswordFocused] = useState(false); 
   
const handleSubmite=()=>{
 if(user && password){
   navigation.replace('Dashboard');
 }
 else{
   Alert.alert('please inpute you credentials ');
 }
}

 

  useEffect(()=>{
   if (user === ''){
     setReq('Username');
   }
    else if(user !=='User') 
    {
      setReq('password');
    }
      
    
  },[user]);


  return (
    <SafeAreaView style={styles.container}>
      <Image 
       style={styles.logo} 
      source={{uri:'https://media.geeksforgeeks.org/wp-content/uploads/20230816223829/geeksgforgeeks-logo-1.png'}}/>
      <Text style={styles.paragraph}>
         Hello {user} please insert your {req} 
      </Text>

       <TextInput
            style={styles.textInput}
            onChangeText={setUser}
            value={user}
            placeholder={req}
            onFocus={() => setIsUserFocused(true)} // When the input is focused
        onBlur={() => setIsUserFocused(false)} // When the input loses focus
        placeholderTextColor={isUserFocused ? 'black' : 'lightgrey'} 
          />
      <TextInput
            style={styles.textInput}
            onChangeText={setPassword}
            value={password}
            placeholder={'Password '}
            secureTextEntry={true}
            onFocus={() => setIsPasswordFocused(true)} // When the input is focused
            onBlur={() => setIsPasswordFocused(false)} // When the input loses focus
           placeholderTextColor={isPasswordFocused ? 'black' : 'lightgrey'}
          />

          <Button
          title="Log in"
          onPress={handleSubmite}
          style={styles.button}
        />
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'grey',
    padding: 24,
  },
  paragraph: {
    marginTop:10,
    fontFamily:'sanserif ,robot',
    color:'white',
  },
  logo: {
    width:100,
    height:50,
    borderRadius:10,
  },
  textInput:{
    textAlign:'center',
    margin:15,
    backgroundColor:'white',
    paddingHorizontal:50,
    paddingVertical:15,
    borderRadius:5,
    width:"80%",
  },
  button:{
    paddingLeft:100,
    borderRadius:10,
  }
});
