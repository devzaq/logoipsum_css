import "../styles/Element.css";

function Element() {
  return (
    <div className="element">
      <div className="element__left">
        <img src="/assets/images/formimage.jpg" alt="form image" />
      </div>
      <div className="element__right">
        <h2 className="element__title">Sign Up Today Now!</h2>
        <p className="element__subtitle">
          Fill out the form below to sign up for our newsletter and receive
          updates
        </p>
        <h3>Your Interests:</h3>
        <ul className="element__list">
          <li className="element__list-item">Web Development</li>
          <li className="element__list-item">UI UX Design</li>
          <li className="element__list-item">Digital Marketing</li>
        </ul>
        <form className="element__form">
          <div className="element__form-group">
            <label htmlFor="name">Username:</label>
            <input type="text" id="name" placeholder="Enter username" />
          </div>
          <div className="element__form-group">
            <label htmlFor="course">Select a course:</label>
            <select className="element_form-select" id="course" type="text">
              <option value="">Choose a course...</option>
              <option value="">HTML & CSS</option>
              <option value="">Javascript</option>
              <option value="react">React</option>
            </select>
          </div>
          <button className="element__button" type="submit">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}

export default Element;
