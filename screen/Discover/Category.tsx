import React, { useState } from 'react'
import { FlatList, StyleSheet, Image, SafeAreaView, } from 'react-native'
import Button from '../../components/formElements/Button'
import { COLORS } from '../../constants/Colors'
import Data from '../../constants/Data'
import { ApplicationState } from '../../redux/ReduxStore'
import Search from './Search'
import { useSelector } from "react-redux"

const Category = () => {
    const { tags } = useSelector((state: ApplicationState) => state.tagReducer)
    const [isSelect, setSelect] = useState<number>()
    return (
        <SafeAreaView style={styles.categoryContent}>
            <FlatList
                data={tags}
                keyExtractor={item => String(item.Id)}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <>
                        {index == 0 && <Search />}
                        <Button
                            onPress={() => setSelect(item.Id)}
                            position={"left"}
                            icon={
                                <Image source={{ uri: item.IconUrl }} style={styles.image} />
                            }
                            title={item.Name}
                            style={isSelect === item.Id ? styles.buttonActive :styles.buttonPasive}
                            textStyle={styles.text}
                        />
                    </>

                )}
            />

        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    categoryContent: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15
    },
    buttonPasive: {
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginHorizontal: 5
    },
    buttonActive: {
        borderWidth: 2,
        borderColor: COLORS.red,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginHorizontal: 5
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 5,
    },
    text: {
        color: COLORS.black,
        fontSize: 13
    }
})
export default Category