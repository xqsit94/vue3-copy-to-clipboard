import copy from 'copy-to-clipboard'

export function useCopyToClipboard() {
  const copyToClipboard = (data: string) => {
    try {
      copy(data)
    } catch (error) {
      throw new Error('Unable to copy')
    }
  }

  return {
    copyToClipboard,
  }
}
