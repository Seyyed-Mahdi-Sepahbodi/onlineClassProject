import React from "react";

import {
    FaMinus,
    FaPlus
  } from "react-icons/fa";

class Survey extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ question: "", option : "" }]
     };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.option] = e.target.value;
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
    const formValues = this.state.formValues; 
    return (
        <div className="form-popup">
            <form className="form-container" onSubmit={this.handleSubmit}>
                <label for="question"><b>Question</b></label>
                <input type="text" placeholder="Enter Question" name="question" required/>
                <label for="option"><b>Option</b></label>
                {formValues.map((element, index) => (
                    <div className="remove-option" key={index}>
                    {
                        index ? 
                        <button type="button"  className="remove-btn" onClick={() => this.removeFormFields(index)}><FaMinus style={{padding:0}} /></button> 
                        : <button className="add-btn" type="button" onClick={() => this.addFormFields()}><FaPlus /></button>
                    }
                      
                      <input type="text" name="option" placeholder="Enter Option" value={ (element.option!=="") ? element.option : null } onChange={e => this.handleChange(index, e)} required/>
                    </div>
                ))}
                
                <button className="sumbit-btn" type="submit">send</button>
            </form>
        </div>
    );
  }
}
export default Survey;