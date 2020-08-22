import React, { Component } from "react";
import Todolist from "./components/Todolist";
import Todoinput from "./components/Todoinput";
import Todoitem from "./components/Todoitem";
import uuid from "react-uuid";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
                 state = {
                   items: [],
                   id: uuid(),

                   item: "",
                   editItem: false,
                 };
                 handleChange = (e) => {
                   this.setState({
                     item: e.target.value,
                   });
                 };
                 handleSubmit = (e) => {
                   e.preventDefault();
                   const newItem = {
                     id: this.state.id,
                     title: this.state.item,
                   };
                   const UpdatedItems = [...this.state.items, newItem];
                   this.setState(
                     {
                       items: UpdatedItems,
                       id: uuid(),
                       item: "",
                       editItem: false,
                     },
                     () => console.log(this.state)
                   );
                 };
                 handleEdit = (id) => {
                   const filteredItems = this.state.items.filter(
                     (item) => item.id !== id
                   );
                   const selectedItem = this.state.items.find(
                     (item) => item.id === id
                   );
                   this.setState({
                     items: filteredItems,
                     item: selectedItem.title,
                     id: id,
                     editItem: true,
                   });
                 };
                 handleDelete = (id) => {
                   const DeletedItems = this.state.items.filter(
                     (item) => item.id !== id
                   );
                   this.setState({
                     items: DeletedItems,
                   });
                 };
                 handleClear = (id) => {
                   this.setState({
                     items: [],
                   });
                 };
                 render() {
                   return (
                     <div className="container">
                       <div className="row">
                         <div className="col-10 mx-auto col-md-8 mt-5">
                           <h3 className="text-capitalize text-center">
                             todo input
                           </h3>
                           <Todoinput
                             item={this.state.item}
                             handleChange={this.handleChange}
                             handleSubmit={this.handleSubmit}
                             editItem={this.state.editItem}
                           />
                           <Todolist
                             items={this.state.items}
                             clearList={this.handleClear}
                             handleDelete={this.handleDelete}
                             handleEdit={this.handleEdit}
                           />
                         </div>
                       </div>
                     </div>
                   );
                 }
               }
