import React from 'react'
import PropTypes from 'prop-types'

export const Home = ({ count, increment, isIncrementing, incrementAsync, changePage }) => (
  <div className="Home--root">
    <h1>Home</h1>
    <p>Count: {count}</p>

    <p>
      <button onClick={increment} disabled={isIncrementing}>Increment</button>
      <button onClick={incrementAsync} disabled={isIncrementing}>Increment Async</button>
    </p>

    <p><button onClick={() => changePage()}>Go to about page via redux</button></p>
  </div>
)

Home.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  isIncrementing: PropTypes.bool,
  incrementAsync: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired
}
