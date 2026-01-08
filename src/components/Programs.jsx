import "../styles/Programs.css";

function Programs() {
  return (
    <section className="programs">
      <h2 className="programs__title">
        Explore Our State of the Art Facilities and Enriching Learning
        Experience
      </h2>
      <div className="programs__cards">
        <div className="programs__card">
          <img
            className="programs__card-img"
            src="/assets/images/program1.jpg"
            alt="acadamic programs"
          />
          <h3>
            Engaging Extracurricular Activities for Holistic Student Development
          </h3>
          <p>
            Our school offers modern facilities designed to enhance learning
            experience.
          </p>
          <button className="programs__button">Learn More</button>
        </div>
        <div className="programs__card">
          <img
            className="programs__card-img"
            src="/assets/images/program2.jpg"
            alt="acadmic programs"
          />
          <h3>
            Diverse Academic Programs Tailored to Student Interests and Goals
          </h3>
          <p>
            We provide a wide range of academic programs to cater to every
            student.
          </p>
          <button className="programs__button">Learn More</button>
        </div>
        <div className="programs__card">
          <img
            className="programs__card-img"
            src="/assets/images/program3.jpg"
            alt="academic program"
          />
          <h3>Dedicated Staff Committed to Student Success and Growth</h3>
          <p>
            Our experienced educators are passionate about nurturing each
            student's potential.
          </p>
          <button className="programs__button">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Programs;
