import React from 'react';
import da from './imgs/da.png';
import sean from './imgs/sean.png';
import jen from './imgs/jen.png';

const Grid = (props) => {
  const {
    setSwiping,
    setGrid,
    produce,
    grid,
    isSwiping,
    numCols,
    sample,
    sum,
  } = props;

  let color = ['#E27D60', 'blue', 'red'];
  let imgz = [`url(${jen})`, `url(${sean})`];

  console.log(sum, 'SUM');

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${numCols},20px)`,
        justifyContent: 'center',
      }}
      onBlur={() => setSwiping(false)}
    >
      {grid.map((rows, i) =>
        rows.map((col, k) => (
          <div
            key={`${i}-${k}`}
            onClick={() => setSwiping(!isSwiping)}
            onMouseOver={() => {
              if (isSwiping) {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });

                setGrid(newGrid);
              }
            }}
            style={{
              width: 20,
              height: 21,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundImage:
                grid[i][k] && sum > 60
                  ? sample(imgz)
                  : grid[i][k] && sum > 35
                  ? `url(${jen})`
                  : grid[i][k] && sum > 15
                  ? `url(${sean})`
                  : grid[i][k]
                  ? `url(https://pbs.twimg.com/profile_images/249908723/adxGetMedia_400x400.jpg)`
                  : undefined,
              border:
                grid[i][k] && sum > 60
                  ? `solid 1.3px ${sample(color)}`
                  : grid[i][k] && sum > 35
                  ? 'solid 1.3px blue'
                  : grid[i][k] && sum > 15
                  ? 'solid 1.3px red'
                  : grid[i][k]
                  ? 'solid 1.3px purple'
                  : 'solid 1.3px #5D6D7E',
              cursor: isSwiping ? 'copy' : 'pointer',
            }}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
