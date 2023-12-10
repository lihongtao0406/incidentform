import React, { useState } from 'react';
import './SurveyForm.css'; // Import your CSS file
import exampleImage from './logo.PNG'; 

const IncidentReportForm = () => {
  const [formData, setFormData] = useState({
    reportedBy: '',
    dateOfReport: '',
    titleRole: '',
    incidentNumber: '',
    dateOfIncident:'',
    timeOfIncident:'',
    Name:'',
    DOB:'',
    location:'',
    gender:'',
    postcode:'',
    address:'',
    Q1: '',
    Q2:'',
    Q3:'',
    Signature:'',
    date:'',
    phone:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='formtable'>
      <div >
        <img style={{width:'200px', height:'80px'}} src={exampleImage} alt="Example" />
      </div>
      <h2>Incident Report Form</h2>
      <form onSubmit={handleSubmit} className="incident-form">
        <table>
          <tbody>
            <tr>
              <td>Reported by:
                <input
                  type="text"
                  name="reportedBy"
                  value={formData.reportedBy}
                  onChange={handleChange}
                /></td>
              <td>Date of Report:
                <input
                  type="text"
                  name="dateOfReport"
                  value={formData.dateOfReport}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                Title/Role:
                <input
                  type="text"
                  name="titleRole"
                  value={formData.titleRole}
                  onChange={handleChange}
                />
              </td>
              <td>
                Incident No.:
                <input
                  type="text"
                  name="incidentNumber"
                  value={formData.incidentNumber}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="empty-row"></td>
            </tr>
            <tr className="incident-info-row">
              <td colSpan="2" className="empty-row">INCIDENT INFORMATION</td>
            </tr>
            <tr>
              <td colSpan="2" className="empty-row"></td>
            </tr>
            <tr>
              <td>
                Date of Incident:
                <input
                  type="text"
                  name="dateOfIncident"
                  value={formData.dateOfIncident}
                  onChange={handleChange}
                />
              </td>
              <td>
                Time of Incident:         
                <input
                  type="text"
                  name="timeOfIncident"
                  value={formData.timeOfIncident}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                Location:
                <input
                  type="text"
                  style={{width:'80%', marginLeft:'5px'}}
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="empty-row"></td>
            </tr>
            <tr>
              <td colSpan="2" style={{textAlign:'center'}}>Details of Person Injured/Affected</td>
            </tr>
            <tr>
              <td>
                Name:
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                />
              </td>
              <td>
                Date of Birth:
                <input
                  type="text"
                  name="DOB"
                  value={formData.DOB}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                Gender:
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
              </td>
              <td>
                Postcode:
                <input
                  type="text"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                Address:
                <input
                  type="text"
                  name="address"
                  style={{width:'80%', marginLeft:'5px'}}
                  value={formData.address}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="empty-row"></td>
            </tr>
            <tr>
              <td colSpan="2" style={{textAlign:'center'}}>Incident Description</td>
            </tr>
            <tr>
              <td style={{ width: '20%', textAlign:'center' }}>
              How did the Incident happen? What was the cause?
              </td>
              <td>
                <textarea
                  type="text"
                  name="Q1"
                  value={formData.Q1}
                  onChange={handleChange}
                  style={{ width: '100%', height: '100px' }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ width: '20%', textAlign:'center' }}>
              If there were any injuries? What were they?
              </td>
              <td>
                <textarea
                  type="text"
                  name="Q2"
                  value={formData.Q2}
                  onChange={handleChange}
                  style={{ width: '100%', height: '100px' }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ width: '20%', textAlign:'center' }}>
              What action was taken?
              </td>
              <td>
                <textarea
                    type="text"
                    name="Q3"
                    value={formData.Q3}
                    onChange={handleChange}
                    style={{ width: '100%', height: '100px' }}
                  />
              </td>
            </tr>
            <tr>
              <td colSpan="2" className="empty-row"></td>
            </tr>
            <tr>
              <td>
                Reporter Signature:
                <input
                    type="text"
                    name="Signature"
                    value={formData.Signature}
                    onChange={handleChange}
                  />
              </td>
              <td>
                Date:
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                Phone:
                <input
                  type="text"
                  name="phone"
                  style={{width:'80%', marginLeft:'5px'}}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IncidentReportForm;
