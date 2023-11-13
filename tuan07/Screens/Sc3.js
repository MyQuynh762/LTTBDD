import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Pressable } from 'react-native-web';

export default function SC3({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.v1} >
                <Image style={styles.img1} source={require("../assets/bike2.PNG")}></Image>
                <p style={styles.txt1}>Pina Mountain  </p>
                <p style={styles.txt2}>15% OFF I 350$  </p>
                <p style={styles.txt3}>Decription  </p>
                <p style={styles.txt4}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc. </p>
            </View>
            <View style={styles.v2}>
            <Image style={styles.heart} source={require("../assets/tim.jpg")}></Image>
            <Pressable style={styles.btn}  onPress={() => navigation.navigate("screen4")}>
            <Text style={styles.text3}>ADD TO CARD </Text> </Pressable>
            </View>   
        
        </View>
      
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    v1:{
        flexDirection: 'column',
    },
   img1:{
    height:350,
    width:350,
    marginLeft: 20
   },
   txt1:{
    marginLeft: 20,
    fontSize:25,
    
   },
   txt2:{
    marginLeft: 20,
    fontSize:20,
    color:"gray",
    marginTop:1
    
   },
   txt3:{
    marginLeft: 20,
    fontSize:20,
    
   },
   txt4:{
    marginLeft: 20,
    fontSize:20,
    color:"gray",
    marginTop:1
    
   },
   v2:{
    flexDirection:"row",
   },
   btn:{
    height: 50,
    width:300,
    backgroundColor:"red",
    borderRadius: 30,
    marginLeft: 40
},
text3:{
    textAlign: 'center',
    marginTop:18,
    color:"white",
    
},
heart:{
 height: 30,
 width:30,
 marginTop: 10,
 marginLeft: 10
}

});
