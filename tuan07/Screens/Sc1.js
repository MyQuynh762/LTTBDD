import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Pressable } from 'react-native-web';

export default function ({ navigation }) {
    return ( 
        <View style = { styles.container } >
        <p style = { styles.text1 } > A premium online store
        for sporter and their stylish choice </p>
        <Image source={require('../assets/bike.PNG')} style={styles.img} />
        <b style = { styles.text2 }>POWER BIKE <br></br>
        SHOP</b>
        
        <Pressable style={styles.btn}  onPress={() => navigation.navigate('screen2')}>
        <Text style={styles.text3}>GET STARTED</Text> </Pressable>
        <StatusBar style = "auto" / >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    text1:{
        marginTop: 50,
        marginLeft: 10
    
    },
    img:{
        height: 350,
        width: 350,
        marginLeft: 16,
        marginTop: 50,
        borderRadius: 30,
        fontSize: 19
    },
    text2:{
        marginTop: 30,
        textAlign: 'center',
        fontSize: 30
    },
    btn:{
        height: 50,
        width:300,
        backgroundColor:"red",
        borderRadius: 10,
        marginLeft: 40
    },
    text3:{
        textAlign: 'center',
        marginTop:18,
        color:"white",
        
    }


});
