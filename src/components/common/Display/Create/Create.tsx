import { useForm } from 'react-hook-form';

import {
  InputField,
  Form,
  InputBox,
  CreateButton,
  Container,
  ErrorTag,
} from './CreateStyle';

import { navigationContent } from '../../../../resources/String';
import { useNavigate } from 'react-router-dom';

type InputDetails = {
  Username: string;
  Topic: string;
  Content: string;
  RelatedOne: string;
  RelatedTwo: string;
  Date: string;
  isTrending: boolean;
};

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputDetails>();
  const onSubmit = (data: InputDetails) => {
    const displayDetails = {
      Username: data.Username,
      Topic: data.Topic,
      Content: data.Content,
      RelatedOne: data.RelatedOne,
      RelatedTwo: data.RelatedTwo,
      Date: data.Date,
      isTrending: data.isTrending,
    };
    const sessionDetails = sessionStorage.getItem('display');
    if (sessionDetails) {
      const existingDetails = JSON.parse(sessionDetails);
      existingDetails.push(displayDetails);
      sessionStorage.setItem('display', JSON.stringify(existingDetails));
    } else {
      const details = [];
      details.push(displayDetails);
      sessionStorage.setItem('display', JSON.stringify(details));
    }
    // setValues({
    //   ...values,
    //   Username: data.Username,
    //   Topic: data.Topic,
    //   Content: data.Content,
    //   Related: data.Related,
    //   Date: data.Date,
    // });

    navigate('/');
  };

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputField>
            <InputBox
              type="text"
              id="username"
              placeholder="Username"
              {...register('Username', {
                required: true,
                pattern: /^@[a-zA-Z]+$/,
                maxLength: 20,
              })}
            />
          </InputField>
          {errors.Username && errors.Username.type === 'required' && (
            <ErrorTag>UserName is Required.</ErrorTag>
          )}
          {errors.Username && errors.Username.type === 'maxLength' && (
            <ErrorTag>UserName should not exceed 20 characters</ErrorTag>
          )}
          {errors.Username && errors.Username.type === 'pattern' && (
            <ErrorTag>Pattern mismatch</ErrorTag>
          )}
          <InputField>
            <InputBox
              type="text"
              id="topic"
              placeholder="Topic"
              {...register('Topic', {
                required: true,
                minLength: 10,
                maxLength: 30,
              })}
            />
          </InputField>
          {errors.Topic && errors.Topic.type === 'required' && (
            <ErrorTag>Please enter your topic</ErrorTag>
          )}
          {errors.Topic && errors.Topic.type === 'maxLength' && (
            <ErrorTag>Topic should not exceed 30 characters</ErrorTag>
          )}
          {errors.Topic && errors.Topic.type === 'minLength' && (
            <ErrorTag>Topic should contain minimum 10 characters</ErrorTag>
          )}

          <InputField>
            <InputBox
              type="textarea"
              id="content"
              placeholder="Content"
              {...register('Content', { required: true, minLength: 20 })}
            />
          </InputField>
          {errors.Content && errors.Content.type === 'required' && (
            <ErrorTag>Please enter your content</ErrorTag>
          )}
          {errors.Content && errors.Content.type === 'minLength' && (
            <ErrorTag>Content should contain minimum 20 characters</ErrorTag>
          )}
          <InputField>
            <InputBox
              type="text"
              id="relatedOne"
              placeholder="  Related one"
              {...register('RelatedOne', { required: true, maxLength: 15 })}
            />
          </InputField>
          {errors.RelatedOne && errors.RelatedOne.type === 'required' && (
            <ErrorTag>Content is related to ..?</ErrorTag>
          )}
          {errors.RelatedOne && errors.RelatedOne.type === 'maxLength' && (
            <ErrorTag>Related field should not exceed 15 characters</ErrorTag>
          )}
          <InputField>
            <InputBox
              type="text"
              id="relatedTwo"
              placeholder="  Related two"
              {...register('RelatedTwo', { required: true, maxLength: 15 })}
            />
          </InputField>
          {errors.RelatedTwo && errors.RelatedTwo.type === 'required' && (
            <ErrorTag>Content is related to ..?</ErrorTag>
          )}
          {errors.RelatedTwo && errors.RelatedTwo.type === 'maxLength' && (
            <ErrorTag>Related field should not exceed 15 characters</ErrorTag>
          )}
          <InputField>
            <InputBox
              type="text"
              id="date"
              placeholder="29 NOV"
              {...register('Date', { required: true, pattern: /[DD MMM]/ })}
            />
          </InputField>

          {errors.Date && errors.Date.type === 'pattern' && (
            <ErrorTag>pattern mismatch</ErrorTag>
          )}
          {errors.Date && errors.Date.type === 'required' && (
            <ErrorTag>date is required</ErrorTag>
          )}
          <InputField>
            <InputBox
              type="checkbox"
              id="isTrending"
              placeholder="29 NOV"
              {...register('isTrending')}
            />
            <label>IsTrending</label>
          </InputField>
          <CreateButton type="submit">
            {navigationContent.buttonText}
          </CreateButton>
        </Form>
      </Container>
    </>
  );
};
export default Create;
