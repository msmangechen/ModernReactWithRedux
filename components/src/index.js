import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return ( <
    div className = "ui container comments" >

		<ApprovalCard>
			<div>
				<h4>Warning</h4>
				Are you sure you want to do this?
			</div>
		</ApprovalCard>

		<ApprovalCard>
			<
			CommentDetail author = "Sam"
			timeAgo = "Today at 4:45PM"
			postContent = "Nice!"
			avatar = {
				faker.image.avatar()
			}
			/ >
		</ApprovalCard>

		<ApprovalCard>
     <
    CommentDetail author = "Alex"
    timeAgo = "Today at 2:00PM"
    postContent = "Great!"
		avatar = {
      faker.image.avatar()
    } / >
		</ApprovalCard>

		<ApprovalCard>
    <
    CommentDetail author = "Jane"
    timeAgo = "Yesterday at 5:15PM"
    postContent = "Awesome!"
		avatar = {
      faker.image.avatar()
    } / >
		</ApprovalCard>
    <
    /div>
  );
};

ReactDOM.render( <
  App / > ,
  document.querySelector('#root')
);
