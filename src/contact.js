


import React from 'react';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  renderForm() {
    return (
      <form
        onSubmit={this.submitForm}
        action="https://script.google.com/macros/s/AKfycbxjoX4s1cZ114Vd_VLE9gN8_GajFUnhIuYoswYwKKxT3NGBWpnJ8Wgx875GilrHb1FK/exec"
        method="POST"
      >
        <p>
          Hire me!
        </p>
        <div className="row_10">
          <div className="col-25">
          </div>
          <div className="col-75">
            <input type="text" id="Email" name="Email" placeholder="Your email"/>
          </div>
        </div>
        <div className="row_10">
          <div className="col-25">
          </div>
        </div>
        <div className="row_10">
          <div className="col-25">
          </div>
          <div className="row_10">
            <textarea className="col-75_T" id="subject" name="subject"  placeholder="What can I do for your company or project?" style={{"height": "110px"}}></textarea>
          </div>
        </div>
        <div className="subm_button">
          <div className="col-25">
            <a href=""><input  onClick="fbq('track', 'Contact');" type="submit" value="Submit"/></a>
          </div>
        </div>
      </form>
    );
  }
  
  render() {
    const { status } = this.state;
    const submitted = status === "SUCCESS";
    return (
      <div style={{marginBottom: '50px'}}>
      {!submitted && this.renderForm()}
        {submitted  && <h2>Thank you for your interest! <br/> I'll talk to you soon! <br/></h2>}
        {status === "ERROR" && <h3 >Oops! There was an error.</h3>}
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}