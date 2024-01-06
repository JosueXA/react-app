

const Note = ({task, onDelete}) => (
  <>
    <span>{ task }</span>
    <button onClick={ onDelete }>x</button>
  </>
)

export default Note;