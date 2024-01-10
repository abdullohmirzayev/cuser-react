// style
import "./NewUserForm.css";

const NewUserForm = () => {
  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create New User</h2>
          <form>
            <label>
              <span>Image URL:</span>
              <input type="url" required />
            </label>
            <label>
              <span>First Name:</span>
              <input type="text" required />
            </label>
            <label>
              <span>Last Name:</span>
              <input type="text" required />
            </label>
            <label>
              <span>Age:</span>
              <input type="number" required />
            </label>
            <label>
              <span>From:</span>
              <input type="text" required />
            </label>
            <label>
              <span>Job:</span>
              <input type="text" required />
            </label>
            <div className="gender">
              <span>Gender: </span>
              <label>
                <small>Male</small>
                <input type="radio" required name="gender" value="Male" />
              </label>
              <label>
                <small>Female</small>
                <input type="radio" required name="gender" value="Female" />
              </label>
            </div>
            <button type="" className="modal-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUserForm;
