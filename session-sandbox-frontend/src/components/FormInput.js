import { FormGroup, Label, Input, Col } from 'reactstrap';


const FormInput = ({ id, value, labelText, placeholder, handleChange, handleBlur, required, pattern, type }) => {
  return (
    <FormGroup row>
        <Label for={id} xs={3} md={2}>{labelText}</Label>
        <Col xs={9} md={10}>
        <Input name={id} id={id} value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          {...type ? type = { type } : ''}
          {...pattern ? pattern = { pattern } : ''}
          {...required ? required = "required" : ''} />
      </Col>
    </FormGroup>
  );
}

export default FormInput;
