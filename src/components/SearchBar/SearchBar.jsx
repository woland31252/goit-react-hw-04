import { Field, Form, Formik } from "formik"

export default function SearchBar() {
    return (

        <Formik>
            <header>
                <Form initialValues = {""} onSubmit = {()=>{}}>
                    <Field type="text" autoComplete="off" autoFocus placeholder="Search images and photos"/>
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