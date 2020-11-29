import {StyleSheet} from "react-native";
import {colors} from "~/utils/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center'
    },
    textInput: {
        height: 50,
        borderColor: colors.gray86,
        borderWidth: 1,
        margin: 10,
        marginHorizontal:20,
        borderRadius: 3,
        padding: 10,
        backgroundColor: colors.gray98
    },
    logo: {
        fontSize: 50,
        fontFamily: 'Billabong',
        marginBottom: 20,
    },
    dontHaveAccountView: {
        alignItems: 'center',
        height: 50,
        borderTopWidth: 1,
        borderColor: '#ddd',
        justifyContent: 'center'
    },
    loginFacebookView: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginFacebookText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: colors.navyBlue,
        paddingLeft: 10
    },
    orView: {
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal:20,
        borderColor: "#999"
    },
    orViewText: {
        textAlign: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal:10,
        color: "#999",
        transform: [
            {translateY: 8}
        ]
    },
    forgetPasswordText: {
        color: "#999",
        textAlign: 'center'
    },
    loginView: {
        alignItems: 'center',
        backgroundColor: colors.moreLightBlue,
        borderWidth: 1,
        borderColor: 'transparent',
        marginHorizontal:20,
        marginTop: 10,
    },
    loginText: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    policy: {
        textAlign: 'center',
        justifyContent: 'center',
        color: "#999",
    },
    signInOrUpText: {
        fontWeight: 'bold',
        color: colors.navyBlue,
        marginLeft: 5,
        paddingLeft: 5,
    },
    boldText: {
        fontWeight: 'bold'
    },
    passwordView: {
        flexDirection: 'row',
        paddingBottom: 10,
        height: 50,
        borderColor: colors.gray86,
        borderWidth: 1,
        margin: 10,
        marginHorizontal:20,
        borderRadius: 3,
        padding: 10,
        backgroundColor: colors.gray98
    },
    inputIcon: {
        flex: 1,
    },
});
export default styles;