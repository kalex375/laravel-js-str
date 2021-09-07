export default function forceString(any) {
    if (typeof any === 'string') return any
    if (any === null) return ''
    if (any === undefined) return ''
    return String(any)
}