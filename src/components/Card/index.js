import { FaComments } from "react-icons/fa";
import * as S from "./styles";

const Card = ({ title, tags }) => {
  return (
    <S.Card>
      <div className="card-header">
        <h2>Make a Kanban App</h2>
        <div className="card-info">
          <span className="date">13 Mar, 2021</span>
          <span className="dot"></span>
          <span className="author">Created by Atakan</span>
        </div>
      </div>
      <div className="card-body">
        <p>{title}</p>
        {tags && tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag) => (
              <S.Tag key={tag}>{tag}</S.Tag>
            ))}
          </div>
        )}
      </div>
      <div className="card-footer">
        <div className="comments">
          <FaComments size={20} />
          {/* <span>5</span> */}
        </div>
        <div className="assigned">
          <img
            src="https://doodleipsum.com/32x32/avatar?bg=lightgray&n=1"
            alt="placeholder"
          />
          <img
            src="https://doodleipsum.com/32x32/avatar?bg=lightgray&n=2"
            alt="placeholder"
          />
        </div>
      </div>
    </S.Card>
  );
};

export default Card;
