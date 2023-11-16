import React, { useState } from 'react';
import { View, TextInput, Text, Alert , StyleSheet, Pressable, Image} from 'react-native';
import axios from 'axios';

const Sc1 = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        alert('Thông báo: tên người dùng hoặc mật khẩu không chính xác.');
        return;
      }
  
      const response = await axios.get('https://654afc225b38a59f28ee6878.mockapi.io/login');
      const users = response.data;
  
      const user = users.find(u => u.username === username && u.password === password);
  
      if (user) {
        navigation.navigate('Sc2');
       
      } else {
        alert('Thông báo: tên người dùng hoặc mật khẩu không chính xác.');
      }
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
      Alert.alert('Lỗi', 'Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.');
    }
  };
  

  return (
    <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/note.png')}></Image>
      <TextInput
        style={styles.ip1}
        placeholder="User"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
       style={styles.ip1}
        placeholder="Mật khẩu"
       // secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
     {/* <Button title="Đăng Nhập" onPress={handleLogin} /> */}
     <Pressable style={styles.pr} onPress={handleLogin}>
      <Text style={styles.text}>Đăng Nhập</Text>
     </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFE4C4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ip1:{
        height: 50,
        width: 380,
        borderColor:'#FF9933',
        borderWidth: 1,
        backgroundColor:"white",
        borderRadius: 10,
        marginLeft: 3,
        marginTop:30,
    },
    pr:{
        height: 50,
        width: 380, 
        backgroundColor:"#FF9933",
        marginLeft: 5,
        marginTop: 10,
        borderRadius: 10,
        alignItems:"center",

    },
    text:{
        marginTop: 13,
        fontSize: 20,
        color:'white',
        fontFamily:'aria'
    },
    img:{
        height: 150,
        width: 150,
   
    }
   
})

export default Sc1;
