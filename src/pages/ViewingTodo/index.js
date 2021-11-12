import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import TodoTr from "../../components/TodoTr";
import {removeTask} from "../../redux/action";

const ViewingTodo = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(s => s.tasks)
    const deleteTask = (id) => {
        dispatch(removeTask(id))
    }

    return (
        <div className='container'>
            <div className='row col-md-6 offset-md-3'>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Task</th>
                        <th scope="col" className='w-25'>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        tasks.map((el, idx) =>
                            <TodoTr key={el.id}
                                    deleteTask={deleteTask}
                                    el={el}
                                    idx={idx}
                            />
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewingTodo;