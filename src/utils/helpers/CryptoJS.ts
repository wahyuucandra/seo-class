import CryptoJS from 'crypto-js'

const secret = process.env.NEXT_PUBLIC_SECRET_KEY ? process.env.NEXT_PUBLIC_SECRET_KEY : 'secret'
const saltString = process.env.NEXT_PUBLIC_SALT_KEY ? process.env.NEXT_PUBLIC_SALT_KEY : 'salt'
const saltHex = Buffer.from(saltString, 'utf8').toString('hex')
const salt = CryptoJS.enc.Hex.parse(saltHex)

const key = CryptoJS.PBKDF2(secret, salt, {
  keySize: 256 / 32,
  iterations: 65536,
  hasher: CryptoJS.algo.SHA256,
})

const makeUrlSafe = (str: string) => {
  return str?.replace(/\+/g, '-')?.replace(/\//g, '_')?.replace(/=+$/, '')
}

const revertUrlSafe = (str: string) => {
  let result = str?.replace(/-/g, '+')?.replace(/_/g, '/')

  while (result.length % 4) {
    result += '='
  }
  return result
}

export function encryptAES(strToEncrypt: string) {
  try {
    const iv = CryptoJS.lib.WordArray.random(16)
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(strToEncrypt), key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })

    const ivBase64 = CryptoJS.enc.Base64.stringify(iv)
    const ciphertextBase64 = encrypted.toString()
    const combined = `${ivBase64}:${ciphertextBase64}`

    return encodeURIComponent(makeUrlSafe(combined))
  } catch (error) {
    return `Encryption failed: ${error}`
  }
}

export function decryptAES(strToDecrypt: string) {
  try {
    const decoded = decodeURIComponent(strToDecrypt)
    const base64Str = revertUrlSafe(decoded)
    const [ivBase64, ciphertextBase64] = base64Str.split(':')

    if (!ivBase64 || !ciphertextBase64) {
      throw new Error('Invalid encrypted string format')
    }

    const iv = CryptoJS.enc.Base64.parse(ivBase64)
    const decrypted = CryptoJS.AES.decrypt(ciphertextBase64, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })

    return decrypted.toString(CryptoJS.enc.Utf8)
  } catch (error) {
    return `Decryption failed:${error}`
  }
}

// export function encryptAES(strToEncrypt: string) {
//   try {
//     // Generate a new IV for each encryption
//     const iv = CryptoJS.lib.WordArray.random(16)
//     const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(strToEncrypt), key, {
//       iv: iv,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7,
//     })
//     // Combine IV and ciphertext in a format: "IV_BASE64:CIPHERTEXT_BASE64"
//     const ivBase64 = CryptoJS.enc.Base64.stringify(iv)
//     const ciphertextBase64 = encrypted.toString()
//     return `${ivBase64}:${ciphertextBase64}`
//   } catch (e) {
//     return `Error while encrypting: ${e}`
//   }
// }
//
// export function decryptAES(strToDecrypt: string) {
//   try {
//     // Split the IV and ciphertext from the combined string
//     const [ivBase64, ciphertextBase64] = strToDecrypt.split(':')
//     const iv = CryptoJS.enc.Base64.parse(ivBase64)
//     const decrypted = CryptoJS.AES.decrypt(ciphertextBase64, key, {
//       iv: iv,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7,
//     })
//     return decrypted.toString(CryptoJS.enc.Utf8)
//   } catch (e) {
//     return `Error while decrypting: ${e}`
//   }
// }
