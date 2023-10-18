import React, { useState } from 'react';
import {SafeAreaView, StyleSheet,Text, TextInput,Pressable, Image} from 'react-native';
import { View } from 'react-native-web';
const LayOut2a =()=>{

  var [name, setName] = useState("");
  var [pass, setPass] = useState("");
  var data = [{ name: "quynh", pass: "172" }];

const ClickButton =()=>{
   const user = data.find((user) => user.name == name && user.pass == pass);
    if (user) {
      alert("Login thành công!");
 
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
    }
  };


return (
  <View style={styles.container}>
   
    <Text style={styles.txt1}>LOGIN</Text>
  
    <View style={styles.v1}>
 

    
    <Image source={require("./assets/avatar.png")} style={styles.img}></Image>
     <TextInput
       style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="NAME"
    />

       </View>

       <View style={styles.v1}>
       <Image source={require("./assets/lock.png")} style={styles.img}></Image>
       <TextInput
       style={styles.input}
          value={pass}
          onChangeText={(text) => setPass(text)}
          placeholder="PASSWORD"
      
    />
       <Image source={require("./assets/eye.png")} style={styles.imgeye}></Image>

   
       </View>

       <Pressable style={styles.btn} onPress={ClickButton}>
        <Text style={styles.txtLogin}>LOGIN</Text>
      </Pressable>
    <text style={styles.txt2}>CREATE ACCOUNT </text>

  </View>


  
);
};

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'yellow',
  },
   v1:{
    flexDirection: "row"

   },
   txt1:{
    fontSize: 50,
    paddingBottom: 50,
    marginRight: 200
  
    
    
    
   },
  txt2 :{
    textAlign:'center',
    paddingTop:30,
  

    
    

   },
   img:{
    width: 25,
    height: 25,
    position: "absolute",
    marginTop: 20,
    marginLeft: 10,
  
  },
  imgeye:{
    marginLeft: 300,
    width: 25,
    height: 25,
    position: "absolute",
    marginTop: 20,
  
  },
    input: {
    height: 50,
    width:320,
    margin: 12,
    padding: 10,
    backgroundColor:'#ecec65',
    paddingLeft: 50,
    
  },
  btn:{
    height: 40,
    width:330,
    margin: 12,
    backgroundColor:'black',
    color:'white',
    

  },
  txtLogin:{
    color:'white',
    textAlign:'center',
    marginTop:10,
  }
  
});

export default LayOut2a;