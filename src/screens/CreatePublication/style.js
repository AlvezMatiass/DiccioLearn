import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        backgroundColor: '#E2E2E2',
        flex: 1
    },
    textDesc: {
        marginTop: 12,
        marginHorizontal: 12,
        fontFamily: 'Inter-Light',
        fontSize: 26,
        opacity: .8
    },
    publicarContainer: {
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end'
    },
    publicarText: {
        fontSize: 18,
        fontFamily: 'Inter-Bold',
        marginRight: 24,
        paddingHorizontal: 24,
        paddingVertical: 12
    },
    cancelText: {
        backgroundColor: '#F8F8F8',
        color: '#110B11',
        borderRadius: 12
    },
})