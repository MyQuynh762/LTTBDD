import React, { useState } from 'react';
import { Pressable, StyleSheet,Text, TextInput} from 'react-native';
import { Button, CheckBox, View } from 'react-native-web';
const App =()=>{
    const [isSelected, setSelection] = useState(true);
    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(true);
    const [isSelected3, setSelection3] = useState(false);

return (
  <View style={styles.container}>
    <View style={styles.txt1}>
        PASSWORD <br/>
        GENERATER 
    </View>
    <View style={styles.v1}>
        <TextInput style={styles.input} 
        placeholder=''>

        </TextInput>
    </View>
    <View style={styles.v1}>
    <Text style={styles.txt2}>Password Lenght</Text>
    <TextInput style={styles.input2} 
        placeholder=''>

        </TextInput>
        
        
    </View>
    <View style={styles.v1}>
    <Text style={styles.txt3}>Include Lower Case letter</Text>
    <CheckBox style={styles.cb1}
            value={isSelected}
            onValueChange={setSelection}
    ></CheckBox>  
    </View>

    <View style={styles.v1}>
    <Text style={styles.txt4}>Include UpCase letter</Text>
    <CheckBox style={styles.cb2}
            value={isSelected1}
            onValueChange={setSelection1}></CheckBox>  
    </View>

    <View style={styles.v1}>
    <Text style={styles.txt5}>Include Number</Text>
    <CheckBox style={styles.cb3}
            value={isSelected2}
            onValueChange={setSelection2}></CheckBox>  
    </View>

    <View style={styles.v1}>
    <Text style={styles.txt6}>Include Special Symbol</Text>
    <CheckBox style={styles.cb4}
            value={isSelected3}
            onValueChange={setSelection3}></CheckBox>  
    </View>

    <Pressable style={styles.btn} >
        <p style={styles.txtgen}>GENERATE PASSWORD</p>
      </Pressable>


  </View>
  
);
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'blue',
  },
   v1:{
    flexDirection: "row"

   },
   input:{
    height: 50,
    width:340,
    margin:10,
    padding:10,
    backgroundColor: '#000066',

   },
   input2:{
    height: 50,
    width:160,
    margin:10,
    padding:10,
    backgroundColor: '#000066',

   },
   txt2:{
    marginTop:30,
    fontFamily: 'arial',
    color: "white",
    marginRight:35,
    fontSize: 18,
   },
   txt3:{
    marginTop:30,
    fontFamily: 'arial',
    color: "white",
    marginRight:130,
    fontSize: 18,
    
   },
   txt4:{
    marginTop:30,
    fontFamily: 'arial',
    color: "white",
    marginRight:150,
    fontSize: 18,
    
   },
   txt5:{
    marginTop:30,
    fontFamily: 'arial',
    color: "white",
    marginRight:190,
    fontSize: 18,
    
   },
   txt6:{
    marginTop:30,
    fontFamily: 'arial',
    color: "white",
    marginRight:130,
    fontSize: 18,
    
    
   },
   cb1:{
    marginTop:30,
    height:25,
    width: 25,

   },
   cb2:{
    marginTop:30,
    marginLeft: 10,
    height: 25,
    width: 25,

   },
   cb3:{
    marginTop:30,
    marginLeft: 17,
    height:25 ,
    width: 25,

   },
   cb4:{
    marginTop:30,
    marginLeft: 17,
    width: 25,
    height: 25
   },
   
   btn:{
    height: 40,
    width:330,
    margin: 12,
    backgroundColor:'#99CCCC',
    marginTop: 40,
    

  },
  txtgen:{
    textAlign: 'center',
    marginTop: 10
  }

});

export default App;

