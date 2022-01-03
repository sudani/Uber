import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
    },
    image:{
        height:70,
        width:80,
        resizeMode:'contain',
    },
    midContainer:{
        flex:1,
        marginHorizontal:10,
        justifyContent:'space-between',
    },
    vehicleType:{
        fontWeight:'bold',
        fontSize:18,
        marginBottom:5,
    },
    timeStamp:{
        color: '#5d5d5d'
    },
    rightContainer:{
        width:100,
        justifyContent:'flex-end',
        flexDirection:'row',
    },
    price:{
        fontWeight:'bold',
        fontSize: 18,
        marginLeft:5,
    },
});
export default styles;