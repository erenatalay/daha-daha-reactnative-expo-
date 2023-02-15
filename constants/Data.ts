import { Category } from "../interface/Category";
import { Slides } from "../interface/Slides";
import { COLORS } from "./Colors";
import Images from "./images";

const CategoryData : Category[] = [
    {
        id : 1,
        name : "Coca Cola",
        image : Images.colaIcon
    },
    {
        id : 2,
        name : "Sprite",
        image : Images.spriteIcon
    },
    {
        id : 3,
        name : "Trendyol",
        image : Images.trendyolIcon
    }
]

const SlidesData : Slides[] = [
    {
        id : 1,
        title : "2,5 LT Coca-Cola kapakları Coca-Cola + Coffee kazandırıyor!",
        icon : Images.colaIcon,
        image : Images.cola,
        category : 1,
        color : COLORS.red
    },
    {
        id : 2,
        title : "2,5 LT Sprite kapakları 330 ML Kutu kazandırıyor!",
        icon : Images.spriteIcon,
        image : Images.sprite,
        category : 2,
        color : COLORS.green

    },
    {
        id : 3,
        title : "Trendyol beyaz eşyalarda büyük indirim.",
        icon : Images.trendyolIcon,
        image : Images.trendyol,
        category : 3,
        color : COLORS.orange
    }
]


export default {
    CategoryData,
    SlidesData
}