import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1e1e1e',
        paddingTop: 60,
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
    },
    pic:{
        width: 69,
        height: 69,
        alignSelf: 'center',
        marginTop: 0,
        justifyContent: 'center',
        marginLeft: 65
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
    },
    capa:{
        width: 400,
        height: 500
    },
    carrosel:{
        width: 400,
        height: 80
    }
})