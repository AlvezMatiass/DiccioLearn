import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 8,
        paddingHorizontal: 4,
    },
    wordsContainer: {
        flexDirection: "row",
        backgroundColor: '#ffffff',
        borderWidth: 2,
        borderColor: '#ffffff'
    },
    word: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        textAlign: 'center',
        color: '#110B11',
        paddingVertical: 12
    },
    enwrdstyle: {
        borderRightWidth: 2,
        borderColor: '#E2E2E2'
    },
    eswrdstyle: {
        borderLeftWidth: 2,
        borderColor: '#E2E2E2'
    },
    exampleContainer: {
    },
    exampleEn: {
        backgroundColor: '#ffffff',
    },
    exampleEs: {
        backgroundColor: '#ffffff',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderWidth: 2,
        borderColor: '#ffffff'
    },
    exampletitle: {
        fontSize: 12,
        fontFamily: 'Inter-Bold',
        color: '#110B11',
        position: 'relative',
        opacity: .8,
        top: 2,
        left: 12
    },
    exampletext: {
        fontSize: 16,
        fontFamily: 'Inter-Light',
        color: '#110B11',
        textAlign: 'center',
        paddingBottom: 12,
        paddingHorizontal: 24
    },
})