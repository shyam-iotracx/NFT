import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#151F28',
    height:'100%'
  },
  subContainer:{
    flexDirection:'row'
  },
  menuBar:{
    top:10,
    paddingRight:85,
    paddingLeft:15
  },
  detailsText:{
    paddingRight:60
  },
  headerText:{
    color:'#15f4ee'
  },
  userImage:{
    height:42,
    width:42
  },
  image:{
    height:42,
    width:42,
    borderRadius:42/2
  },
  subHeaderContent:{
    top:20
  },
  subHeader:{
    alignContent:"center",
    alignSelf:"center",
    color:'#15f4ee',
    fontSize:25
  },
  hrLine:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  buttonsMain:{
    top:25,
  },
  buttonsSub:{
    paddingLeft:100,
    flexDirection:'row'
  },
  btns:{
    borderRadius:5,
    borderWidth:1,
    borderColor:'#707070',
    paddingLeft:20,
    paddingRight:20
  },
  buttonTextsSelected:{
    color:'#EEFFFF'
  },
  buttonTexts:{
    color:'#808080'
  },
  btnText:{
    fontSize:15
  },
  body:{
    paddingLeft:60,
    paddingRight:60,
  },
  batteryComponent:{
    top:40,
    backgroundColor:'#487840',
    opacity:0.7,
    borderRadius:15,
  },
  batteryPurchaseComponent:{
    alignItems:"center",
    flexDirection:'row',
  },
  batteryBody:{
    flexDirection:'row'
  },
  purchaseText:{
    color:'#15f4ee',
    top:-30,
    paddingLeft:20
  },
  batteryImage:{
    paddingTop:15,
    paddingLeft:15,
    paddingBottom:15
  },
  imageBattery:{
    height:64,
    width:64,
    paddingLeft:5,
  },
  batteryBackground:{
    backgroundColor:'#487840',
    opacity:0.9,
    borderRadius:10
  },
  otherBatteryDetails:{
    marginTop:-40,
    color:'#15f4ee',
    paddingLeft:90,
    bottom:20
  },
  batteryText:{
    color:'#15f4ee',
    fontSize:12
  },
  rightArrow1:{
    left:300,
  },
  smallBattery:{
    width:32,
    height:32,
    left:312
  },
  rightArrow2:{
    left:300
  },
  nftComponent:{
    top:-40,
    backgroundColor:'#487840',
    opacity:0.7,
    borderRadius:15,
  },
  nftHeaderComponent:{
    flexDirection:'row'
  },
  nftImageBackgroundComponent:{
    backgroundColor:'#487840',
    opacity:0.9,
    borderRadius:10
  },
  nftImageComponent:{
    paddingTop:15,
    paddingLeft:15,
    paddingBottom:15
  },
  nftImage:{
    width:64,
    height:64
  },
  nftHeaderBody:{
    color:'#15f4ee',
    top:10,
    paddingLeft:30
  },
  nftBodyComponent:{
    paddingLeft:90,
    marginTop:-60,
    marginBottom:25
  },
  nftBody:{
    flexDirection:'row'
  },
  nftBodyText:{
    color:'#15f4ee',
    fontSize:12
  },
  leftArrow1:{
    top:-60,
    left:30,
  },
  carbon:{
    height:32,
    width:32,
    top:-60,
    left:20,
    position:'absolute'
  },
  leftArrow2:{
    left:32,
    top:-30
  }
})

export default styles
