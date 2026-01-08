import "../styles/Features.css";

function Features() {
  return (
    <section className="feature">
      <div className="feature__container">
        <div className="feature__item">
          <h2 className="feature__title feature__title--selected">
            Empower Student Learning
          </h2>
          <p className="feature__description">
            Our platform enhances student engagement by providing interactive
            learning tools. Experience a seamless integration of technology that
            supports diverse learning styles.
          </p>
        </div>
        <div className="feature__item">
          <h2 className="feature__title">Streamlined Communication Tools</h2>
          <p className="feature__description">
            Stay connected with parents and students through our easy-to-use
            communication features. Foster collaboration and transparency within
            your educational community.
          </p>
        </div>
        <div className="feature__item">
          <h2 className="feature__title">Customizable Learning Experience</h2>
          <p className="feature__description">
            Tailor your curriculum to meet the unique needs of your students.
            Our flexible platform allows educators to create personalized
            learning paths.
          </p>
        </div>
      </div>
      <div className="feature__image">
        <img src="/assets/images/features.jpg" alt="feature image" />
      </div>
    </section>
  );
}

export default Features;
