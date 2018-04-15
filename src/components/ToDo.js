 import React, { Component } from 'react';

 class ToDo extends Component {
   render() {
     return (
       <div>
       <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
      </li>
      <button onClick={ this.props.deleteTodo }>
      Delete
      </button>
      </div>
     );
   }
 }

 export default ToDo;
