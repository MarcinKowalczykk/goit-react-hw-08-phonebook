import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './Filter.module.css';
import { filterValue } from '../../redux/contacts/contacts.reducer';
import { selectContactsFilter } from '../../redux/contacts/contacts.selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const onChangeInput = e => {
    const value = e.target.value;
    dispatch(filterValue(value));
  };

  return (
    <div className={css.container}>
      <label className={css.labelForm}>Find contact by name</label>
      <input
        type="text"
        name="filter"
        className={css.inputForm}
        onChange={onChangeInput}
        value={filter}
      />
    </div>
  );
};
