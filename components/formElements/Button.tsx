import React, { FC, ReactNode } from 'react'
import { TouchableOpacity, ButtonProps, Text, ViewStyle, TextStyle, StyleSheet } from 'react-native'
interface IButton extends ButtonProps {
    style?: ViewStyle
    textStyle?: TextStyle
    icon?: ReactNode
    position?: "left" | "right"
}
const Button: FC<IButton> = (props) => {
    const { title, style, onPress, textStyle, icon, position } = props;
    return (
        <TouchableOpacity style={[styles.button,style]} onPress={onPress}>
            {position == "left" && icon}
            <Text style={[styles.text, textStyle]}>{title}</Text>
            {position == "right" && icon}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button : {
        flexDirection : "row",
        alignItems : "center"
    },
    text: {
        textAlign: "center"
    }
})
export default Button