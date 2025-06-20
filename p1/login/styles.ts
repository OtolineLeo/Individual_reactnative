import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1e1e1e',
        paddingTop: 60,
        // paddingHorizontal: 30
    },
    title:{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginVertical: 90,
        textAlign: 'center',
        marginBottom: 20
    },
    input:{
        backgroundColor: '#1e1e1e',
        borderRadius: 4,
        borderColor: 'white',
        borderWidth: 1,
        height: 50,
        marginHorizontal: 30,
        // paddingHorizontal: 0,
        color: 'white',
        marginBottom: 25
        
    },
    label:{
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 12,
        marginTop: 20,
        marginHorizontal: 30
    },
    labelRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5
    },
    forgot:{
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 15,
        marginHorizontal: 30
    },
    button:{
        backgroundColor: '#ED2025',
        padding: 15,
        borderRadius: 2,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 30
    },
    buttonText:{
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    },
    crAccount:{
        color: 'white',
        fontWeight: 'bold',
        marginTop: 15,
        textDecorationLine: 'underline',
        marginHorizontal: 30
    },
    pic:{
        width: 69,
        height: 69,
        alignSelf: 'center',
        marginTop: 0,
        justifyContent: 'center',
        marginLeft: 65
    },
    newContainer:{
        backgroundColor: 'black',
        height: 120, 
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    icon:{
        width: 35,
        marginLeft: 10
        // alignItems: 'center',
        // justifyContent: 'center',
        // margin: 10,
        // marginTop: 50,
        // position: 'absolute'
    },
    test:{
        flexDirection: 'row',
        gap: 15,
        margin: 10
    },
    icon2:{
        width: 35,
        height: 30,
        paddingRight: 10
    }
    
})