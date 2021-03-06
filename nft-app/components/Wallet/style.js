import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        top:0,
        backgroundColor:'#151F28',
        height:'100%'
    },
    logo:{
        height:200,
        width:200,
        left:80,
        position:"relative"
    },
    img:{
        height:200,
        width:200,
        left:80,
        position:"relative"
    },
    burgerMenu:{
        justifyContent:"flex-start",
    },
    header:{
        flexDirection:"row",
        top:10,
        left:10
    },
    address:{
        paddingBottom:15
    },
    addressText:{
        color:'#15f4ee',
        fontSize:20,
        width:'40%',
        textAlign:"center",
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center"
    },
    balance:{
        paddingLeft:50,
        paddingRight:50
    },
    balance1:{
        backgroundColor:'#487840',
        opacity:0.9,
        borderRadius:12
    },
    balanceText:{
        color:'#15f4ee',
        fontSize:20,
        textAlign:"center",
        paddingBottom:5
    },
    menuBoxHeader:{
        paddingTop:15,
        paddingBottom:15
    },
    menuBox:{
        backgroundColor:'#487840',
        opacity:0.9,
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
        width:'100%'
    },
    menuImage:{
        height:32,
        width:32,
        left:60
    },
    menuText:{
        color:'#15f4ee',
        fontSize:20,
        paddingRight:15,
        paddingLeft:15,
        left:100,
    },
    sideIcons:{
        left:150
    },  
    startIcon:{
        left:65
    },
    endIcons:{
        left:82
    },
    thirdRow:{
        paddingBottom:15
    },
    Row:{
        flexDirection:'row'
    },
    btnComponent:{
        paddingTop:35,
        alignSelf:"center",
        alignContent:"center"
    },
    button:{
        backgroundColor:'#808080',
        width:200,
        borderRadius:15
    },
    buttonText:{
        textAlign:"center",
        alignContent:"center",
        alignItems:"center",
        paddingTop:10,
        paddingBottom:10,
        fontSize:20
    }
})

export default styles