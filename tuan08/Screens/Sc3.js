import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TextInput, Pressable, } from 'react-native';


export default function SC3({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.v21}>
        <Image style={styles.img21} source={require("../assets/avt.PNG")}></Image>
        <b  style={styles.txt21} >Hi Quynh <br></br> Have a good day!</b> 
        </View>
        <View style={styles.v21}>
        <b  style={styles.txt22}>ADD YOUR JOB</b>
  
        </View>
        
      
        <TextInput
            style={styles.ip1}
            onChangeText={(text) => setName(text)}
            placeholder="ENTER YOUR JOB"
         />
  
        <Pressable style={styles.btn1}  >
          <b  style={styles.txt2} > FINISH</b>
        </Pressable>
  
        <Image style={styles.img23} source={require("../assets/note.PNG")}></Image>
  
  
  
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
    },
    v21:{
        flexDirection:"row",
    
      },
      img21:{
        height:60,
        width:60,
        marginTop: 20
    
      },
      txt21:{
        marginTop: 30,
        marginLeft: 20
      },
      v21:{
        flexDirection:"row",
    
    
      },
      txt22:{
       
        marginLeft:90,
        fontSize:30,
        marginTop: 30
    
      },
      img23:{
        height:200,
        width:200,
        marginLeft:100,
        marginTop: 50
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
      btn1:{
        height: 50,
        width:330,
        backgroundColor:"blue",
        borderRadius: 20,
        marginTop: 30,
        marginLeft: 30
    
      },
      txt2:{
        marginTop: 15,
        textAlign: 'center',
        color:"white"
      }
      
    

});