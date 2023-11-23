import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    selectContainer: {
        paddingVertical: 10,
        flex: 1,
        backgroundColor: '#EFEFEF'
    },
    selectText: {
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Inter-Medium'
    },
    borderSelected: {
        backgroundColor: '#E2E2E2',
    },
})