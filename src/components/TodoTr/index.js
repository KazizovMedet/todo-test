import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import EditModal from "../EditModal";

const TodoTr = ({el, idx, deleteTask}) => {
    const [edit, setEdit] = useState(false)
    return (
        <>
            <tr key={el.id}>
                <th>{idx + 1}</th>
                <td>{el.title}</td>
                <td>
                    <Button className='btn btn-success me-3'
                            onClick={() => setEdit(true)}
                            text={<FontAwesomeIcon icon={faEdit}/>}
                    />
                    <Button className='btn btn-danger'
                            onClick={() => deleteTask(el.id)}
                            text={<FontAwesomeIcon icon={faTrash}/>}
                    />
                </td>
            </tr>
            <EditModal edit={edit} setEdit={setEdit} el={el}/>
        </>
    );
};

export default TodoTr;