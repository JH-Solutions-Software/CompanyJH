import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import '../assets/styles/Form.css'
import { SendHorizonal } from 'lucide-react';

const DynamicForm = ({ title, fields, onSubmit }) => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'> 
      <h2 className='form-title'>{title}</h2> 
      {fields.map((field, index) => (
        <div key={index} className="form-group">
          <label>{field.label}</label>
          <Controller 
            name={field.name} 
            control={control} 
            defaultValue="" 
            rules={field.rules || {}}
            render={({ field }) => (
              <input 
                {...field} 
                type={field.type} 
                placeholder={field.placeholder} 
                className={'input'} 
              />
            )}
          />
          {errors[field.name] && (
            <span className="error-message">{errors[field.name].message}</span>
          )}
        </div>
      ))}
      <button type="submit" className="submit">Submit <SendHorizonal/></button>
    </form>
  );
};

export default DynamicForm;
