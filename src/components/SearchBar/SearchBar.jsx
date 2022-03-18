import { useState } from 'react';
import PropTypes from 'prop-types';

import { SearchForm } from './SearchForm.styled';
import { ButtonSearch } from './ButtonSearch.styles';
import { Label } from './Label.styles';
import { Input } from './Input.styles';

SearchBar.propTypes = {
  onSubmit:PropTypes.func.isRequired,
};

export default function SearchBar({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleChange = evt => {
    const { value } = evt.target;
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const strValue = value.trim();
    if (!strValue) {
      reset();
      return;
    }
    onSubmit(strValue);
    reset();
  };

  const reset = () => {
    setValue('');
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <ButtonSearch type="submit">
        <Label>Search</Label>
      </ButtonSearch>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        value={value}
        onChange={handleChange}
      />
    </SearchForm>
  );
}
