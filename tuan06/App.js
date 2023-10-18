import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
     <View style={styles.v1}>
     <Image source={require("./assets/phone.jpg")} style={styles.img}></Image>
     </View>

     <p style={styles.txt1}>Điện thoại VSMart Joy3- Hàng Chính Hãng</p>

     <View style={styles.v2}>
      <Image source={require("./assets/star.jpg") } style={styles.imgstar}></Image>
      <Image source={require("./assets/star.jpg") } style={styles.imgstar}></Image>
      <Image source={require("./assets/star.jpg") } style={styles.imgstar}></Image>
      <Image source={require("./assets/star.jpg") } style={styles.imgstar}></Image>
      <Image source={require("./assets/star.jpg") } style={styles.imgstar}></Image>
      <Text style={styles.txt2}>(Xem 777 đánh giá)</Text>

     </View>
     <View style={styles.txt3}>1.790.000</View>
     <View style={styles.v4}>
      <p style={styles.p1}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</p>
      <Image style={styles.hoicham} source={require("./assets/hoicham.jpg")}></Image> 
       </View>

       <View style={styles.v5}>
       <Pressable style={styles.btn}  onPress={() => navigation.navigate('Trở lại')}>
        <Text style={styles.txt4}>Có 4 màu chọn</Text>
        
      </Pressable>
       </View>
   
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (

    <View style={styles.container}>
      <View  style={styles.vsl1}>
      <Image source={require("./assets/phone.jpg")} style={styles.imgphone2}></Image>
       <p style={styles.tsl1}>Điện thoại VSMart Joy3- Hàng Chính Hãng</p>
      </View>
      <View  style={styles.vsl2}>
       <p style={styles.tsl1}>Select a color:</p>
       <Image source={require("./assets/black.jpg")} style={styles.imgcolor}></Image>
       <Image source={require("./assets/blue.jpg")} style={styles.imgcolor}></Image>
       <Image source={require("./assets/red.jpg")} style={styles.imgcolor}></Image>
      </View>
 
      <Pressable  onPress={() => navigation.navigate('VSMart Joy3')} style={styles.btn2} >
         <Text style={styles.txt4}> Xong</Text>
       </Pressable>
    
 
       
    </View>
 
  
   );
 }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="VSMart Joy3" component={HomeScreen} />
        <Stack.Screen name="Trở lại" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  v1:{
    flexDirection: 'row',
  },
  v2:{
    flexDirection: 'row',
    marginLeft: 20,
  },
  v3:{
    flexDirection: 'row',
    marginLeft:50,
    
  },
  v4:{
    flexDirection:'row',
    marginLeft: 30,
    marginTop: 5

  },
  v5:{
    flexDirection: 'row',
  },
  
  img:{
    width: 300,
    height:400,
    marginLeft: 50,
    marginTop: 20
  
  },
  txt1:{
    marginLeft: 30,
  },
  imgstar:{
    width:20,
    height:20,
    marginLeft: 10
    

  },
  txt2:{
    marginLeft:30

  },
  txt3:{
    marginLeft: 40,
    marginTop: 20,
    fontSize: 25,
  

  },
  p1:{
    color:"red"
  },
  hoicham:{
    height:18,
    width:18,
    marginTop: 17,
    marginLeft: 20,
  },
  btn:{
    height: 50,
    width:330,
    //backgroundColor: "blue",
    marginLeft: 30,
    borderRadius: 20,
   // borderColor:"black",
    borderWidth: 1,
    

   },
   txt4:{
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20,
    color: "black",
    fontFamily:"time"
   },

  
   imgphone2:{
    height:120,
    width:100
   },
   vsl1:{
    flexDirection: "row",
   },
   tsl1:{
    marginTop:50
   },
   vsl2:{
    flexDirection:"column",
    
   },
   imgcolor:{
    height:100,
    width:100,
    marginLeft: 140
  
   },
   btn2 :{
    height: 50,
    width:330,
    backgroundColor: "blue",
    marginLeft: 30,
    borderRadius: 20,
   // borderColor:"black",
    borderWidth: 1,
    marginTop: 50,
    

   }
   
});
export default App;
