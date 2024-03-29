import { View, Text, ScrollView, ActivityIndicator, FlatList, TouchableOpacity, Animated } from 'react-native'
import { AddPublication, Publication, SelectCategories, SelectThings } from '../../components'
import { styles } from './style'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { fetchWords } from '../../store/words/words.slice'
import { useGetWordsQuery } from '../../store/words/api'


const Home = ({ navigation }) => {

    const dispatch = useDispatch()

    const [randomWords, setRandomWords] = useState([]);
    const { data , loading } = useSelector((state) => state.words)
    const { data: dataWords } = useGetWordsQuery()

    const onHandlerNavigation = () => {
        navigation.navigate('CreatePublication')
    }

    const onHandlerNavigationSetting = () => {
        navigation.navigate('Settings')
    }

    useEffect(() => {
        dispatch(fetchWords(dataWords))
    },[dataWords])

    useEffect(() => {
        if (dataWords) {
          generateRandomWords(dataWords);
        }
    }, [dataWords]);

    const generateRandomWords = (data) => {
        const wordsArray = Object.values(data);
        const randomIndexes = getRandomIndexes(wordsArray.length, 5);
        const selectedWords = randomIndexes.map((index) => wordsArray[index]);
    
        setRandomWords(selectedWords);
    };

    const getRandomIndexes = (max, count) => {
        const indexes = [];
        while (indexes.length < count) {
            const randomIndex = Math.floor(Math.random() * max);
            if (!indexes.includes(randomIndex)) {
                indexes.push(randomIndex);
            }
        }
        return indexes;
    };

    const handleReloadWords = () => {
        if (dataWords) {
            generateRandomWords(dataWords);
        }
    };


    if (loading || randomWords.length === 0) {
        return (
          <View style={styles.container}>
            <ActivityIndicator />
          </View>
        );
    }

    return (
        <View style={styles.container}>
            <AddPublication onHandlerNavigation={onHandlerNavigation}/>
            <SelectThings handleReloadWords={handleReloadWords} onHandlerNavigationSetting={onHandlerNavigationSetting} />
                <View style={styles.relleno}>
                    <Text style={styles.textRelleno}>relleno</Text>
                </View>
                <FlatList 
                data={randomWords}
                style={styles.flatlist}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <View style={styles.dailyContainer}>
                        <Publication
                        wordEn={item.enword}
                        wordEs={item.esword}
                        exampleEn={item.enphrase}
                        exampleEs={item.esphrase} />
                    </View>
                    
                )}
                keyExtractor={(item, index) => index.toString()}
                />
        </View>
    )
}

export default Home