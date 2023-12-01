


interface Props{
    setselect : ()=> void
}

const Alert = ({setselect}: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible show fade" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close " onClick={setselect}> </button>
</div>
  )
}

export default Alert