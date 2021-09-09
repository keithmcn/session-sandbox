import { FormGroup, Label, Input, Col } from 'reactstrap';


const FormInput = ({ id, value, labelText, placeholder, handleChange, required, pattern }) => {
  return (
    <FormGroup row>
        <Label for={id} xs={3} md={2}>{labelText}</Label>
        <Col xs={9} md={10}>
        <Input name={id} id={id} value={value}
          onChange={handleChange}
          placeholder={placeholder}
          {...pattern ? pattern = { pattern } : ''}
          {...required ? required = "required" : ''} />
      </Col>
    </FormGroup>
  );
}

export default FormInput;
