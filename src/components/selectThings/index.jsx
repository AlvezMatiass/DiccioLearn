import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { AntDesign, Ionicons } from '@expo/vector-icons';

const SelectThings = ( { handleReloadWords, onHandlerNavigationSetting } ) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.secundaryThing} onPress={handleReloadWords}>    
                <AntDesign name="reload1" size={20} color='#110B11'/> 
            </TouchableOpacity>
            <View style={styles.test}>
                <Ionicons name="book-outline" size={32} color='#110B11' />
            </View>
            <TouchableOpacity style={styles.secundaryThing} onPress={onHandlerNavigationSetting}>
                <Ionicons name="settings-outline" size={20} color='#110B11' />
            </TouchableOpacity>
        </View>
    )
}

export default SelectThings