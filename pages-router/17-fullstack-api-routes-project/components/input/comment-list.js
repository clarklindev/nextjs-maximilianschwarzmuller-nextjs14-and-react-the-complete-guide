import classes from './comment-list.module.css';

function CommentList(props) {
  const {items} = props;

  return (
    <ul className={classes.comments}>
      {
        items? items.map(({id, name, text})=> (
          <li key={id}>
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