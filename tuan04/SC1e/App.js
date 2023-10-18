import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
const LayOut1e =()=>{
  const [text,onChangeText]= React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  

 
return (

 
  
  <SafeAreaView style={styles.v1}>
    <text style={styles.txt1} >REGISTER</text>
    
    <TextInput
        style={styles.input}
        placeholder='NAME'
       onChangeText={onChangeText}
      />
    
   
    <TextInput
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder='PHONE'

    />
      <TextInput
        style={styles.input}
        placeholder='EMAIL'
       onChangeText={onChangeText}
      />
       <TextInput
        style={styles.input}
        placeholder='PASSWORD'
       onChangeText={onChangeText}
      />
       <TextInput
      style={styles.input}
      onChangeText={onChangeNumber}
      value={number}
      placeholder='BIRTHDAY'

       
    />
    
  

    <button style={styles.bt}>REGISTER</button>
    <text style={styles.txt2}>When you agree to terms and conditions </text>

    
  </SafeAreaView>
 
  
);
};

  

const styles = StyleSheet.create({
   v1:{
    flex: 1,
    backgroundColor:'#CCFFFF',
    
    

   },
   txt1:{
    fontSize: 20,
    paddingBottom: 50,
    paddingTop:40,
    textAlign:'center',
    
   },
  txt2 :{
    textAlign:'center',
    paddingTop:30,
    
    

   },
    input: {
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor:'#EEEEEE',
    
  },
  bt:{
    height: 40,
    margin: 12,
    backgroundColor:'red',
    color:'white',
    

  },
  
});

export default LayOut1e;