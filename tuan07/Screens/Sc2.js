import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Pressable } from 'react-native-web';

export default function SC2({ navigation }) {
    return (
         < View style = { styles.container } >
            <View style={styles.v1}>
                <p style={styles.p1}>The World's Best Bike</p> 
            </View>
            <View style={styles.v2}>
                <Pressable style={styles.pr1}>
                    <p style={styles.p2}>All</p>
                </Pressable>
                <Pressable style={styles.pr1}>
                    <p style={styles.p3}>Roadbike</p>
                </Pressable>
                <Pressable style={styles.pr1}>
                    <p style={styles.p3}>Mountain</p>
                </Pressable>
            </View>
            <View style={styles.v3}>
            <Pressable style={styles.pr2} onPress={() => navigation.navigate('screen3')}>
            <Image style={styles.img1} source={require("../assets/pinarello.png")}></Image>
             Pinarello <br></br>
             1800
            </Pressable>
            <Pressable style={styles.pr2} onPress={() => navigation.navigate('screen3')}>
            <Image style={styles.img1} source={require("../assets/moutain.jpg")}></Image>
            Pina Mountain <br></br>
             1700
            </Pressable>
            </View>

            <View style={styles.v3}>
            <Pressable style={styles.pr2}>
            <Image style={styles.img1} source={require("../assets/pinaa.jpg")}></Image>
            Pina Bike <br></br>
             1500
            </Pressable>
            <Pressable style={styles.pr2}>
            <Image style={styles.img1} source={require("../assets/pianbike.jpg")}></Image>
            Pinarello <br></br>
             1900
            </Pressable>
           
            </View>
            <View style={styles.v3}>
            <Pressable style={styles.pr2}>
            <Image style={styles.img1} source={require("../assets/pianbike.jpg")}></Image>
            Pinarello <br></br>
             2700
            </Pressable>
            <Pressable style={styles.pr2}>
            <Image style={styles.img1} source={require("../assets/pinarello.png")}></Image>
            Pinarello <br></br>
             1350
            </Pressable>
           
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    p1:{
        marginLeft: 30,
        fontSize: 30,
        fontFamily:"arial",
        color:"red",

    },
    v2:{
        flexDirection:"row",
    },
    pr1:{
        height:30,
        width:100,
        backgroundColor:"white",
        borderColor:"red",
        borderWidth:1,
        borderRadius:7,
       marginLeft:20,
      

    },
    p2:{
        textAlign:"center",
        marginTop:5,
        color:"red"
        
    },
    p3:{
        textAlign:"center",
        marginTop:5,
        color:"gray"
    },
    v3:{
        flexDirection:"row",
    },
    pr2:{
        height:150,
        width:150,
        backgroundColor:"white",
        marginTop:20,
        borderWidth:1,
        borderRadius:10,
        borderColor:"red",
        marginLeft: 30,
        textAlign: "center"
    },
    img1:{
        height:90,
        width:100,
        marginTop: 10,
        marginLeft: 25
        

    }
   
  
   


});
