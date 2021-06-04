import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Alert
  } from "react-native";
  

import { Button, Input, Text } from 'react-native-elements';
import firebase from '../database/firebase';

const LoginScreen = (props) => {
    const initalState = {
      email: "",
      password: "",
    };
  
    const [state, setState] = useState(initalState);
  
    const handleChangeText = (value, name) => {
      setState({ ...state, [name]: value });
    };
  
    const saveNewUser = async () => {

      const email = state.email.trim();
      const password = state.password.trim();

      console.log("email, password : ", email, password)

      if (state.email === "") {
        alert("please provide a email");
      } else {
  
        try {
          await 
          
          firebase.auth.signInWithEmailAndPassword( email, password);
      
          props.navigation.navigate("UsersList");
        } catch (error) {
            Alert.alert('Error','Credenciales Inválidas');
            console.log(error);
        }
      }
    };
  
    return (
      <ScrollView style={styles.container}>
        
  
        {/* Email Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Email"
            multiline={false}
            numberOfLines={1}
            onChangeText={(value) => handleChangeText(value, "email")}
            value={state.email}
          />
        </View>
  
        {/* Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Password"
            onChangeText={(value) => handleChangeText(value, "password")}
            value={state.password}
            secureTextEntry
          />
        </View>
  
        <View style={styles.button}>
          <Button title="Login" onPress={() => saveNewUser()} />
        </View>

        <TouchableOpacity onPress={() => props.navigation.navigate('RegisterScreen')} 
                            
        >
            <Text>Don't have an account? Sign Up</Text>
        </TouchableOpacity>

      </ScrollView>
     
    );
  };



  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
      paddingTop:180

      //justifyContent:'center',
      //alignItems:'center'


    },
    inputGroup: {
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc",
    },
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
  export default LoginScreen;
  
