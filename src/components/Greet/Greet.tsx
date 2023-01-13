
interface Props {
    message: string
}

const Gretting = (props: Props) => {
    const { message = '' } = props

  return (
    <div>
        <p>{message}</p>
    </div>
  )
}

export default Gretting