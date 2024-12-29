import './ItemListContainer.css';
import PropTypes from 'prop-types';

const ItemListContainer = ({greeting}) => {
  return (
    <main>
        <div className="item-list-container">
        <h2>{greeting}</h2>
        </div>
    </main>
  );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
  };

export default ItemListContainer;