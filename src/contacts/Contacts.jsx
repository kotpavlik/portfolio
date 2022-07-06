import React from 'react';
import style from './Contacts.module.scss'
import contacts_container from '../common/styles/Container.module.css'
import {ProjectButton} from "../components/projectButton";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {ContactsAnimation} from "../components/lottie/lottie_animation";
import 'react-phone-number-input/style.css';


export const Contacts = () => {
    const button_contacts = {
            backgroundColor: 'rgba(82, 82, 82, 0.15)'
    }
    const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

    const formik = useFormik({
        initialValues: {
            email: '',
            phone_number: '',
            first_name: '',
            comments: ''
        },
        validationSchema: Yup.object().shape({
            first_name: Yup.string().min(3, "it's too short").required("required"),
            phone_number: Yup.string().matches(phoneRegExp, 'phone number is not valid').required('required'),
            email: Yup.string().email('invalid email address').required('required'),
            comments: Yup.string()
                .max(100, 'must be 100 characters or less')

        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={style.contacts_block} id="contacts">
            <div className={`${contacts_container.container}`}>
                <div className={style.form_wrapper}>
                    <h2 className={style.title}>your contacts</h2>
                    <form className={style.form}>
                        <div className={style.inp_wrapper}>
                            <label className={style.label} htmlFor="email">Email Address : </label>
                            <input
                                placeholder={'your_boss@gmail.com'}
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className={style.inp}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className={style.validation}>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className={style.inp_wrapper}>
                            <label className={style.label} htmlFor="phone_number">Phone Number : </label>
                            <input
                                placeholder={'+375(11) 111-11-11'}
                                id="phone_number"
                                name="phone_number"
                                type="phone_number"
                                onChange={formik.handleChange}
                                value={formik.values.phone_number}
                                className={style.inp}
                            />
                            {formik.touched.phone_number && formik.errors.phone_number ? (
                                <div className={style.validation}>{formik.errors.phone_number}</div>
                            ) : null}
                        </div>
                        <div className={style.inp_wrapper}>
                            <label className={style.label} htmlFor="first_name">Your Name : </label>
                            <input
                                placeholder={'Boss'}
                                id="first_name"
                                name="first_name"
                                type="first_name"
                                onChange={formik.handleChange}
                                value={formik.values.first_name}
                                className={style.inp}
                            />
                            {formik.touched.first_name && formik.errors.first_name ? (
                                <div className={style.validation}>{formik.errors.first_name}</div>
                            ) : null}
                        </div>
                        <div className={style.inp_wrapper}>
                            <label className={style.label} htmlFor="comments">Comments : </label>
                            <input
                                placeholder={'ask me ...'}
                                id="comments"
                                name="comments"
                                type="comments"
                                onChange={formik.handleChange}
                                value={formik.values.comments}
                                className={style.inp}
                            />
                            {formik.touched.comments && formik.errors.comments ? (
                                <div className={style.validation}>{formik.errors.comments}</div>
                            ) : null}
                        </div>
                    </form>

                    <form onSubmit={formik.handleSubmit}>
                        <ProjectButton type={'submit'} name={'send'} buttonClassName={button_contacts}/>
                    </form>
                </div>
                <div className={style.lottie_animation}><ContactsAnimation/></div>
            </div>
        </div>
    );
};

