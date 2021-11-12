import React from 'react';
import Modal from 'react-modal';
import InputForm from "../InputForm";
import Button from "../Button";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {editTask} from "../../redux/action";

const EditModal = ({edit, setEdit, el}) => {
    const dispatch = useDispatch()
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const formik = useFormik({
        initialValues: {
            title: el.title,
            id: el.id
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Введите текст'),
        }),
        onSubmit: (values) => {
            dispatch(editTask(values))
            setEdit(false)
        },
    })

    return (
        <>
            <Modal
                isOpen={edit}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={formik.handleSubmit}>
                    <InputForm type='text'
                               className='form-control'
                               id="title"
                               name="title"
                               defaultValue={el.title}
                               onChange={formik.handleChange}
                    />
                    <Button text='Save'/>
                </form>
            </Modal>
        </>
    );
};

export default EditModal;