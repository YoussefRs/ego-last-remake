import React from "react";
import useCourse from "../../hooks/useCourse";

const RegistrationForm = () => {
  const courseNames = useCourse({
    type: "byProperties",
    param: ["name", "id"],
  });
  return (
    <div className="container  mt-5 mb-5">
      <form className="bg-light p-4 m-auto rounded-lg" action="#">
        <div className="row mb-3">
          <div className="col-lg-2">
            <p>First Name</p>
          </div>
          <div className="col-lg-5">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="First Name"
              required
            />
          </div>
          <div className="col-lg-4">
            <p style={{ color: "rgb(177, 177, 177)" }}>
              max 30 characters a-z and A-Z
            </p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-2">
            <p>Last Name</p>
          </div>
          <div className="col-lg-5">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="col-lg-4">
            <p style={{ color: "rgb(177, 177, 177)" }}>
              (max 30 characters a-z and A-Z)
            </p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-2">
            <p>Date of Birth</p>
          </div>
          <div className="col-lg-5">
            <input
              style={{ width: 200 }}
              type="date"
              className="form-control rounded-pill"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-2">
            <p>Email id </p>
          </div>
          <div className="col-lg-5">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Email id"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-2">
            <p>Gender</p>
          </div>
          <div className="col-lg-5 d-flex">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check mx-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-2">
            <p>Address</p>
          </div>
          <div className="col-lg-7">
            <textarea
              className="form-control rounded-lg"
              rows={5}
              defaultValue={""}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-2">
            <p>Postal Code</p>
          </div>
          <div className="col-lg-5">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Postal Code"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-2">
            <p>State </p>
          </div>
          <div className="col-lg-5">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="State"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-2">
            <p>City </p>
          </div>
          <div className="col-lg-5">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="City"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-2">
            <p>Country </p>
          </div>
          <div className="col-lg-5">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Country"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-2">
            <p>Hobbies </p>
          </div>
          <div className="col-lg-5">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                defaultValue="option1"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Drawing{" "}
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                defaultValue="option2"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Singing{" "}
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                defaultValue="option2"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Dancing
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                defaultValue="option2"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
                Sketching
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-2">
            <p>Qualification </p>
          </div>
          <div className="col-lg-9">
            <div className="bg-custom table-responsive">
              <table className="table ">
                <thead>
                  <tr>
                    <th scope="col">Sl.No.</th>
                    <th scope="col">Examination</th>
                    <th scope="col">Board</th>
                    <th scope="col">Percentage</th>
                    <th scope="col">Year Of Passing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Examination"
                        required
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Board"
                        required
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Percentage"
                        required
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Year Of Passing"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Examination"
                        required
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Board"
                        required
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Percentage"
                        required
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Year Of Passing"
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Examination"
                        required
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Board"
                        required
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Percentage"
                        required
                      />
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Year Of Passing"
                        required
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-2">
            <p>Departments</p>
          </div>
          <div className="col-lg-5 d-flex">
            {courseNames.map((crs) => (
              <div className="form-check mx-3" key={crs.id}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  {crs.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="btn btn-danger apply-btn rounded-pill btn-lg"
        >
          Send Now
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
