import PropTypes from 'prop-types';

export const Statistics = ({ title = false, stats }) => {
  const statsEls = stats.map(stat => {
    return (
      <li key={stat.id}>
        <span>{stat.label}</span>
        <span>{stat.percentage}%</span>
      </li>
    );
  });
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>{statsEls}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
