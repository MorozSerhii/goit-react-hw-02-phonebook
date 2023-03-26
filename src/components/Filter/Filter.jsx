import { Label, Form, InputName, TextFilter } from './Filter.styled';

export const Filter = ({ filter, change }) => {
  return (
    <Form>
      <Label>
        <TextFilter>Find contacts by name</TextFilter>
        <InputName
          type="text"
          name="filter"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={filter}
          onChange={change}
        />
      </Label>
    </Form>
  );
};
