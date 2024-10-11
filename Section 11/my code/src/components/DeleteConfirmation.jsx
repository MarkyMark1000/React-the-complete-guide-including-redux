import {useEffect} from 'react';

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  useEffect( () => {
    const timer = setTimeout(() => {
      onConfirm();
    }
      ,3000
    );

    // Return a cleanup funciton which is called once the dom is removed.
    // Note, if useEffect is re-run, the cleanup function runs again before
    // useEffect (clean last useEffect).
    return () => {clearTimeout(timer);};

  },[onConfirm]); //Important - Danger

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
