import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBox = styled.input`
  width: 100%;
  border: 3px solid #10aac2;
  margin: 32px 0 16px;
  padding: 6px 8px;
  font-size: 18px;
  color: #f5f5f5;
  background-color: black;
`;

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const Label = styled.label`
  margin: 0 12px;
  color: #646464;
  font-size: 18px;
  padding-bottom: 6px;
`;

const Select = styled.select`
  width: 80%;
  margin-bottom: 32px;
  padding: 6px 8px;
  font-size: 12px;
  color: #f5f5f5;
  background-color: black;
  border: 2px solid #10aac2;

  option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
  }
`;

interface IFilterProps {
  handleFilter: any;
}

const Filter: React.FC<IFilterProps> = ({ handleFilter }) => {
  const handleInputChange = (event: any) => {
    handleFilter({
      value: event.target.value,
      key: event.target.id,
    });
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <SearchBox
        id="searchBox"
        name="searchBox"
        type="text"
        onChange={handleInputChange}
        placeholder={"Type a character's name"}
        autoFocus
      />
      <SelectWrapper>
        <Label>Status</Label>
        <Select id="status" name="status" onChange={handleInputChange}>
          <option value="all">All</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </Select>
      </SelectWrapper>
      <SelectWrapper>
        <Label>Gender</Label>
        <Select id="gender" name="gender" onChange={handleInputChange}>
          <option value="all">All</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="unknown">Unknown</option>
        </Select>
      </SelectWrapper>
    </StyledForm>
  );
};

export default Filter;
