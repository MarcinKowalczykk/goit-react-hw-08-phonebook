// import css from 'components/ContactForm/ContactForm.module.css';
import css from 'components/ModalContactDetail/ModalContactDetail.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from 'redux/modalContactDetail/modalContactDetail.reducer';
import { selectModalData } from 'redux/modalContactDetail/modalContactDetail.selectors';
import icon from '../../img/icon.webp';
const ModalContactDetail = () => {
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);
  console.dir(modalData);

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={() => dispatch(closeModal())}>
          ❌
        </button>
        <div className={css.infoContact}>
          <img src={icon} alt="icon profile" width="200" className={css.icon} />
          <h2 className={css.title}>Name: {modalData.name}</h2>
          <h2 className={css.title}>Phone: {modalData.number}</h2>
        </div>
      </div>
    </div>
  );
};

export default ModalContactDetail;
