import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'
import TodoItems from './TodoItems'

class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
      }
    }
  }
  handleItem = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem
    })
  }
  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items,
        currentItem: { text: '', key: '' }
      })
    }
  }
  render() {
    return(
      <div className="App">
        <TodoList 
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleItem={this.handleItem}
          currentItem={this.state.currentItem}
        />
        <TodoItems 
          entries={this.state.items}
          deleteItem={this.deleteItem}
        />
      </div>
    )
  }
}
export default App;
