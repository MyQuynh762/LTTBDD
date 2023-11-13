import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TextInput, Pressable, } from 'react-native';

 export default function SC1({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.v1}>
       <Image style={styles.img1} source={require("../assets/note.PNG")}></Image>
       <b style={styles.txt1}>MANAGER YOUR <br></br> TEXT</b>
      </View>
      <View style={styles.v2}>
     
      <Image style={styles.img2} source={require("../assets/mail.PNG")}></Image>
      <TextInput
          style={styles.ip1}
          onChangeText={(text) => setName(text)}
          placeholder="ENTER YOUR NAME"
       />
      </View>

      <Pressable style={styles.btn1}  onPress={() => navigation.navigate('screen2')}>
        <b  style={styles.txt2}>GET STARTED</b>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    v1:{
      flexDirection:"column",
    },
    img1:{
      height: 300,
      width:300,
      marginLeft: 40,
      marginTop: 30
    },
    txt1:{
      textAlign:"center",
      fontSize: 25,
      color:"purple",
      marginTop: 20
    },
    v2:{
      flexDirection:"row"
    },
    ip1:{
      height: 50,
      width:330,
      backgroundColor: "white",
      borderColor:"gray",
      borderWidth:1,
      borderRadius:20,
      marginTop: 20,
      marginLeft: 30,
      paddingLeft: 50
    },
    img2:{
      height:30,
      width:30,
      marginTop: 35,
      position:"absolute",
      marginLeft: 38
    },
    btn1:{
      height: 50,
      width:330,
      backgroundColor:"blue",
      borderRadius: 20,
      marginTop: 30,
      marginLeft: 30
  
    },
    txt2:{
      textAlign:"center",
      marginTop: 15,
      color:"white"
    },
});