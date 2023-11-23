import { View, TextInput, Text } from 'react-native'
import { styles } from './style';

const PublicationInput = ({whatText, setWhatText, text}) => {
   
    return (
        <View style={styles.container}> 
            
            <View style={styles.inputwrdcontainer}>
                <TextInput
                style={styles.input}
                onChangeText={setWhatText}
                value={whatText}
                placeholder={text}
                maxLength={100}
                />
            </View>
        </View>
    )
}

export default PublicationInput