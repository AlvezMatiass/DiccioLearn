import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 240,
        gap: 12,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingBottom: 36,
        backgroundColor: '#efefef',
    },
    secundaryThing: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: '#F8F8F8',
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
    },
    test: {
        height: 110,
        width: 110,
        borderRadius: 100,
        backgroundColor: '#F8F8F8',
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
    },
    iconColor: {
        color: '#E2E2E2'
    }
})