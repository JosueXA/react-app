import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import Notes from './Notes';



export default class App extends React.Component {
  constructor( props ) {
    super( props );

    // Este es el estado con el que trabaja React (simulando una base de datos) hardcoded
    this.state = {
      notes: [
        {
          id: uuidv4(),
          task: 'Learn React'
        }, {
          id: uuidv4(),
          task: 'Do laundry'
        }]
    };
  }

  render() {
    const { notes } = this.state;
    
    return (
      <div>
        <button onClick={ this.addNote }>+</button>
        <Notes 
          notes={ notes } 
          onNoteClick={ this.activateNoteEdit }
          onEdit={ this.editNote }
          onDelete={ this.deleteNote }
        />
      </div>
    );
  }

  addNote = () => {
    // Es posible escribir esto de forma imperativa, es decir,
    // a través de `this.state.notes.push` y, después,
    // `this.setState({notes: this.state.notes})`.
    //
    // Suelo favorecer el estilo funcional cuando tiene sentido.
    // Incluso cuando es necesario escribir más código, ya que
    // prefiero los beneficios (facilidad para razonar, no
    // efectos colaterales) que trae consigo.
    //
    // Algunas librerias, como Immutable.js, van un paso más allá.
    this.setState({
      notes: this.state.notes.concat([{
        id: uuidv4(),
        task: 'New task'
      }])
    });
  }

  deleteNote = ( id, e ) => {
    // Dejar de procesar eventos para poder editar
    e.stopPropagation();
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  activateNoteEdit = ( id ) => {
    this.setState({
      notes: this.state.notes.map( note => {
        if( note.id === id ) {
          note.editing = true;
        }
        return note;
      })
    });
  }

  editNote = ( id, task ) => {
    this.setState({
      notes: this.state.notes.map( note => {
        if( note.id === id ) {
          note.editing = false;
          note.task = task;
        }
        return note;
      })
    });
  }
}
