import React from 'react';
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
import {useFormik} from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {addTask} from "../../redux/action";

const CreatingTodo = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            title: '',
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Введите текст'),
        }),
        onSubmit: (values, {resetForm}) => {
            values.id = nanoid(4)
            dispatch(addTask(values))
            resetForm()
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
                                   value={formik.values.title}
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