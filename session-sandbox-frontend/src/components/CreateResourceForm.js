import React, {Component} from 'react';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import {Alert, Button, FormGroup} from 'reactstrap';
import properties from '../constants/Constants';


class CreateResourceForm extends Component {

  defaultValues = {
    title: '',
    link: '',
    user: '',
    subject: properties.resourceSubjects[0],
    club: properties.clubs[0],
    type: properties.resourceTypes[0],
    description: '',
    message: 'placeholder',
    alertClass: 'primary',
    showMessage: false
  }

  constructor(props) {
    super(props);
    this.state = {
      item: this.defaultValues
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { item } = this.state;

    let msg = '';
    let alertClass = 'primary';

    await fetch('/api/resources', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    })
      .then(async response => {
        if (response.ok) {
          // Handle Success
          const text = await response.text();
          msg = 'Response: ' + response.status + ' - ' + response.statusText + '  --  ' + text;
          this.clearForm();

        } else {
          const text = await response.text();
          const errorMsg = response.status + ' - ' + response.statusText + '  --  ' + text;
          msg = errorMsg;
          alertClass = 'warning';
          return Promise.reject(errorMsg);
        }
      })
      .catch(error => {
        // Handle Error
        console.error(error);
      });

    let newItem = this.defaultValues;

    this.showAlert(newItem, msg, alertClass);
  }

  clearForm() {
    const item = this.defaultValues;
    this.setState({ item });
  }

  showAlert(item, message, alertClass){
    this.updateAlert(item, message, alertClass, true );
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    let item = { ...this.state.item };
    item[name] = value;

    this.setState({ item });
  }

  handleReset() {
    let item = this.defaultValues;

    item.showMessage = false;
    item.message = '';
    item.alertClass = 'primary';

    this.setState({ item });
  }

  onDismiss(){
    const { item } = this.state;
    this.updateAlert(item, '',  'primary', false);
  }

  updateAlert(item, message, alertClass, show){
    item.message = message;
    item.alertClass = alertClass;
    item.showMessage = show;
    this.setState({ item });
  }

  render() {
    const { item } = this.state;

    return (
      <fieldset style={{ padding: '1em', border: '0.1em solid black' }}>

        <form id='createResourceForm' onSubmit={this.handleSubmit}>

          <FormInput id='title' labelText='Title'
            handleChange={this.handleChange} value={item.title || ''} />

          <FormSelect id='type' labelText='Type'
            handleChange={this.handleChange} value={item.type || ''}
            items={properties.resourceTypes} />

          <FormSelect id='subject' labelText='Subject'
                      handleChange={this.handleChange} value={item.subject || ''}
                      items={properties.resourceSubjects} />

          <FormSelect id='club' labelText='Club'
                      handleChange={this.handleChange} value={item.club || ''}
                      items={properties.clubs} />

          <FormInput id='link' labelText='Link'
                     handleChange={this.handleChange} value={item.link || ''} />

          <FormInput id='user' labelText='User'
                     handleChange={this.handleChange} value={item.user || ''} />

          <FormGroup>
            <div className="clearfix" style={{ padding: '.5rem' }}>
              <Button color="primary" className='float-left' type='submit'>Submit</Button>
              <Button color='secondary' className="float-right" type='reset'
                onClick={this.handleReset}>Reset</Button>
            </div>
          </FormGroup>

          <FormGroup>
            <Alert color={this.state.item.alertClass} toggle={this.onDismiss}
                         isOpen={this.state.item.showMessage} >
              <span id='feedbackMessage'>{this.state.item.message}</span>
            </Alert>
          </FormGroup>
        </form>

      </fieldset>
    );
  }

}

export default CreateResourceForm;
