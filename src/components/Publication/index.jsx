import { View, Text } from 'react-native'
import { styles } from './style'

const Publication = ({wordEn, wordEs, exampleEn, exampleEs}) => {
    return (
        <View style={styles.container}>
            <View style={styles.wordsContainer}>
                <Text style={[styles.word, styles.enwrdstyle]}>{wordEn}</Text>
                <Text style={[styles.word, styles.eswrdstyle]}>{wordEs}</Text>
            </View>
            <View style={styles.exampleContainer}>
                <View style={styles.exampleEn}>
                    <Text style={styles.exampletitle}>EN</Text>
                    <Text style={styles.exampletext}>{exampleEn}</Text>
                </View>
                <View style={styles.exampleEs}>
                    <Text style={styles.exampletitle}>ES</Text>
                    <Text style={styles.exampletext}>{exampleEs}</Text>
                </View>
            </View>
        </View>
    )
}

export default Publication