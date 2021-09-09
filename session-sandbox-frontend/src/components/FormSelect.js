import { FormGroup, Label, Input, Col } from 'reactstrap';


const FormSelect = ({ id, value, labelText, items, handleChange }) => {
  return (
    <FormGroup row>
      <Label for={id} xs={3} md={2}>{labelText}</Label>
      <Col xs={9} md={10}>
        <Input name={id} id={id} value={value}
          onChange={handleChange}
          type='select'>
          {
            items.map((item, i) =>
              <option value={item} key={id + i}>{item}</option>
            )
          }
        </Input>
      </Col>
    </FormGroup>
  );
}

export default FormSelect;
