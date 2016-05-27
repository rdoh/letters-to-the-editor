import React from 'react';
import Field from './Field';

const PersonalDetailsFields = props =>
 (
  <fieldset>
    <legend>
        Enter your details
    </legend>
    <Field content={props.formValues.firstName} id="firstName" onChange={props.onChange('firstName')}>First Name</Field>
    <Field content={props.formValues.lastName} id="lastName" onChange={props.onChange('lastName')}>Last Name</Field>
    <Field content={props.formValues.email} id="email" type="email" onChange={props.onChange('email')}>Email</Field>
    <Field content={props.formValues.phone} id="phone" type="tel" onChange={props.onChange('phone')}>Phone</Field>
    <Field content={props.formValues.street} id="street" onChange={props.onChange('street')}>Street</Field>
    <Field content={props.formValues.city} id="city" onChange={props.onChange('city')}>City</Field>
    <Field content={props.formValues.state} id="state" onChange={props.onChange('state')}>State</Field>
    <Field content={props.formValues.postCode} id="postCode" onChange={props.onChange('postCode')}>Post code</Field>
  </fieldset>
);

PersonalDetailsFields.propTypes = {
  formValues: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default PersonalDetailsFields;
