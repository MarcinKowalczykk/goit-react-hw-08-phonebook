import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { Title } from 'components/Title/Title';
import Notiflix from 'notiflix';
import { useSelector } from 'react-redux';
import {
  selectContactsError,
  selectContactsIsLoading,
} from 'redux/contacts/contacts.selectors';

const Contacts = () => {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  return (
    <div>
      <Title title={'Phonebook'} />
      <ContactForm />
      {isLoading && <Loader />}
      <Title title={'Contacts'} />
      <Filter />
      <ContactList />
      {error !== null && Notiflix.Notify.warning({ error })}
    </div>
  );
};

export default Contacts;
