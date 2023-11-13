import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TextInput, Pressable, } from 'react-native';


export default function SC2({navigation}) {
    return (
      <View style={styles.container}>
        
        <View style={styles.v1}>
        <Image style={styles.img1} source={require("../assets/avt.PNG")}></Image>
        <b style={styles.txt1} >Hi Quynh <br></br> Have a good day!</b> 
        </View>

        <View style={styles.v2}>
        <Image style={styles.img2} source={require("../assets/search.PNG")}></Image>
        <TextInput
            style={styles.ip1}
            onChangeText={(text) => setName(text)}
            placeholder="SEARCH"
         />
        </View>

        <Pressable style={styles.btn1} >
        <b  style={styles.txt2}>To Check Email</b>
      </Pressable>
      <Pressable style={styles.btn1}  >
        <b  style={styles.txt2}>UI task web page</b>
      </Pressable>
      <Pressable style={styles.btn1} >
        <b  style={styles.txt2}>Learn javascript</b>
      </Pressable>
      <Pressable style={styles.btn1}  >
        <b  style={styles.txt2}>Medical app UI</b>
      </Pressable>
      <Pressable style={styles.btn1} >
        <b  style={styles.txt2}>Learn javascript</b>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("screen3")} >
      <Image  style={styles.img3} source={require("../assets/add.PNG")}  ></Image>
      </Pressable>
     
        
        
        <StatusBar style="auto" />
      </View>
      
    );

    function newFunction() {
        return 'screen3';
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
      v1:{
        flexDirection:"row",
        marginLeft: 150
    
      },
      img1:{
        height:60,
        width:60,
        
    
      },
      txt1:{
        marginTop: 10,
        marginLeft: 20,
      },
      ip1:{
        marginTop:40,
        height:40,
        width:330,
        borderColor: "gray",
        backgroundColor:"white",
        borderWidth:1,
        marginLeft: 30,
        paddingLeft:50
        

      },
      img2:{
      height:30,
      width:30,
      marginTop: 45,
      position:"absolute",
      marginLeft: 38,
      


      },
      v2:{
        flexDirection:"row"
      },
      btn1:{
        height: 50,
        width:330,
        backgroundColor:"gray",
        borderRadius:20,
        marginLeft: 35,
        marginTop: 30

      },
      txt2:{
        textAlign:"center",
        marginTop: 15

      },
      img3:{
        height: 60,
        width:60,
        marginTop:50,
        marginLeft:170
      }
  
      
    
    
    });
    