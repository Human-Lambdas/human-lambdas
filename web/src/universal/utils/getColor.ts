import stringToHash from './stringToHash'
import {BackgroundColors} from 'client/styles/palette'

const getColor = (identifier) => BackgroundColors[identifier % BackgroundColors.length]

export const colorFromString = (string) => getColor(Math.abs(stringToHash(string)))

export const colorByIndex = (index: number) => getColor(index)
