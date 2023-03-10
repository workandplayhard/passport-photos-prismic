import { toast, TypeOptions, ToastPosition } from 'react-toastify'

export const useToast = () => {
  const addToast = (
    message: string,
    type: TypeOptions = 'success',
    position: ToastPosition = 'top-right',
  ) => {
    if (!message) return
    toast(message, {
      type,
      position,
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  return addToast
}
