import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 160,
        width: '100%',
        gap: 24,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 24,
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 2
    },
    secundaryThing: {
        width: 65,
        height: 65,
        borderRadius: 100,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.3,
        shadowRadius: 7.49,

        elevation: 12,
        borderWidth: 2,
        borderColor: '#ffffff'
    },
    test: {
        height: 105,
        width: 105,
        borderRadius: 100,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        borderWidth: 2,
        borderColor: '#ffffff'
    },
    iconColor: {
        color: '#E2E2E2'
    }
})