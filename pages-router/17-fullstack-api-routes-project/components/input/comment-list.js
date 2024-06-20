import classes from './comment-list.module.css';

function CommentList(props) {
  const {items} = props;

  return (
    <ul className={classes.comments}>
      {
        items? items.map(({_id, name, text})=> (
          <li key={_id}>
            <p>{text}</p>
            <div>
              by <address>{name}</address>
            </div>
          </li>
        )) : undefined
      }
    </ul>
  );
}

export default CommentList;