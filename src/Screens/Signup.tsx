import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, Vibration, View } from 'react-native'
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
    navigation.navigate('Login')
  };

  const handleGoBack =()=>{
    navigation.goBack()
  };

  const handlesignup =()=>{
    Alert.alert('Register Successfully')
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon name={'arrow-left'} color={colors.primary} size={50}/>
          </TouchableOpacity>
          <View style={styles.textcont}>
            <Text style={styles.heading}>Let's</Text>
            <Text style={styles.heading}>Start a New</Text>
            <Text style={styles.heading}>Journey Bby</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.input}>
              <Icon name='user' size={35} />
              <TextInput style={styles.textInput}
                placeholder='Enter your name'
                keyboardType='email-address'
              />
            </View>

            <View style={styles.input2}>
              <Icon name='lock' size={35} />
              <TextInput style={styles.textInput}
                placeholder='Create Password'
                secureTextEntry={Secure}
              />
              <TouchableOpacity onPress={() => {
                setSecure((prev) => !prev)
              }}>
                <Icon name='eye' size={30} />
              </TouchableOpacity>
            </View>

            <View style={styles.input3}>
              <Icon name='lock' size={35} />
              <TextInput style={styles.textInput}
                placeholder='Confirm Password'
                secureTextEntry={Secure}
              />
              <TouchableOpacity onPress={() => {
                setSecure((prev) => !prev)
              }}>
                <Icon name='eye' size={30} />
              </TouchableOpacity>
            </View>

            {/* <TouchableOpacity>
              <Text style={styles.forget}>Forget Password?</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.signupbtn}
            onPress={handlesignup}
            >
              <Text style={styles.signup}>Signup</Text>
            </TouchableOpacity>
            <Text style={styles.or}>or continue with</Text>
            <TouchableOpacity style={styles.google}>
              <Icon name='bell' size={30} color={'red'} />
              <Text style={styles.other}>Phone Number</Text>
            </TouchableOpacity>
            <View style={styles.end}>
              <Text style={styles.pre}>Have an Account</Text>
              <TouchableOpacity onPress={handleBack}>
                <Text style={styles.prev}>Login</Text>
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
  input3: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 100,
    marginVertical: 10,
    paddingHorizontal: 20,
    height: 60,
    width: '90%',
  },
  // forget: {
  //   left: 130
  // },
  signupbtn: {
    marginVertical: 40,
    backgroundColor: colors.primary,
    borderRadius: 100,
    width: '90%'
  },
  signup: {
    textAlign: 'center',
    alignItems: 'center',
    padding: 15,
    fontSize: 20,
    color: colors.white

  },
  or: {
    fontSize: 15,
    top: -25
  },
  google: {
    marginVertical: 5,
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
    marginVertical:10
  },
  pre: {
    fontSize: 18
  },
  prev: {
    color:'blue',
    left: 10,
    fontSize: 18
  }
})