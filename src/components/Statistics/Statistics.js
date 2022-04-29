import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import generateColor from 'js/generateColor';

function Statistics({ title = '', stats }) {
  let widthSection = 410;
  let widthItem = widthSection / stats.length;
  return (
    <section className={s.statistics} style={{ width: widthSection }}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={s.item}
              key={id}
              style={{ backgroundColor: generateColor(), width: widthItem }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
