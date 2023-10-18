import { Modal } from "bootstrap";

const GoalEditor = ({ show, setShow }) => {
    return (
        <Modal show={show} onHide={() => setShow(false)} size='lg'>
            <label for='name'>Name:</label>
            <input type='text' id='name' name='name' required />

            
        </Modal>
    );
}

export default GoalEditor;