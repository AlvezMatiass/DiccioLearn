import { View, Text, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react';
import { styles } from './style'
import { PublicationInput } from '../../components'
import {
    useSendWordsMutation
} from '../../store/words/api'

const CreatePublication = ({ navigation }) => {

    const onHandlerGoBack = () => {
        navigation.goBack()
    }

    const [enword, setEnword] = useState('');
    const [esword, setEsword] = useState('');
    const [enphrase, setEnphrase] = useState('');
    const [esphrase, setEsphrase] = useState('');

    const [ sendWords, { data, isLoading, error, isSuccess }] = useSendWordsMutation();

    useEffect(() => {
        if ( isSuccess ) {
            setEnphrase('')
            setEsphrase('')
            setEnword('')
            setEsword('')
        }
    }, [isSuccess])

    

    const onHandlerSendWord = async () => {
        await sendWords({ esword, enword, esphrase, enphrase })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textDesc}>Add the word you want to practice</Text>
            <PublicationInput
            text='Place a English world'
            whatText={enword}
            setWhatText={setEnword}
            />
            <PublicationInput
            text='Place a Spanish world'
            whatText={esword}
            setWhatText={setEsword}
            />
            <Text style={styles.textDesc}>Can you post a sample sentence so we can practice?</Text>
            <PublicationInput
            text='Place a sentence in English'
            whatText={enphrase}
            setWhatText={setEnphrase}
            />
            <PublicationInput
            text='Place a sentence in Spanish'
            whatText={esphrase}
            setWhatText={setEsphrase}
            />
            <View style={styles.publicarContainer}>
                <TouchableOpacity onPress={onHandlerGoBack}>
                    <Text style={[styles.publicarText, styles.cancelText]}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onHandlerSendWord}>
                    <Text style={styles.publicarText}>CREATE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreatePublication