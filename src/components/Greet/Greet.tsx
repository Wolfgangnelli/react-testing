
interface Props {
    name?: string
}

const Gretting = (props: Props) => {
    const { name = '' } = props

  return (
    <div>
        <p>Hi {name}</p>
    </div>
  )
}

export default Gretting