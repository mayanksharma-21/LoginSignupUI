import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Icon from '@react-native-vector-icons/evil-icons'

const Main = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <View style={styles.header}>
            <Image source={require('../assets/logo.png')} style={styles.logo}/>
            <Text style={styles.heading}>Raksha-Net</Text>
            <Icon name='user' size={30} style={styles.profile}/>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Main

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  logo:{
    flexDirection:'row',
    height:35,
    width:35
  },
  heading:{
    fontSize:20
  },
  profile:{
    // alignItems:''
  }
})