import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

const Settings = ( ) => {
    return ( 
        <View style={styles.container}>
            <TouchableOpacity><Text style={styles.settingText}>Add Words</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.settingText}>Notificaciones</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.settingText}>Terminos y condiciones</Text></TouchableOpacity>
        </View>
    )
}

export default Settings