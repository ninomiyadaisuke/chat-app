import crypto from 'crypto'
export const gravatarPath = (string) => {
    const lowerCase = string.trim().toLowerCase()
    const md5 = crypto.createHash('md5')
    const digest = md5.update(lowerCase, 'binary').digest('hex')

    return (
        `https://www.gravatar.com/avatar/${digest}/?d=robohash`
    )
}