import React from 'react';
import styles from './Modal.module.css'

const Modal = ({elements, closeModal}) => {

    const arr = elements.map((element, index) => {
        if (index === 0) {
            return {...element, data:{...element.data, thread: element.data.sex === 'male' ? 'Сын' : 'Дочь'}}
        } else if (index > 0 && index < 3) {
            return {...element, data:{...element.data, thread: element.data.sex === 'male' ? 'Папа' : 'Мама'}}
        } else {
            return {...element, data:{...element.data, thread: element.data.sex === 'male' ? 'Дедушка' : 'Бабушка'}}
        }
    })

    if (arr.length) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.body}>
                <button type='button' className={styles.close} onClick={closeModal}></button>
                <ul className={styles.list}>
                    {arr.map((element) => (
                        <li className={styles.item} key={element.id}>
                            <p className={styles.text}>{`${element.data.thread}: ${element.data.surName} ${element.data.name} ${element.data.secondName}, 
                            Дата рождения: ${element.data.birthdayDate}`}</p>
                        </li>
                    ))} 
                </ul>
            </div>
        </div>
    )}
}

export default Modal;
