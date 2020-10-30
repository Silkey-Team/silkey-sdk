export const isNotSet = function (v) {
  // eslint-disable-next-line valid-typeof
  return v === null || typeof v === 'undefined' || typeof v === undefined
}

export const isSet = function (v) {
  return !isNotSet(v)
}

export const isEmpty = function (v) {
  return isNotSet(v) || v === {} || v === ''
}

const remove0x = v => v.toString().slice(0, 2).toLowerCase() === '0x' ? v.toString().slice(2) : v

export const prepend0x = v => v.toString().slice(0, 2).toLowerCase() === '0x' ? v : `0x${v}`

export const isHex = v => {
  if (isEmpty(v)) {
    return false
  }

  const no0x = remove0x(v)

  for (let i = 0; i < no0x.length; i++) {
    if (isNaN(parseInt(no0x.charAt(i), 16))) {
      return false
    }
  }

  return true
}

export const isPrivateKey = pk => isHex(pk) && remove0x(pk).length === 62

export const isEthereumAddress = pk => isHex(pk) && remove0x(pk).length === 40

export const isSignature = sig => isHex(sig) && remove0x(sig).length === 130
