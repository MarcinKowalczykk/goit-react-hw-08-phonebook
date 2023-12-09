import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { selectVisibleContacts } from '../../redux/contacts/contacts.selectors';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { openModal } from '../../redux/modalContactDetail/modalContactDetail.reducer';
import ModalContactDetail from '../ModalContactDetail/ModalContactDetail';
import { selectIsOpenModal } from '../../redux/modalContactDetail/modalContactDetail.selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isOpenModal = useSelector(selectIsOpenModal);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul className={css.list}>
        {contacts.length > 0 ? (
          contacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={css.listItem}>
                <div className={css.text}>
                  <p className={css.textName}>{name}</p>
                  <span className={css.textNumber}>{number}</span>
                </div>
                <div className={css.buttons}>
                  <button
                    type="button"
                    className={css.button}
                    onClick={() => dispatch(openModal({ name, number }))}
                  >
                    More
                  </button>
                  <button
                    type="button"
                    className={css.button}
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <p>Sorry, no contacts :( </p>
        )}
      </ul>

      {isOpenModal && <ModalContactDetail />}
    </div>
  );
};
