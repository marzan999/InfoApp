import { colors } from '../../theme/color'
import { typography } from '../../theme/typography'

const BASE = {
    fontFamily: typography.primary,
    fontSize: 14, 
    color: colors.black
}
const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    color: colors.white
}
const BOLD = {
    fontFamily: typography.bold,
    color: colors.black
}


export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 35,
    },
    h2: {
        ...BOLD,
        fontSize: 28,
    },
    h3: {
        ...BASE_BOLD,
        fontSize: 24,
    },
    h4: {
        ...BASE_BOLD,
        fontSize: 13,
    },
    h5: {
        ...BASE,
        fontSize: 20,
    },

}