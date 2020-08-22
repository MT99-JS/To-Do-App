import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Todoinput extends Component {
  render() {
    const {
      editItem,
      item,
      handleChange,
      handleSubmit,
      handleDelete,
    } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add todo item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-block btn-primary mt-3 text-uppercase"
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
