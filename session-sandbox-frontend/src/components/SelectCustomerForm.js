import React, {Component} from 'react';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import {Alert, Button, FormGroup} from 'reactstrap';
import customers from '../constants/Customers';


class SelectCustomerForm extends Component {

  defaultValues = {
    customerId: customers[0],
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

        <form id='selectCustomerForm' onSubmit={this.handleSubmit}>

          <FormSelect id='type' labelText='Select Customer'
            handleChange={this.handleChange} value={item.customerId || ''}
            items={customers} />

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

export default SelectCustomerForm;
