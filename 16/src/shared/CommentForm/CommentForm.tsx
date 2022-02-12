import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import styles from './commentform.css';
import { SubmitHandler, useForm } from "react-hook-form";
import { values } from '../../../webpack.config';
import { Actions, State, useStoreActions, useStoreState } from 'easy-peasy';
import { IEasy } from '../../App';
import { updateComment } from '../../store/reducer';

type FormData = {
  commentForm: string;
};


interface ICommentForm {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: (value: ICommentValue) => void;
  comment: {comment: string};
}

export interface ICommentValue {
  comment: string;
}

function NOOP() {
}
export function CommentForm(props:ICommentForm) {

  const {
    onChange=NOOP,
    onSubmit=NOOP,
    comment,
  } = props;

  // const [value, setValue]=useState('');
  // const [touched, setTouched]=useState(false);
  // const [valueError, setValueError]=useState('');

  // function handleSubmit(event:FormEvent) {
  //   event.preventDefault();
  //   setTouched(true);

  //   setValueError(validateValue())

  //   const isFormValid=!validateValue();
  //   if (!isFormValid) return;

  //   alert('Форма отправлена')
  // }

  // function handleChange(event:ChangeEvent<HTMLTextAreaElement>) {
  //   setValue(event.target.value);
  // }


  // function validateValue() {
  //   if (value.length<=3) return 'Введите больше трех символов';
  //   return '';
  // }


  // return (
  //   <form className={styles.form} onSubmit={handleSubmit}> 
  //      <textarea
  //          className={styles.input}
  //          value={value}
  //          onChange={handleChange}
  //          aria-invalid={valueError ? 'true': undefined}/> 
  //         {touched && valueError && (<div>{validateValue()}</div>)}
  //      <button type='submit' className={styles.button} >Комментировать</button>
  //   </form>
  // );




  const { register, setValue, handleSubmit, setFocus, formState: { errors } } = useForm<ICommentValue>({defaultValues: {comment:comment.comment}});
  const onSubmitForm: SubmitHandler<ICommentValue> = value => onSubmit(value);
  useEffect(() => {
    setFocus('comment');
  }, [setFocus])
  
  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className={styles.form} >
      <textarea  className={styles.input} {...register(
            'comment', { required: true, minLength: { value: 4, message: 'Введите больше трех символов'}}
          )}
          onChange={(event) => {
            setValue('comment', event.target.value)
            onChange(event);
          }}
          // onChange={(event:ChangeEvent<HTMLTextAreaElement>) => {
          //   const text= event.target.value;
          //   setValue("comment", text);
          // }}
          aria-invalid={errors.comment ? 'true': undefined}
          />
          
           {errors.comment && (<div>{'Введите больше трех символов'}</div>)};

      <button type="submit"

      className={styles.button}>
        Комментировать
      </button>
    </form>
  );


 
}
