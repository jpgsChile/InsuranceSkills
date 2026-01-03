/**
 * Codifica un ID para usarlo en URLs
 * Los IDs pueden contener caracteres especiales como ':' que necesitan codificación
 */
export function encodeId(id: string): string {
  return encodeURIComponent(id)
}

/**
 * Decodifica un ID recibido desde una URL
 */
export function decodeId(encodedId: string): string {
  try {
    return decodeURIComponent(encodedId)
  } catch (e) {
    // Si falla la decodificación, devolver el ID original
    return encodedId
  }
}




