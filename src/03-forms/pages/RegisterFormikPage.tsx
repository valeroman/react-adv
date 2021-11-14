import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                                .min(2, 'Debe tener minimo 2 caracteres')
                                .max(15, 'Debe tener 15 caracteres o menos')
                                .required('Requerido'),
                    email: Yup.string()
                                .email('El correo no tiene un formato valido')
                                .required('Requerido'),
                    password1: Yup.string()
                                .min(6, 'Debe tener minimo 6 caracteres')
                                .required('Requerido'),
                    password2: Yup.string()
                                .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
                                .min(6, 'Debe tener minimo 6 caracteres')
                                .required('Requerido')

                })}
            
            >
                {
                    ({ handleReset }) => (

                        <Form>
                            <MyTextInput 
                                label="Name"
                                name="name"
                                placeholder="Name"
                            />

                            <MyTextInput 
                                label="Email"
                                name="email"
                                placeholder="Email"
                                type="email"
                            />

                            <MyTextInput 
                                label="Password"
                                name="password1"
                                placeholder="Password"
                                type="password"
                            />

                            <MyTextInput 
                                label="Repeat Password"
                                name="password2"
                                placeholder="Repeat Password"
                                type="password"
                            />
                            

                            <button type="submit">Create</button>

                            <button type="button" onClick={ handleReset }>Reset</button>
                        </Form>
                    )
                }

            </Formik>

            
        </div>
    )
}
