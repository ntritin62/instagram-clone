import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';
import { type } from '@testing-library/user-event/dist/type';

export default function AddComment({
  docId,
  comments,
  setComments,
  commentInput,
}) {
  const [comment, setComment] = useState('');
  const { firebase, FieldValue } = useContext(FirebaseContext);
  const {
    user: { displayName },
  } = useContext(UserContext);

  const handleSummitComment = (e) => {
    e.preventDefault();
    setComments([...comments, { displayName, comment }]);
    setComment('');

    return firebase
      .firestore()
      .collection('photos')
      .doc(docId)
      .update({ comments: FieldValue.arrayUnion({ displayName, comment }) });
  };
  return (
    <div className="border-t border-gray-primary">
      <form
        onSubmit={(event) =>
          comment.length >= 1 ? handleSummitComment : event.preventDefault()
        }
        method="POST"
        className="flex justify-between pl-0 pr-5"
      >
        <input
          aria-label="Add a comment"
          autoComplete="off"
          type="text"
          className="text-sm text-gray-base w-full mr-3 py-5 px-4"
          name="add-comment"
          placeholder="Add a comment..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <button
          className={`text-sm font-bold text-blue-light opacity-0 ${
            comment && 'opacity-100'
          }`}
          type="button"
          disabled={comment.length < 1}
          onClick={handleSummitComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}

AddComment.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  setComments: PropTypes.func.isRequired,
  commentInput: PropTypes.object,
};
