import { ReactNode } from "react"

interface Props{
    children:ReactNode
    onClose:() => void
}
const Alert = ({children, onClose}:Props) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{children}</strong> You should check in on some of those fields below.
  <button type="button" onClick={onClose} className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  )
}

export default Alert