const PRESSURE_UNIT = 0.750062

export const getPreasuremm = (hpa) => {
    return Math.round(hpa * PRESSURE_UNIT)
}

export const getTime = (sec) => {
    return new Date(sec * 1000).toLocaleTimeString('uk-UA', { timeZone: 'Atlantic/Reykjavik' })
}