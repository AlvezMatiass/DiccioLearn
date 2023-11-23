import { TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { styles } from './style'

const AddPublication = ({ onHandlerNavigation }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onHandlerNavigation}>
            <View style={styles.buttonContainer}>
                <Entypo name="plus" size={32} color="#110B11" />
            </View>
        </TouchableOpacity>
    )
}

export default AddPublication