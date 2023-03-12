import { View, Text, StyleSheet, ImageBackground, TextInput, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

export const Login = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmpass, setConfirmPass] = useState('');
   const [isRegister, setIsRegister] = useState(false);
   const [islogin, setIsLogin] = useState(false);

   const handleLogin = () => {
      console.log(email, password);
   }
   const handleRegister = () => {
      console.log('confirmRegister');
   }

   return (
      <ImageBackground source={require('../assets/images/travel_bg.jpg')} resizeMode="cover" style={styles.container}>
         <ScrollView style={{ flex: 1 }}>
            <Text
               style={{
                  fontWeight: 'bold',
                  fontSize: 24,
                  color: '#212121',
                  marginVertical: 25,
               }}
            >
               {isRegister ? 'Sing in' : 'Login'}
            </Text>

            <View style={styles.loginform}>
               <View style={styles.inputcontiner}>
                  <Text style={styles.inputlabel}>Email :</Text>
                  <TextInput
                     style={styles.input}
                     placeholder='email'
                     value={email}
                     onChangeText={val => setEmail(val)}
                     maxLength={50}
                     keyboardType="email-address" />
               </View>

               <View style={styles.inputcontiner}>
                  <Text style={styles.inputlabel}>Password :</Text>
                  <TextInput
                     style={styles.input}
                     placeholder='password'
                     maxLength={50}
                     value={password}
                     onChangeText={val => setPassword(val)}
                     secureTextEntry
                  />
               </View>

               {isRegister && <View style={styles.inputcontiner}>
                  <Text style={styles.inputlabel}>Confirm :</Text>
                  <TextInput
                     style={styles.input}
                     placeholder='confirm password'
                     maxLength={50}
                     value={confirmpass}
                     onChangeText={val => setConfirmPass(val)}
                     secureTextEntry
                  />
               </View>}
            </View>

            <View style={{ height: 20 }} />
            <TouchableOpacity style={styles.button}
               onPress={isRegister ? handleRegister : handleLogin} >
               <Text style={styles.buttonText}>{isRegister ? 'Sign in' : 'Login'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setIsRegister(!isRegister)} style={styles.buttonRegister}>
               <Text>{isRegister ? 'Login' : 'Register'}</Text>
            </TouchableOpacity>
         </ScrollView>
      </ImageBackground>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
   },
   loginform: {
      width: Dimensions.get('window').width - 40,
   },
   inputcontiner: {
      marginTop: 10,
      marginBottom: 16,
   },
   inputlabel: {
      fontWeight: "500",
      color: '#212121',
      fontSize: 20,
   },
   input: {
      flex: 1,
      backgroundColor: '#ffffff',
      marginTop: 8,
      padding: 10,
      borderRadius: 100,
      minHeight: 40,
   },
   button: {
      height: 40,
      backgroundColor: 'coral',
      width: Dimensions.get('window').width - 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
   },
   buttonText: {
      fontWeight: 'bold',
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#fafafa'
   },
   buttonRegister: {
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
   },
})