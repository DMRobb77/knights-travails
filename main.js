const knightFactory = (startPosition, currentBoard) => {
    const position = startPosition;
    const board = currentBoard;

    
    const spaceFactory = (coords, move1 = null, move2 = null, move3 = null, move4 = null, 
        move5 = null, move6 = null, move7 = null, move8 = null) => ({
            coords,
            move1,
            move2,
            move3,
            move4,
            move5,
            move6,
            move7,
            move8
    })

    // const generatePossibleMoves = () =>{
    //     let root = spaceFactory([0, 0]);
    //     for(let x = 0; x <= currentBoard.boardDimensions[0]; x += 1){
    //         for(let y = 0; y <= currentBoard.boardDimensions[1]; y += 1){
    //             const space = spaceFactory([x, y]);
    //             space.move1 = [x + 1, y + 2];
    //             space.move2 = [x + 2, y + 1];
    //             space.move3 = [x + 2, y - 1];
    //             space.move4 = [x + 1, y - 2];
    //             space.move5 = [x - 1, y - 2];
    //             space.move6 = [x - 2, y - 1];
    //             space.move7 = [x - 2, y + 1];
    //             space.move8 = [x - 1, y + 2];

    //             Object.keys(space).forEach(property => {
    //                 if (space[property][0] < 0 || space[property][0] > 7
    //                     || space[property][1] < 0 || space[property][1] > 7){
    //                         space[property] = null;
    //                     }
    //             });

    //             console.log(space);

    //             root = space;
    //         }
    //     }   
    //     console.log(`Root is ${root.coords}`);
    // }




    const generatePossibleMoves = () =>{
        let root = spaceFactory([0, 0]);
        for(let x = 0; x <= currentBoard.boardDimensions[0]; x += 1){
            for(let y = 0; y <= currentBoard.boardDimensions[1]; y += 1){
                const space = spaceFactory([x, y]);
                space.move1 = [x + 1, y + 2];
                space.move2 = [x + 2, y + 1];
                space.move3 = [x + 2, y - 1];
                space.move4 = [x + 1, y - 2];
                space.move5 = [x - 1, y - 2];
                space.move6 = [x - 2, y - 1];
                space.move7 = [x - 2, y + 1];
                space.move8 = [x - 1, y + 2];

                Object.keys(space).forEach(property => {
                    if (space[property][0] < 0 || space[property][0] > 7
                        || space[property][1] < 0 || space[property][1] > 7){
                            space[property] = null;
                        }
                });

                console.log(space);

                root = space;
            }
        }   
        console.log(`Root is ${root.coords}`);
    }



    const move = (target) => {
        generatePossibleMoves();

    }

    return {
        position,
        move
    }
}


const boardFactory = (boardMaxDimensions) => {
    const boardDimensions = boardMaxDimensions;



    return {boardDimensions};
}



const newBoard = boardFactory([7, 7]);

const newKnight = knightFactory([0, 0], newBoard);

newKnight.move(1,1);

console.log(newKnight.position);