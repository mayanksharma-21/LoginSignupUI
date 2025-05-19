import { StyleSheet, Text, TextInput, TouchableOpacity, Vibration, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Icon from '@react-native-vector-icons/evil-icons'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../Utils/colors'
import { useNavigation } from '@react-navigation/native'

const Login = () => {

  const [Secure, setSecure] = useState(true)

  const navigation = useNavigation();
  const handleBack = () => {
    navigation.navigate('Signup')
  }

  const handleGoback = () =>{
    navigation.goBack()
  }

  const handleSubmit = () =>{
    navigation.navigate('Main')
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleGoback}>
            <Icon name={'arrow-left'} color={colors.primary} size={50} />
          </TouchableOpacity>
          <View style={styles.textcont}>
            <Text style={styles.heading}>Hey,</Text>
            <Text style={styles.heading}>Welcome</Text>
            <Text style={styles.heading}>Back Bby</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.input}>
              <Icon name='envelope' size={35} />
              <TextInput style={styles.textInput}
                placeholder='Enter your Email'
                keyboardType='email-address'
              />
            </View>

            <View style={styles.input2}>
              <Icon name='lock' size={35} />
              <TextInput style={styles.textInput}
                placeholder='Enter your Password'
                secureTextEntry={Secure}
              />
              <TouchableOpacity onPress={() => {
                setSecure((prev) => !prev)
              }}>
                <Icon name='eye' size={30} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={styles.forget}>Forget Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginbtn} 
            onPress={handleSubmit}
            >
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.or}>or continue with</Text>
            <TouchableOpacity style={styles.google}>
              <Icon name='sc-google-plus' size={30} color={'red'} />
              <Text style={styles.other}>Google</Text>
            </TouchableOpacity>
            <View style={styles.end}>
              <Text style={styles.pre}>Don't Have an Account?</Text>
              <TouchableOpacity onPress={handleBack}>
                <Text style={styles.prev}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {

  },
  textcont: {
    marginVertical: 20,
  },
  heading: {
    fontSize: 50,
    color: colors.primary
  },
  form: {
    marginVertical: 30,
    // top:400,
    justifyContent: 'center',
    alignItems: 'center',
    // textAlign:'center'
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    paddingHorizontal: 20,
    height: 60,
    width: '90%',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize: 20

  },
  input2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    marginVertical: 20,
    paddingHorizontal: 20,
    height: 60,
    width: '90%',
  },
  forget: {
    left: 130
  },
  loginbtn: {
    marginVertical: 50,
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: '90%'
  },
  login: {
    textAlign: 'center',
    alignItems: 'center',
    padding: 15,
    fontSize: 20,
    color: colors.white

  },
  or: {
    fontSize: 15,
    top: -15
  },
  google: {
    marginVertical: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 100,
    width: '90%',
    padding: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center'
  },
  other: {
    left: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  end: {
    flexDirection: 'row',

  },
  pre: {
    fontSize: 18
  },
  prev: {
    left: 10,
    fontSize: 18,
    color:'blue'
  }
})