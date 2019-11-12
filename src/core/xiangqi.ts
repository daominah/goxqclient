// board size with padding 4 row and 4 column to prevent knight go off board
const WIDTH = 3;
const HEIGHT = 4;

type Team = number & { _type: "Team" };
const WHITE = 1 as Team;
const BLACK = -1 as Team;

type Piece = number & { _type: "Piece" };
const PAWN     = 1 as Piece;
const pawn     = -1 as Piece;
const ADVISER  = 2 as Piece;
const adviser  = -2 as Piece;
const ELEPHANT = 3 as Piece;
const elephant = -3 as Piece;
const HORSE    = 4 as Piece;
const horse    = -4 as Piece;
const CANNON   = 5 as Piece;
const cannon   = -5 as Piece;
const CHARIOT  = 6 as Piece;
const chariot  = -6 as Piece;
const KING     = 7 as Piece;
const king     = -7 as Piece;
const EMPTY    = 0 as Piece;
const OFFBOARD = 255 as Piece;
const UNSEEN = 63 as Piece;
const unseen = -63 as Piece;


class Board {
    Squares: Piece[];

    constructor() {
        this.Squares = new Array<Piece>(WIDTH*HEIGHT)
    }
}

function OtherTeam(team: Team): Team {
    if (team == WHITE) {
        return BLACK
    }
    return WHITE
}

