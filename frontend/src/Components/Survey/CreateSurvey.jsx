import React from "react";

import {
    FaMinus,
    FaPlus
  } from "react-icons/fa";

class CreateSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ question: "", option : "" }]
     };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.question] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState(({
      formValues: [...this.state.formValues, { option: "" }]
    }))
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(this.state.formValues));
  }

  render() {

    return (
        <div className="form-popup">
            <form className="form-container" onSubmit={this.handleSubmit}>
                <label for="question"><b>Question</b></label>
                <input type="text" placeholder="Enter Question" name="question" required/>
                <label for="option"><b>Option</b></label>
                {this.state.formValues.map((element, index) => (
                    <div className="remove-option" key={index}>
                    {
                        index ? 
                        <button type="button"  className="remove-btn" onClick={() => this.removeFormFields(index)}><FaMinus /></button> 
                        : null
                    }
                    <input type="text" name="option" placeholder="Enter Option" value={element.option || ""} onChange={e => this.handleChange(index, e)} required/>
                    <button className="add-btn" type="button" onClick={() => this.addFormFields()}><FaPlus /></button>
                    </div>
                ))}
                
                <button className="sumbit-btn" type="submit">send</button>
            </form>
        </div>
    );
  }
}
export default CreateSurvey;