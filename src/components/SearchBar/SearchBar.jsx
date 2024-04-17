import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { SlMagnifier } from "react-icons/sl";
import { useId } from "react";
import css from '../SearchBar/SearchBar.module.css';

export default function SearchBar({ onSearch, toasty }) {

    const InputSchema = Yup.object().shape({
        query: Yup.string().required(toasty),
        
    });
    const id = useId();
    
    return (

        <Formik initialValues={{ query: "" }}
                    onSubmit={(values, actions) => {
                        onSearch(values.query);
                        actions.resetForm();}}
            validationSchema={InputSchema}>
            
            <header className={css.headerCont}>
                <Form className={css.form}>
                    <Field className={css.input} type="text" id={id} name="query" autoComplete="off" autoFocus placeholder="Search images and photos" />
                    <ErrorMessage name="guery"/>
                    <button className={css.button} type="submit"><SlMagnifier className={css.icon} /></button>
                </Form>
            </header>
        </Formik>
        // <header>
        //     <form>
        //         <input type="text" autoComplete="off" autoFocus placeholder="Search images and photos"/>
        //         <button type="submit">Search</button>
        //     </form>
        // </header>
    )
}