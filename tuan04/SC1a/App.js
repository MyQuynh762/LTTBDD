import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Image,Text} from 'react-native';
const LayOut1a =()=>{
  const [text,onChangeText]= React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  

 
return (

 
  
  <View style={styles.v1}>

     <Image
        source={require("./assets/Ellipse 8.png")}
        style={styles.img}
      ></Image>
      
    <b style={styles.txt} >GROW <br/>
    YOUR BUSSINESS</b>
    <b style={styles.txt1}>We will help you to grow your business using online server</b>
    <View style={styles.v2}>
    <button style={styles.bt1}><b>LOGIN</b></button>
    <button style={styles.bt2}><b>SIGN UP</b></button>

   
    </View>
    <b style={styles.t2}>HOW WE WORK ?</b>

    
  </View>
 
  
);
};

  

const styles = StyleSheet.create({
   v1:{
    backgroundColor:'#CCFFFF',
    alignItems: 'center'
    
    

   },
   v2:{
    
    flexDirection:'row',
    justifyContent: 'space-around',
    
   },
   img:{
    height: 140,
    width: 140,
    marginTop:70,
   },
   txt:{
    fontSize: 20,
    fontFamily: 'Time New Roman',
    marginTop: 20,
    textAlign: 'center',
   },
   txt1:{
    marginTop: 20,
    textAlign: 'center',


   },
   bt1:{
    height: 50,
    width:140,
    backgroundColor:'yellow',
    borderColor:'white',
    marginTop:40,
    borderRadius:'5px',
    marginRight:50,



   },
   bt2:{
    height: 50,
    width:140,
    backgroundColor:'yellow',
    borderColor:'white',
    marginTop:40,
    borderRadius:'5px',
    marginLeft:30,



   },
   t2:{
    marginTop: 30,

   }
   
 
  
});

export default LayOut1a;