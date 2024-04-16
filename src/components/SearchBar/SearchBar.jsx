import { Field, Form, Formik } from "formik"
import { useId } from "react";

export default function SearchBar({ onSearch }) {
    const id = useId();
    return (

        <Formik initialValues={{ query: "" }}
                    onSubmit={(values, actions) => {
                        onSearch(values.query);
                        actions.resetForm();
                }}>
            <header>
                <Form >
                    <Field type="text" id={id} name="query" autoComplete="off" autoFocus placeholder="Search images and photos"/>
                    <button type="submit">Search</button>
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