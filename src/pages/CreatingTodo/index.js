import React from 'react';
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import {useFormik} from 'formik';
import * as Yup from 'yup';

const CreatingTodo = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Введите текст'),
        }),
        onSubmit: values => {
            console.log(123)
            alert(JSON.stringify(values, null, 2))
        },
    })
    return (
        <div className='container'>
            <div className='row col-md-4 offset-md-4'>
                <div className='my-4'>
                    <form onSubmit={formik.handleSubmit}>
                        <InputForm type='text'
                                   className='form-control'
                                   placeholder='Введите текст'
                                   id="title"
                                   name="title"
                                   onChange={formik.handleChange}
                                   value={formik.values.name}
                        />
                        {formik.errors.title ?
                            <span className='text-danger fw-bolder'>{formik.errors.title}</span> : null}
                        <Button className='btn btn-primary ms-auto d-block my-4'
                                text='Добавить'
                                type='submit'/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatingTodo;