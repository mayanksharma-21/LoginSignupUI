import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import colors from '../Utils/colors'
import { useNavigation } from '@react-navigation/native'


const Home = () => {

    const navigation = useNavigation(); 
    const handlelogin = () =>{
        navigation.navigate("Login")
    }
    const handlesign = () =>{
        navigation.navigate("Signup")
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.container}>
                    <Image source={require('../assets/logo.png')} style={styles.logo} />
                    <Image source={require('../assets/main.jpg')} style={styles.main} />
                </View>
                <Text style={styles.title}>Raksha-Net</Text>
                <Text style={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Verita eveniet eligendi vitae sapiente alias quasi?</Text>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.btn1} 
                    onPress={handlelogin}
                    >
                        <Text style={styles.loginbtn}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn2}
                    onPress={handlesign}
                    >
                        <Text style={styles.signupbtn}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    logo: {
        height: 100,
        width: 100,
        marginVertical: 10
    },
    main: {
        height: 400,
        width: 400,
        marginTop: 20
    },
    title: {
        fontSize: 30,
        color: colors.primary,
        fontWeight: 500,
        textAlign: 'center',
        paddingHorizontal: 10,
        marginVertical: 20,
        top:530
    },
    subtitle: {
        fontSize: 20,
        color: colors.secondary,
        fontWeight: 200,
        textAlign: 'center',
        paddingHorizontal: 10,
        marginVertical: 20,
        top:500
    },
    button:{
        top:530,
        flexDirection:'row',
        borderWidth:1,
        borderColor:colors.primary,
        width:'85%',
        height:60,
        borderRadius:100,
        // justifyContent:'center',
        // alignItems:'center'
        marginLeft:30
    },
    btn1:{
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        backgroundColor:colors.primary,
        borderRadius:98
    },
    loginbtn:{
        fontSize:20,
        color:colors.white
    },
    btn2:{
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
    },
    signupbtn:{
       fontSize:20,
        color:colors.primary 
    }
})