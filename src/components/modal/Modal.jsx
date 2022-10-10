import React, { Component } from "react";
import PropTypes from "prop-types";
import "./modal.scss";

class Modal extends Component {
  state = {
    title: "",
    description: "",
    date: "",
    startTime: "",
    endTime: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: `${value}`,
    });
  };

  render() {
    return (
      <div className="modal overlay">
        <div className="modal__content">
          <div className="create-event">
            <button
              className="create-event__close-btn"
              onClick={this.props.closeModal}
            >
              +
            </button>
            <form
              className="event-form"
              onSubmit={() => this.props.createEvent(event, this.state)}
            >
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                onChange={this.handleChange}
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field"
                  onChange={this.handleChange}
                />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  onChange={this.handleChange}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  onChange={this.handleChange}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                onChange={this.handleChange}
              ></textarea>
              <button type="submit" className="event-form__submit-btn">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  createEvent: PropTypes.func.isRequired,
};

export default Modal;
