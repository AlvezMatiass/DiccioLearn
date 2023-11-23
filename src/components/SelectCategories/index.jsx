import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { useState } from 'react'

const SelectCategories = () => {

    const [ selected, setSelected ] = useState(true)

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.selectContainer, selected === true ? styles.borderSelected : '']} onPress={() => setSelected(true)}>
                <Text style={styles.selectText}>Daily Words</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.selectContainer, selected === false ? styles.borderSelected : '']} onPress={() => setSelected(false)}>
                <Text style={styles.selectText}>All words</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SelectCategories
