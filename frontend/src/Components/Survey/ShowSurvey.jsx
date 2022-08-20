import React from "react";

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

  NewOption(){
    return(
        <li>
            <input type="radio" id="html" name="fav_language" value="HTML"/>
            <label for="html">First option</label><br/>
        </li>
    )
  }

  render() {

    return (
        <div className="form-popup">
            <form className="form-container" onSubmit={this.handleSubmit}>
                <label for="question"><b>Question</b></label>
                <p>
                    You shoud answer this Question
                </p>
                <label for="option"><b>Option</b></label>
                {this.state.formValues.map((element, index) => (
                    <div className="option" key={index}>
                        <ul>
                            <li>
                                <input type="radio" id="html" name="fav_language" value="HTML"/>
                                <label for="html">First option</label><br/>
                            </li>
                            <li>
                                <input type="radio" id="html" name="fav_language" value="HTML"/>
                                <label for="html">second option</label><br/>
                            </li>
                            {
                                index ? 
                                this.NewOption()
                                : null
                            }
                        </ul>
                    </div>
                ))}
                
                <button className="sumbit-btn" type="submit">send</button>
            </form>
        </div>
    );
  }
}
export default CreateSurvey;