import { Actions, State, useStoreActions, useStoreState } from 'easy-peasy';
import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { IEasy } from '../../App';
import { RootState, updateComment } from '../../store/reducer';
import { CommentForm, ICommentValue } from '../CommentForm';

export function CommentFormContainer() {
  
  // const value=useSelector<RootState, string>(state=>state.commentText);
  // const dispatch=useDispatch();
  const value = useStoreState((state: State<IEasy>) => state.commentText);
  const updateComment = useStoreActions((actions: Actions<IEasy>) => actions.add);



  function handleChange(event:ChangeEvent<HTMLTextAreaElement>) {
    // dispatch(updateComment(event.target.value));
    updateComment({comment: event.target.value});

  }

  function handleSubmit(value:ICommentValue) {
    console.log(`${value}`);

  }
  return (
    <CommentForm
        comment={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
    />
  );
}
