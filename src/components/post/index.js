import { useRef } from 'react';
import PropsTypes from 'prop-types';
import Header from './header';
import Image from './image';
import PropTypes from 'prop-types';
import Actions from './actions';
import Footer from './footer';
import Comments from './comments';

export default function Post({ content }) {
  const commentInput = useRef(null);
  const handleFocus = () => commentInput.current.focus();
  return (
    <div className="rounded col-span-4 border bg-white border-gray-primary mb-12">
      <Header username={content.username} />
      <Image src={content.imageSrc} caption={content.caption} />
      <Actions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhoto}
        handleFocus={handleFocus}
      />
      <Footer caption={content.caption} username={content.username} />
      <Comments
        docId={content.docId}
        comments={content.comments}
        posted={content.dateCreated}
        commentInput={commentInput}
      />
    </div>
  );
}

Post.propTypes = {
  content: PropsTypes.shape({
    username: PropsTypes.string.isRequired,
    imgSrc: PropsTypes.string.isRequired,
    caption: PropsTypes.string.isRequired,
    docId: PropsTypes.string.isRequired,
    userLikedPhoto: PropsTypes.bool.isRequired,
    likes: PropsTypes.array.isRequired,
    comments: PropsTypes.array.isRequired,
    dateCreated: PropsTypes.number.isRequired,
  }),
};
