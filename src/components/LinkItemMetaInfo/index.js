import { h } from "preact";
import { PropTypes } from "preact-compat";
import plur from "plur";

const constructPluralText = (word, count) => `${count} ${plur(word, count)}`;
const constructAuthorLink = (author) => `https://news.ycombinator.com/user?id=${author}`;

const LinkItemMetaInfo = ({ points, author, daysSincePost }) => (
  <span>
    {constructPluralText("point", points)} by <a href={constructAuthorLink(author)}>{author}</a> {constructPluralText("day", daysSincePost)} ago
  </span>
);

LinkItemMetaInfo.propTypes = {
  id: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  daysSincePost: PropTypes.number.isRequired
};

export default LinkItemMetaInfo;
