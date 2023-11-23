import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.59,
        shadowRadius: 4.65,

        elevation: 20,
    },
    wordsContainer: {
        flexDirection: "row",
        backgroundColor: '#F8F8F8',
        borderTopRightRadius: 30,
    },
    word: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        textAlign: 'center',
        color: '#110B11',
        paddingVertical: 8
    },
    enwrdstyle: {
        borderRightWidth: 1,
        borderColor: '#E2E2E2'
    },
    eswrdstyle: {
        borderLeftWidth: 1,
        borderColor: '#E2E2E2'
    },
    exampleContainer: {
    },
    exampleEn: {
        backgroundColor: '#F8F8F8',
    },
    exampleEs: {
        backgroundColor: '#F8F8F8',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
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
        paddingBottom: 16,
        paddingHorizontal: 24
    },
})