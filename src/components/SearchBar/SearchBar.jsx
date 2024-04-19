import { Field, Form, Formik} from "formik";
// import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { SlMagnifier } from "react-icons/sl";
import { useId } from "react";
import css from '../SearchBar/SearchBar.module.css';

export default function SearchBar({ onSearch}) {
    // const notify = () => toast('Please formulate your request.');
    // const InputSchema = Yup.object().shape({
    //     query: Yup.string().length(0,toast('Please formulate your request.'))
        
    // });

    // const validation = () => {
    //     if (values.query === "") {
    //         toast('Please formulate your request.')
    //         return
    //     }
    // }
    const id = useId();
    
    return (

        <Formik initialValues={{ query: "" }}
                    onSubmit={(values, actions) => {
                        onSearch(values.query);
                        if (values.query === "") {
                            toast.error('Please formulate your request.')
                            return
                        }
                        actions.resetForm();}}>
            
            <header className={css.headerCont}>
                <Form className={css.form}>
                    <Field className={css.input} type="text" id={id} name="query" autoComplete="off" autoFocus placeholder="Search images and photos" />
                    {/* <ErrorMessage name="query" render={msg => <div>{msg}</div>} /> */}
                    {/* <ErrorMessage name="query"/> */}
                    <button className={css.button} type="submit"><SlMagnifier className={css.icon} /></button>
                    <Toaster/>
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