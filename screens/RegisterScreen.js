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

const RegisterScreen = (props) => {
    const initalState = {
      email: "",
      password: "",
      RepeatPassword:""
    };
  
    const [state, setState] = useState(initalState);
  
    const handleChangeText = (value, name) => {
      setState({ ...state, [name]: value });
    };
  
    const saveNewUser = async () => {
      
      if (state.RepeatPassword !== state.password){
        Alert.alert('Error','Passwords No coinciden');
        return;
      }
      
      if (state.email === "") {
        alert("please provide a email");
      } else {
  

        try {
          await 

          
              console.log(state.email);
              console.log(state.password);

          
          
          //firebase.auth().signInWithEmailAndPassword({email: state.email, password:state.password});
          firebase.auth.createUserWithEmailAndPassword(state.email, state.password)

        //   await firebase.db.collection("users").add({
        //     name: state.name,
        //     email: state.email,
        //     phone: state.phone,
        //   });

          props.navigation.navigate("LoginScreen");
        } catch (error) {
             console.log(error)
        }
      }
    };
  
    return (
      <ScrollView style={styles.container}>
        
  
        {/* Email Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Email"
            multiline={true}
            numberOfLines={4}
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

        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Confirm Password"
            onChangeText={(value) => handleChangeText(value, "RepeatPassword")}
            value={state.RepeatPassword}
            secureTextEntry
          />
        </View>
  
        <View style={styles.button}>
          <Button title="Register User" onPress={() => saveNewUser()} />
        </View>

        <TouchableOpacity onPress={() => props.navigation.navigate('LoginScreen')} 
                            
        >
            <Text>Already have an account? Sign In</Text>
        </TouchableOpacity>

      </ScrollView>
     
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
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
  
  export default RegisterScreen;
  
