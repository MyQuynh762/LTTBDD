import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
const LayOut2a =()=>{
  const [text,onChangeText]= React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
return (

 
  
  <SafeAreaView style={styles.v1}>
    <text style={styles.txt1} >LOGIN</text>
    
     <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={Text}
      placeholder="NAME " 
      
    />
    
   
    <TextInput
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder="PASSWORD "
      keyboardType="numeric"
    />
    <button style={styles.bt}>LOGIN</button>
    <text style={styles.txt2}>CREATE ACCOUNT </text>
 
  </SafeAreaView>
  
);
};

  

const styles = StyleSheet.create({
   v1:{
    flex: 1,
    backgroundColor:'yellow',
    
    

   },
   txt1:{
    fontSize: 50,
    paddingBottom: 50,
    paddingTop:100,
    
   },
  txt2 :{
    textAlign:'center',
    paddingTop:30,
    
    

   },
    input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor:'#ecec65',
    
  },
  bt:{
    height: 40,
    margin: 12,
    backgroundColor:'black',
    color:'white',
    

  },
  
});

export default LayOut2a;