import React from "react";
import {useForm} from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };


  return (
    <>
    
        <div className="container ">
            <form onSubmit={handleSubmit(onSubmit)}>
        <h1 class="text-center mt-3">Employee Registration Form</h1>
        <div className="row mt-5 ">
          <div className="col-4">
            <label class="form-label fw-bold mt-2">First Name</label>
            <input
              type="text"
              class={`form-control ${errors.firstName ?  'border-danger' : ''}`}
              placeholder="Enter your First Name"
              {...register('firstName', { required: 'First Name is required' })}
            />
            {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}
            <label class="form-label fw-bold mt-2">Birth Date</label>
            <input
              type="date" {...register('birthDate', { required: 'Date is required' })}
              class={`form-control ${errors.birthDate ?  'border-danger' : ''}`}
              placeholder="Enter your DOB"
            />
           {errors.birthDate && <p style={{ color: 'red' }}>{errors.birthDate.message}</p>}
            <label class="form-label fw-bold mt-2">Select Gender</label>
            <select class={`form-control ${errors.selectGender ?  'border-danger' : ''}`} {...register('selectGender', { required: 'Gender is required' })}>
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            {errors.selectGender && <p style={{ color: 'red' }}>{errors.selectGender.message}</p>}
            <label class="form-label fw-bold mt-2">Job Position</label>
            <input
              type="text" {...register('position', { required: 'Job Position is required' })}
              class={`form-control ${errors.position ?  'border-danger' : ''}`} 
              placeholder="Enter the Job position"
            /> 
            {errors.position && <p style={{ color: 'red' }}>{errors.position.message}</p>}
            <label class="form-label fw-bold mt-2">Billed Hours</label>
            <input
              type="text" {...register('billableHours', { required: 'Billable Hours is required and must be positive number',})}
              class={`form-control ${errors.billableHours ?  'border-danger' : ''}`} 
              placeholder="Enter the billable hours"
            />  {errors.billableHours && <p style={{ color: 'red' }}>{errors.billableHours.message}</p>}

          </div>
          <div className="col-4">
            <label class="form-label fw-bold mt-2">Middle Name</label>
            <input
              type="text"  {...register('middleName')}
              class="form-control"
              placeholder="Enter your Middle Name"
            />
            <label class="form-label fw-bold mt-2">Email</label>
            <input
              type="text" {...register('email', { required: 'Email is required', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
              class={`form-control ${errors.email ?  'border-danger' : ''}`} 
              placeholder="Enter your email"
            />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}

            <label class="form-label fw-bold mt-2">Start Time</label>
            <input type="time" {...register('startTime', { required: 'Start Time is required' })} class={`form-control ${errors.startTime ?  'border-danger' : ''}`} placeholder="" />
            {errors.startTime && <p style={{ color: 'red' }}>{errors.startTime.message}</p>}

            <label class="form-label fw-bold mt-2">Select Teams</label>
            <select {...register('team', { required: 'Required' })} class={`form-control ${errors.team ?  'border-danger' : ''}`} >
              <option value="">Select...</option>
              <option value="A">Team A</option>
              <option value="B">Team B</option>
              <option value="C">Team C</option>
            </select>
            {errors.team && <p style={{ color: 'red' }}>{errors.team.message}</p>}

            <label class="form-label fw-bold mt-3 pe-2">is Billable</label>
            <input type="checkbox" />
          </div>
          <div className="col-4">
            <label class="form-label fw-bold mt-2">Last Name</label>
            <input
              type="text"  {...register('lastName', { required: 'Last Name is required' })}
              class={`form-control ${errors.lastName ?  'border-danger' : ''}`} 
              placeholder="Enter your Last Name"
            />          {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}

            <label class="form-label fw-bold mt-2">Phone Number</label>
            <input
              type="text" {...register('phoneNumber', { required: 'Phone Number is required' })}
              class={`form-control ${errors.phoneNumber ?  'border-danger' : ''}`} 
              placeholder="Enter your phone number"
            />         {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber.message}</p>}

            <label class="form-label fw-bold mt-2">End Time</label>
            <input type="time" {...register('endTime', { required: 'End Time is required' })} class={`form-control ${errors.endTime ?  'border-danger' : ''}`}  />
            {errors.endTime && <p style={{ color: 'red' }}>{errors.endTime.message}</p>}

            <label class="form-label fw-bold mt-2">Select Designation</label>
            <select {...register('designation', { required: 'Required' })} class={`form-control ${errors.designation ?  'border-danger' : ''}`} >
              <option value="">Select...</option>
              <option value="1">Developer</option>
              <option value="2">Tester</option>
              <option value="3">Product Manager</option>
            </select>
            {errors.designation && <p style={{ color: 'red' }}>{errors.designation.message}</p>}

          </div>
        </div>
        <div className="text-center"><button className="btn btn-primary" type="submit">Submit</button></div>
        </form>
      </div>
      
    </>
  );
}

export default Form;
