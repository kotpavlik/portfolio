import React from 'react';
import style from './Contacts.module.css'
import contacts_container from '../common/styles/Container.module.css'
import button from '../common/styles/button.module.css'

export const Contacts = () => {
    return (
        <div className={style.contacts_block} id="contacts">
            <div className={`${contacts_container.container} ${style.contacts}`}>
                <h2 className={style.title}>Contacts</h2>
                <form action="" className={style.form}>
                    <input type="text" className={style.inp_first}/>
                    <input type="text" className={style.inp_second}/>
                    <textarea className={style.textarea} name="text" id="text"></textarea>
                </form>
                <button className={`${button.button} ${style.button_contacts}`}>send</button>
            </div>
        </div>
    );
};

