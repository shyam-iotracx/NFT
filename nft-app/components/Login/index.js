import React, {useState} from "react";
import { View, Text, TextInput,Dimensions, Image,TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons'; 
import Axios from 'axios'
const {height, width} = Dimensions.get('window');

const login = (props) =>{
    const [text, setText] = useState('');
    const [pass, setPass] = useState('');
    return(
        <View style={styles.body}>
            <View style={styles.img1}>
                    <Image source={require('../../assets/Launch_icons.png')} />
            </View>
            <View style={styles.component}>
                <View style={{justifyContent: 'center',alignItems: 'center',}}>
                    <View style={styles.logo}>
                        <Image style={styles.img} source={require('../../assets/EV_NFT_Video.gif')}/>
                    </View>
                </View>
                <View style={styles.introComponent}>
                    <Text style={styles.intro}>Login</Text>
                    <View >
                        <Text style={styles.subTitle}>Hi, how are you today ?</Text>
                        <Text style={styles.subTitle}>Please login to continue</Text>
                    </View>
                    <View style={styles.textBoxes}>
                        <View style={styles.text1}>
                            <Ionicons name="person" size={25} color="#15f4ee" />
                            <TextInput style={styles.tb1} placeholder="Enter User Name" 
                            placeholderTextColor={'#15f4ee'}
                            onChangeText={newText => setText(newText)}
                            defaultValue={text}></TextInput>
                        </View>
                        <View style={styles.text2}>
                            <Ionicons name="lock-closed-outline" size={25} color="#15f4ee" />
                            <TextInput style={styles.tb1} 
                            placeholder="Enter Password" 
                            placeholderTextColor={'#15f4ee'} 
                            secureTextEntry={true}
                            onChangeText={newText => setPass(newText)}
                            defaultValue={pass}></TextInput>
                        </View>
                    </View>
                    <View style={styles.btnComponent}>
                        <TouchableOpacity style={styles.button} onPress={()=>{
                            if(text == "" && pass == ""){
                                Alert.alert("Empty Input","Please enter the User name and Password to login")
                            }else if(text != "" && pass == ""){
                                Alert.alert("Empty Input","Please enter the Password to login")
                            }else if(text == "" && pass != ""){
                                Alert.alert("Empty Input","Please enter the Username to login")
                            }else{
                                let options = {
                                    "name":text,
                                    "pass":pass
                                };
                                Axios.post("http://52.66.230.14:5000/checkUser",JSON.stringify(options))
                                .then(function(res){
                                    if(res.data.data.status ==1){
                                        props.navigation.navigate("Dashboard",{text})
                                        setText('');
                                        setPass('');
                                    }else{
                                        console.log(res.data)
                                        Alert.alert("Invalid Credentials","Please Check Username and Password")
                                    }
                                    console.log(process.env)
                                });
                            }
                            // props.navigation.navigate("Dashboard",{text})
                        }}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        

                    </View>
                    
                </View>
            </View>
            
        </View>
    )
}

export default login;