import React from 'react';
import { Form, Field } from 'react-final-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { normalizePhone } from 'utils';
import {
  FormWrapper,
  FormTitle,
  FieldWrapper,
} from './ContactPage.css';
import { Button } from 'components';

toast.configure({
  autoClose: 3000,
})

const onSubmit = async () => {
  await toast.success('Wiadomość wysłana!');
};

const required = value => (value ? undefined : 'Pole jest wymagane.');
const mustBeEmail = value => {
  const mailReg = /\S+@\S+\.\S+/;
  return mailReg.test(value)
    ? undefined
    : 'Podany adres e-mail jest niepoprawny.'
};
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const ContactPage = () => {
  return (
    <FormWrapper>
      <FormTitle>Napisz do nas</FormTitle>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, invalid, pristine, values }) => (
          <form spellCheck="false" onSubmit={event => handleSubmit(event)
            .then(form.reset)
            .then(Object.keys(values).forEach(key => {
              form.change(key, undefined);
              form.resetFieldState(key);
            }))}>
            <Field name='name' validate={required}>
              {({ input, meta }) => (
                <FieldWrapper>
                  <label>Imię *</label>
                  <input {...input} type='text' placeholder='wpisz imię' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </FieldWrapper>
              )}
            </Field>
            <Field
              name='email'
              validate={composeValidators(required, mustBeEmail)}
            >
              {({ input, meta }) => (
                <FieldWrapper>
                  <label>Adres email *</label>
                  <input {...input} type='text' placeholder='wpisz email' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </FieldWrapper>
              )}
            </Field>
            <Field name='message' validate={required}>
              {({ input, meta }) => (
                <FieldWrapper>
                  <label>Treść wiadomości *</label>
                  <textarea {...input} placeholder='wpisz wiadomość' />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </FieldWrapper>
              )}
            </Field>
            <FieldWrapper>
              <label>Numer kontaktowy</label>
              <Field
                name='phoneNumber'
                component='input'
                type='text'
                parse={normalizePhone}
                placeholder='999 999 999'
              />
            </FieldWrapper>
            <FieldWrapper>
              <label>Kiedy mamy zadzwonić?</label>
              <Field name='timeOfDay' component='select'>
                <option value='choice'>wybierz</option>
                <option value='morning'>Rano (9:00 - 12:00)</option>
                <option value='afternoon'>Po południu (12:00 - 18:00)</option>
                <option value='evening'>Wieczorem (18:00 - 20:00)</option>
              </Field>
            </FieldWrapper>
            <Button type='submit' variant='form' disabled={pristine || invalid}>
              Wyślij
            </Button>
          </form>
        )}
      />
    </FormWrapper>
  );
}

export default React.memo(ContactPage);