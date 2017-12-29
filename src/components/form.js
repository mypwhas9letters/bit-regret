import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

import { fetchHistoricalDetail } from '../actions/coin_actions';


class Newform extends Component {
  renderField(field) {
    return (
      <div>
      <label>{field.label}</label>
        <input type="text" {...field.input}/>
        {field.meta.touched ? field.meta.error : ""}
      </div>
    )
  }

  onSubmit = (values) => {
    this.props.fetchHistoricalDetail(values, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name='title' label='Title' component={this.renderField} />
        <Field name='tags' label='Tags' component={this.renderField} />
        <button type='submit'>Submit</button>
      </form>
    )
  }

}

function validate(values){
  const errors = {};
  if(!values.title){
    errors.title = "Enter a title!";
  }
  if(!values.tags){
    errors.tag = "Enter a tag!";
  }
  return errors
}

export default reduxForm({
  validate,
  form: 'Newform'
})(connect(null, { fetchHistoricalDetail })(Newform));
