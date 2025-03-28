const knightFactory = (currentBoard) => {
    const board = currentBoard;

    const spaceFactory = (initCoords, move1 = null, move2 = null, move3 = null, move4 = null, 
        move5 = null, move6 = null, move7 = null, move8 = null) => {

            let coords = initCoords;

            if (initCoords[0] < 0 || initCoords[0] > 7
                || initCoords[1] < 0 || initCoords[1] > 7){
                    coords = null;
                } 

            return {
                coords,
                move1,
                move2,
                move3,
                move4,
                move5,
                move6,
                move7,
                move8
            }
    }

    const generatePossibleMoves = (currentPosition) =>{
        const x = currentPosition[0];
        const y = currentPosition[1];
        const space = spaceFactory([x, y]);
        space.move1 = spaceFactory([x + 1, y + 2]);
        space.move2 = spaceFactory([x + 2, y + 1]);
        space.move3 = spaceFactory([x + 2, y - 1]);
        space.move4 = spaceFactory([x + 1, y - 2]);
        space.move5 = spaceFactory([x - 1, y - 2]);
        space.move6 = spaceFactory([x - 2, y - 1]);
        space.move7 = spaceFactory([x - 2, y + 1]);
        space.move8 = spaceFactory([x - 1, y + 2]);
        return space;
    }

    const levelOrder = (initPosition, targetString) => {
  
        const initQueue = [{ node: initPosition, path: [initPosition.coords]}];

        const traverse = (queue) => {
          if (queue.length >= 1){
            const { node, path } = queue.shift();

            if (node.coords && node.coords.toString() === targetString){
                return path;
            }

            for (let i = 1; i < Object.keys(node).length; i += 1){
        
                const validMove = node[`move${  i}`].coords;

                if (validMove){
                    queue.push({node: generatePossibleMoves(validMove), 
                        path: path.concat([validMove])});
                }
            }

            return traverse(queue);
          }
        }

        return traverse(initQueue);
  
      }

    const move = (positionData) => {
        const startPosition = positionData[0];
        const targetString = positionData[1].toString();

        console.log(`Traveling from ${startPosition} to ${targetString}...`);

        const resultArray = levelOrder(generatePossibleMoves(startPosition), targetString);

        console.log(`You made it in ${resultArray.length} moves! Here's your path:`);
        resultArray.forEach(element => {
            console.log(element);
        });

    }

    return {
        move
    }
}


const boardFactory = (boardMaxDimensions) => {
    const boardDimensions = boardMaxDimensions;

    return {boardDimensions};
}

const newBoard = boardFactory([7, 7]);
const newKnight = knightFactory([1, 3], newBoard);

newKnight.move([[2,7],[3,3]]);
