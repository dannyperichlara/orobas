// "use strict"

// 2rq1rk1/1pb2ppp/p1n2n2/4p1B1/2P4N/1P1B3P/P2N1PP1/2RQ1RK1 b - - 0 15

const P =   1
const N =   2
const B =   3
const R =   4
const Q =   5
const K =   6
const p =   7
const n =   8
const b =   9
const r =  10
const q =  11
const k =  12

const WHITE =  1
const BLACK =  2

let AI = {}

let oldMathRandom = Math.random

// console.time()

// for (let i = 0; i < 10000000; i++) {
//     Math.random()
// }

// console.timeEnd()

// let randomNumbers = new Array(8000).fill(0)

// for (let i = 0; i < randomNumbers.length; i++) {
//     randomNumbers[i] = Math.random()
// }

// let randomIndex = 0

// Math.random = ()=>{
//     return randomNumbers[randomIndex++ % 8000]
// }

// console.time()

// for (let i = 0; i < 10000000; i++) {
//     Math.random()
// }

// console.timeEnd()

// console.time()

// for (let i = 0; i < 10000000; i++) {
//     Math.random()
// }

// console.timeEnd()

let orobas = {
    pieces: new Map(),
    pieceList: {
        pieces: new Map(),
        [k]: 0,
        [q]: 0,
        [r]: 0,
        [b]: 0,
        [n]: 0,
        [p]: 0,
        [P]: 0,
        [N]: 0,
        [B]: 0,
        [R]: 0,
        [Q]: 0,
        [K]: 0,
    },
    coords: [
        "a8","b8","c8","d8","e8","f8","g8","h8",    0,0,0,0,0,0,0,0,
        "a7","b7","c7","d7","e7","f7","g7","h7",    0,0,0,0,0,0,0,0,
        "a6","b6","c6","d6","e6","f6","g6","h6",    0,0,0,0,0,0,0,0,
        "a5","b5","c5","d5","e5","f5","g5","h5",    0,0,0,0,0,0,0,0,
        "a4","b4","c4","d4","e4","f4","g4","h4",    0,0,0,0,0,0,0,0,
        "a3","b3","c3","d3","e3","f3","g3","h3",    0,0,0,0,0,0,0,0,
        "a2","b2","c2","d2","e2","f2","g2","h2",    0,0,0,0,0,0,0,0,
        "a1","b1","c1","d1","e1","f1","g1","h1",    0,0,0,0,0,0,0,0,
    ],
    board: new Uint8Array(120),
    
    boardbits: [
        31,	30,	29,	28,	27,	26,	25,	24,	null,	null,	null,	null,	null,	null,	null,	null,
        23,	22,	21,	20,	19,	18,	17,	16,	null,	null,	null,	null,	null,	null,	null,	null,
        15,	14,	13,	12,	11,	10,	9,	8,	null,	null,	null,	null,	null,	null,	null,	null,
        7,	6,	5,	4,	3,	2,	1,	0,	null,	null,	null,	null,	null,	null,	null,	null,
        31,	30,	29,	28,	27,	26,	25,	24,	null,	null,	null,	null,	null,	null,	null,	null,
        23,	22,	21,	20,	19,	18,	17,	16,	null,	null,	null,	null,	null,	null,	null,	null,
        15,	14,	13,	12,	11,	10,	9,	8,	null,	null,	null,	null,	null,	null,	null,	null,
        7,	6,	5,	4,	3,	2,	1,	0,	null,	null,	null,	null,	null,	null,	null,	null,
    ],

    board64: [
        56,	57,	58,	59,	60,	61,	62,	63,	null,	null,	null,	null,	null,	null,	null,	null,
        48,	49,	50,	51,	52,	53,	54,	55,	null,	null,	null,	null,	null,	null,	null,	null,
        40,	41,	42,	43,	44,	45,	46,	47,	null,	null,	null,	null,	null,	null,	null,	null,
        32,	33,	34,	35,	36,	37,	38,	39,	null,	null,	null,	null,	null,	null,	null,	null,
        24,	25,	26,	27,	28,	29,	30,	31,	null,	null,	null,	null,	null,	null,	null,	null,
        16,	17,	18,	19,	20,	21,	22,	23,	null,	null,	null,	null,	null,	null,	null,	null,
        8,	9,	10,	11,	12,	13,	14,	15,	null,	null,	null,	null,	null,	null,	null,	null,
        0,	1,	2,	3,	4,	5,	6,	7,	null,	null,	null,	null,	null,	null,	null,	null,
    ],

    board0x88: [
        112,113,114,115,116,117,118,119,
        96,	97,	98,	99,	100,101,102,103,
        80,	81,	82,	83,	84,	85,	86,	87,
        64,	65,	66,	67,	68,	69,	70,	71,
        48,	49,	50,	51,	52,	53,	54,	55,
        32,	33,	34,	35,	36,	37,	38,	39,
        16,	17,	18,	19,	20,	21,	22,	23,
        0,	1,	2,	3,	4,	5,	6,	7,
    ],

    ranksW: [
        7,	7,	7,	7,	7,	7,	7,	7,	null,	null,	null,	null,	null,	null,	null,	null,
        6,	6,	6,	6,	6,	6,	6,	6,	null,	null,	null,	null,	null,	null,	null,	null,
        5,	5,	5,	5,	5,	5,	5,	5,	null,	null,	null,	null,	null,	null,	null,	null,
        4,	4,	4,	4,	4,	4,	4,	4,	null,	null,	null,	null,	null,	null,	null,	null,
        3,	3,	3,	3,	3,	3,	3,	3,	null,	null,	null,	null,	null,	null,	null,	null,
        2,	2,	2,	2,	2,	2,	2,	2,	null,	null,	null,	null,	null,	null,	null,	null,
        1,	1,	1,	1,	1,	1,	1,	1,	null,	null,	null,	null,	null,	null,	null,	null,
        0,	0,	0,	0,	0,	0,	0,	0,	null,	null,	null,	null,	null,	null,	null,	null,
    ],

    ranksB: [
        0,	0,	0,	0,	0,	0,	0,	0,	null,	null,	null,	null,	null,	null,	null,	null,
        1,	1,	1,	1,	1,	1,	1,	1,	null,	null,	null,	null,	null,	null,	null,	null,
        2,	2,	2,	2,	2,	2,	2,	2,	null,	null,	null,	null,	null,	null,	null,	null,
        3,	3,	3,	3,	3,	3,	3,	3,	null,	null,	null,	null,	null,	null,	null,	null,
        4,	4,	4,	4,	4,	4,	4,	4,	null,	null,	null,	null,	null,	null,	null,	null,
        5,	5,	5,	5,	5,	5,	5,	5,	null,	null,	null,	null,	null,	null,	null,	null,
        6,	6,	6,	6,	6,	6,	6,	6,	null,	null,	null,	null,	null,	null,	null,	null,
        7,	7,	7,	7,	7,	7,	7,	7,	null,	null,	null,	null,	null,	null,	null,	null,
    ],

    columns: [
        0,	1,	2,	3,	4,	5,	6,	7,	null,	null,	null,	null,	null,	null,	null,	null,
        0,	1,	2,	3,	4,	5,	6,	7,	null,	null,	null,	null,	null,	null,	null,	null,
        0,	1,	2,	3,	4,	5,	6,	7,	null,	null,	null,	null,	null,	null,	null,	null,
        0,	1,	2,	3,	4,	5,	6,	7,	null,	null,	null,	null,	null,	null,	null,	null,
        0,	1,	2,	3,	4,	5,	6,	7,	null,	null,	null,	null,	null,	null,	null,	null,
        0,	1,	2,	3,	4,	5,	6,	7,	null,	null,	null,	null,	null,	null,	null,	null,
        0,	1,	2,	3,	4,	5,	6,	7,	null,	null,	null,	null,	null,	null,	null,	null,
        0,	1,	2,	3,	4,	5,	6,	7,	null,	null,	null,	null,	null,	null,	null,	null,
    ],

    diagonals1: [
        0,	1,	2,	3,	4,	5,	6,	7,	null,	null,	null,	null,	null,	null,	null,	null,
        1,	2,	3,	4,	5,	6,	7,	8,	null,	null,	null,	null,	null,	null,	null,	null,
        2,	3,	4,	5,	6,	7,	8,	9,	null,	null,	null,	null,	null,	null,	null,	null,
        3,	4,	5,	6,	7,	8,	9,	10,	null,	null,	null,	null,	null,	null,	null,	null,
        4,	5,	6,	7,	8,	9,	10,	11,	null,	null,	null,	null,	null,	null,	null,	null,
        5,	6,	7,	8,	9,	10,	11,	12,	null,	null,	null,	null,	null,	null,	null,	null,
        6,	7,	8,	9,	10,	11,	12,	13,	null,	null,	null,	null,	null,	null,	null,	null,
        7,	8,	9,	10,	11,	12,	13,	14,	null,	null,	null,	null,	null,	null,	null,	null,
    ],

    diagonals2: [
        7,	6,	5,	4,	3,	2,	1,	0,	null,	null,	null,	null,	null,	null,	null,	null,
        8,	7,	6,	5,	4,	3,	2,	1,	null,	null,	null,	null,	null,	null,	null,	null,
        9,	8,	7,	6,	5,	4,	3,	2,	null,	null,	null,	null,	null,	null,	null,	null,
        10,	9,	8,	7,	6,	5,	4,	3,	null,	null,	null,	null,	null,	null,	null,	null,
        11,	10,	9,	8,	7,	6,	5,	4,	null,	null,	null,	null,	null,	null,	null,	null,
        12,	11,	10,	9,	8,	7,	6,	5,	null,	null,	null,	null,	null,	null,	null,	null,
        13,	12,	11,	10,	9,	8,	7,	6,	null,	null,	null,	null,	null,	null,	null,	null,
        14,	13,	12,	11,	10,	9,	8,	7,	null,	null,	null,	null,	null,	null,	null,	null,
    ],

    occupiedTop: 0,
    occupiedBottom: 0,

    ply: 0,

    turn: WHITE,
    castlingRights: [15], //8: wks, 4:wqs, 2:bks, 1: bqs
    lastMove: {},
    enPassantSquares: [null],

    hashkey: 0,
    pawnhashkey: 0,

    zobristKeys: {
        positions: new Map(),
        castlingRights: new Map(),
        turn: new Map(),
        enPassantSquares: new Map()
    },

    loadFen(fen) {
        fen = fen.split(' ')
        let board = fen[0]
        let turn = fen[1] === 'w'? 1 : 2
        let castling = fen[2]
        let enpassantsquare = fen[3]
        let movenumber = fen[5]

        this.movenumber = movenumber

        let castlingRights = 0
        
        if (castling.indexOf('K') > -1) castlingRights ^= 8
        if (castling.indexOf('Q') > -1) castlingRights ^= 4
        if (castling.indexOf('k') > -1) castlingRights ^= 2
        if (castling.indexOf('q') > -1) castlingRights ^= 1
        
        this.castlingRights = [castlingRights]    

        this.fen = fen
        this.board = this.fen2board(board)
        
        this.whiteKingIndex = this.board.indexOf(K)
        this.blackKingIndex = this.board.indexOf(k)

        
        if (enpassantsquare !== '-') {
            this.enPassantSquares = [this.coords.indexOf(enpassantsquare)]
            // console.log('En Passant Square', this.enPassantSquares)
        } else {
            this.enPassantSquares = [null]
        }
        
        this.initHashkey()
        this.changeTurn(turn)
    },

    fen2board (fen) {
        let board = fen.replace(/1/g, '0')
                    .replace(/2/g, '00')
                    .replace(/3/g, '000')
                    .replace(/4/g, '0000')
                    .replace(/5/g, '00000')
                    .replace(/6/g, '000000')
                    .replace(/7/g, '0000000')
                    .replace(/8/g, '00000000')
    
        board = board.replace(/\//g, '').split('')
    
        board = board.map(e=>{
          let piece = 0
    
          if (e === 'k') piece = 12
          if (e === 'q') piece = 11
          if (e === 'r') piece = 10
          if (e === 'b') piece =  9
          if (e === 'n') piece =  8
          if (e === 'p') piece =  7
          if (e === 'K') piece =  6
          if (e === 'Q') piece =  5
          if (e === 'R') piece =  4
          if (e === 'B') piece =  3
          if (e === 'N') piece =  2
          if (e === 'P') piece =  1
    
          return piece 
        })
    
        let board0x88 = []
    
        for (let i in board) {
          if (i % 8 === 0 && i>0) board0x88 = [...board0x88, null, null, null, null, null, null, null, null]
          board0x88.push(board[i])
        }
    
        board0x88 = [...board0x88, null, null, null, null, null, null, null, null]
    
      return board0x88
    },

    createBoard() {
        //r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq - 
        let board = [
            r,  n,  b,  q,  k,  b,  n,  r,     null, null, null, null, null, null, null, null,
            p,  p,  p,  p,  p,  p,  p,  p,     null, null, null, null, null, null, null, null,
            0,  0,  0,  0,  0,  0,  0,  0,     null, null, null, null, null, null, null, null,
            0,  0,  0,  0,  0,  0,  0,  0,     null, null, null, null, null, null, null, null,
            0,  0,  0,  0,  0,  0,  0,  0,     null, null, null, null, null, null, null, null,
            0,  0,  0,  0,  0,  0,  0,  0,     null, null, null, null, null, null, null, null,
            P,  P,  P,  P,  P,  P,  P,  P,     null, null, null, null, null, null, null, null,
            R,  N,  B,  Q,  K,  B,  N,  R,     null, null, null, null, null, null, null, null,
        ]

        for (let i = 0; i < 120; i++) {
            this.board[i] = board[i]
        }

        // this.board = [
        //     r,  n,  b,  q,  k,  b,  n,  r,     -8, -4, -4, -2, -2, -4, -4, -8,
        //     p,  p,  p,  p,  p,  p,  p,  p,     -1,  0,  1, -1, -1,  1,  0, -1,
        //     0,  0,  0,  0,  0,  0,  0,  0,      0,  1,  2,  3,  3,  2,  1,  0,
        //     0,  0,  0,  0,  0,  0,  0,  0,      1,  2,  3,  4,  4,  3,  2,  1,
        //     0,  0,  0,  0,  0,  0,  0,  0,      1,  2,  3,  4,  4,  3,  2,  1,
        //     0,  0,  0,  0,  0,  0,  0,  0,      0,  1,  2,  3,  3,  2,  1,  0,
        //     P,  P,  P,  P,  P,  P,  P,  P,     -1,  0,  1, -1, -1,  1,  0, -1,
        //     R,  N,  B,  Q,  K,  B,  N,  R,     -8, -4, -4, -2, -2, -4, -4, -8,
        // ]
        this.whiteKingIndex = this.board.indexOf(K)
        this.blackKingIndex = this.board.indexOf(k)

        this.castlingRights = [1 ^ 2 ^ 4 ^ 8]

        this.turn = WHITE

        this.rephistory = []
    },

    boardToBits(draw) {
        let top = ""
        let bottom = ""
        for (let i = 0; i < 120; i++) {
            if (i & 0x88) {
                i+=7; continue
            }

            if (this.board[i]) {
                if (i<=55) {
                    top+="1"
                } else {
                    bottom+="1"
                }
            } else {
                if (i<=55) {
                    top+="0"
                } else {
                    bottom+="0"
                }
            }
        }

        this.occupiedTop = parseInt(top, 2)
        this.occupiedBottom = parseInt(bottom, 2)

        if (draw) {
            this.drawBitboard()
        }
    },

    drawBitboard() {
        console.log(this.occupiedTop.toString(2))
        console.log(this.occupiedBottom.toString(2))
        
    },

    initZobrist() {
        // Inicializa keys Pieza/Casilla
        for (let piece of [k, q, r, b, n, p, P, N, B, R, Q, K]) {
            this.zobristKeys.positions[piece] = new Map()

            for (let i = 0; i < 120; i++) {
                if (i & 0x88) {
                    i += 7
                    continue
                }

                this.zobristKeys.positions[piece][i] = (Math.random()*0xFFFFFFFF) >>> 0
            }
        }

        // Inicializa keys de Turno
        this.zobristKeys.turn[WHITE] = (Math.random()*0xFFFFFFFF) >>> 0
        this.zobristKeys.turn[BLACK] = (Math.random()*0xFFFFFFFF) >>> 0

        // Inicializa keys de Derechos de Enroque
        this.zobristKeys.castlingRights[8] = (Math.random()*0xFFFFFFFF) >>> 0
        this.zobristKeys.castlingRights[4] = (Math.random()*0xFFFFFFFF) >>> 0
        this.zobristKeys.castlingRights[2] = (Math.random()*0xFFFFFFFF) >>> 0
        this.zobristKeys.castlingRights[1] = (Math.random()*0xFFFFFFFF) >>> 0

        // Inicializa keys de Casillas En Passant (negras)
        for (let i=32; i<=39; i++) {
            this.zobristKeys.enPassantSquares[i] = (Math.random()*0xFFFFFFFF) >>> 0
        }
        
        // Inicializa keys de Casillas En Passant (blancas)
        for (let i=80; i<=87; i++) {
            this.zobristKeys.enPassantSquares[i] = (Math.random()*0xFFFFFFFF) >>> 0
        }

        this.initHashkey()
    },

    initHashkey() {
        this.hashkey = 0

        // Inicializa hashkey con piezas del tablero
        for (let i = 0; i < 120; i++) {
            if (i & 0x88) {
                i += 7
                continue
            }

            let piece = this.board[i]

            if (piece === 0) continue

            this.updateHashkey(this.zobristKeys.positions[piece][i])

            if (piece === P || piece === p || piece === K || piece === k) {
                this.updatePawnHashkey(this.zobristKeys.positions[piece][i])
            }
        }
    },

    updateHashkey(value) {
        this.hashkey = ((this.hashkey ^ value) >>> 0)
    },

    updatePawnHashkey(value) {
        this.pawnhashkey = ((this.pawnhashkey ^ value) >>> 0)
    },

    createAttackRays() {
        let attackBoards = new Array(120)
        for (i = 0; i < 120; i++) {
            if (i & 0x88) { i+= 7; continue}

            let board = new Array(120).fill(0)
        }

        console.log(attackBoards[2])
        console.log(attackBoards[51])
        console.log(attackBoards[81])
    },

    colorOfSquare(square) {
        return (0x00AA0055 >> square) & 1
    },

    changeTurn(turn) {
        if (turn) {
            if (turn !== this.turn) {
                this.turn = turn

                this.updateHashkey(this.zobristKeys.turn[WHITE])
                this.updateHashkey(this.zobristKeys.turn[BLACK])
            }
        } else {
            this.turn = this.turn === WHITE? BLACK : WHITE // Esto es 35% más rápido que ~turn o -turn o cualquier otra cosa
            this.updateHashkey(this.zobristKeys.turn[WHITE])
            this.updateHashkey(this.zobristKeys.turn[BLACK])
        }
    },

    createPieces() {
        this.pieces[0] = {symbol: '.', color: 0, offsets: []}

        //Blancas
        this.pieces[P] = {symbol: 'P', color: WHITE, offsets: [-16, -17, -15]}
        this.pieces[N] = {symbol: 'N', color: WHITE, offsets: [-33, -31, -18, -14, 18, 14, 33, 31]}
        this.pieces[B] = {symbol: 'B', color: WHITE, offsets: [-17, -15, 17, 15]}
        this.pieces[R] = {symbol: 'R', color: WHITE, offsets: [-16, -1, 1, 16]}
        this.pieces[Q] = {symbol: 'Q', color: WHITE, offsets: [-17, -15, -16, -1, 1, 17, 15, 16]}
        this.pieces[K] = {symbol: 'K', color: WHITE, offsets: [-17, -15, -16, -1, 1, 17, 15, 16]}
        
        //Negras
        this.pieces[p] = {symbol: 'p', color: BLACK, offsets: [16, 17, 15]}
        this.pieces[n] = {symbol: 'n', color: BLACK, offsets: [33, 31, 18, 14, -18, -14, -33, -31]}
        this.pieces[b] = {symbol: 'b', color: BLACK, offsets: [17, 15, -17, -15]}
        this.pieces[r] = {symbol: 'r', color: BLACK, offsets: [16, 1, -1, -16]}
        this.pieces[q] = {symbol: 'q', color: BLACK, offsets: [17, 15, 16, 1, -1, -17, -15, -16]}
        this.pieces[k] = {symbol: 'k', color: BLACK, offsets: [17, 15, 16, 1, -1, -17, -15, -16]}
    },

    createPieceList() {
        this.pieceList = {
            pieces: new Map(),
            [k]: 0,
            [q]: 0,
            [r]: 0,
            [b]: 0,
            [n]: 0,
            [p]: 0,
            [P]: 0,
            [N]: 0,
            [B]: 0,
            [R]: 0,
            [Q]: 0,
            [K]: 0,
        }

        for (let i = 0; i < 120; i++) {
            if (i & 0x88) {
                i += 7
                continue
            }

            let piece = this.board[i]

            if (piece) {
                this.pieceList.pieces[piece*10 + this.pieceList[piece]] = i
                this.pieceList[piece]++
            }
        }

    },

    isSlidingPiece(piece, turn) {
        if (turn === WHITE) {
            return piece === B || piece === R || piece === Q
        } else {
            return piece === b || piece === r || piece === q
        }

    },

    //Parameters: piece, from, to, isCapture, capturedPiece, castleSide, enPassantSquares, promotingPiece
    createMove(m) {
        m.key = 10000*m.from + 10000000*m.to + 100*m.capturedPiece + m.piece

        return m
    },

    isSquareAttacked(square, attackerSide, count, xrays) {
        if (square & 0x88) return count? 0 : false

        let pFrom
        let nFrom
        let bFrom
        let rFrom
        let qFrom
        let kFrom
        let pTo  
        let nTo  
        let bTo  
        let rTo  
        let qTo  
        let kTo  

        if (attackerSide === BLACK) {
            pFrom = P
            nFrom = N
            bFrom = B
            rFrom = R
            qFrom = Q
            kFrom = K
            pTo   = p
            nTo   = n
            bTo   = b
            rTo   = r
            qTo   = q
            kTo   = k
        } else {
            pFrom = p
            nFrom = n
            bFrom = b
            rFrom = r
            qFrom = q
            kFrom = k
            pTo   = P
            nTo   = N
            bTo   = B
            rTo   = R
            qTo   = Q
            kTo   = K
        }

        let attacks = 0

        //Peones
        for (let i = 1; i <= 2; i++) {
            let to = square + this.pieces[pFrom].offsets[i]

            if (to & 0x88) continue

            if (this.board[to] === pTo) {
                if (count) {attacks++} else {return true}
            }
        }

        // Alfiles
        for (let i = 0; i < 4; i++) {
            let to = square
            let blocked = false
            let outofbounds = false

            while (!blocked && !outofbounds) {
                to = to + this.pieces[bFrom].offsets[i]

                if (to & 0x88) {
                    outofbounds = true
                } else {
                    if (this.board[to]) {
                        if (this.board[to] === bTo || this.board[to] === qTo) {
                            if (count) {
                                attacks++
                                blocked = true
                            } else {
                                return true
                            }
                        } else {
                            if (!xrays) blocked = true
                        }
                    }
                }
            }
        }

        //Torres
        for (let i = 0; i < 4; i++) {
            let to = square
            let blocked = false
            let outofbounds = false

            while (!blocked && !outofbounds) {
                to = to + this.pieces[rFrom].offsets[i]

                if (to & 0x88) {
                    outofbounds = true
                } else {
                    if (this.board[to]) {
                        if (this.board[to] === rTo || this.board[to] === qTo) {
                            if (count) {
                                attacks++
                                blocked = true
                            } else {
                                return true
                            }
                        } else {
                            if (!xrays) blocked = true
                        }
                    }
                }
            }
        }

        // Caballos
        for (let i = 0; i < 8; i++) {
            let to = square + this.pieces[nFrom].offsets[i]

            if (to & 0x88) continue

            if (this.board[to] === nTo) {
                if (count) {attacks++} else {return true}
            }
        }

        //Rey
        for (let i = 0; i <= 7; i++) {
            let to = square + this.pieces[kFrom].offsets[i]

            if (to & 0x88) continue

            if (this.board[to] === kTo) {
                if (count) {attacks++} else {return true}
            }
        }

        return attacks
    },

    getAttackZone(color) {
        let attackZone = Array(120).fill(0)

        for (let square = 0; square < 120; square++) {
            if (square & 0x88) continue
            let attacks = this.isSquareAttacked(square, color, true)

            attackZone[square] += attacks
        }

        return attackZone
    },

    drawAttackZone(attackZone) {
        let attackString = ''

        for (let i = 0; i < 120; i++) {
            if (i & 0x88) {
                i += 7
                continue
            }

            attackString += attackZone[i]? attackZone[i] + ' ' : '. '

            if (i % 16 === 7) attackString += '\n'
        }

        console.log(attackString)
    },

    getCastlingRights() {
        return this.castlingRights[this.castlingRights.length - 1]
    },

    getMoves(forMobility, onlyCaptures) {
        forMobility = !!forMobility

        let mobilityMoves

        if (forMobility) {
            mobilityMoves = new Array(13).fill({safe:0, unsafe:[]})
    
            mobilityMoves[P] = {safe:[0,0,0,0,0,0,0,0], unsafe: [0,0,0,0,0,0,0,0]}
            mobilityMoves[N] = {safe:[0,0], unsafe: [0,0]}
            mobilityMoves[B] = {safe:[0,0], unsafe: [0,0]}
            mobilityMoves[R] = {safe:[0,0], unsafe: [0,0]}
            mobilityMoves[Q] = {safe:[0,0], unsafe: [0,0]}
            mobilityMoves[K] = {safe:[0], unsafe: [0]}
    
            mobilityMoves[p] = {safe:[0,0,0,0,0,0,0,0], unsafe: [0,0,0,0,0,0,0,0]}
            mobilityMoves[n] = {safe:[0,0], unsafe: [0,0]}
            mobilityMoves[b] = {safe:[0,0], unsafe: [0,0]}
            mobilityMoves[r] = {safe:[0,0], unsafe: [0,0]}
            mobilityMoves[q] = {safe:[0,0], unsafe: [0,0]}
            mobilityMoves[k] = {safe:[0], unsafe: [0]}
        }
        
        let moves = []

        let moveindex = 0

        let occupied = []//(new Array(32)).fill(0)
        let occupiedIndex = 0
        let isWhite = this.turn === WHITE

        let nPieces = {
            [P]: -1,
            [N]: -1,
            [B]: -1,
            [R]: -1,
            [Q]: -1,
            [K]: -1,
            [p]: -1,
            [n]: -1,
            [b]: -1,
            [r]: -1,
            [q]: -1,
            [k]: -1,
        }

        for (let i = 0; i < 120; i++) {
            if (i & 0x88) {
                i+=7; continue
            }

            let piece = this.board[i]

            
            if (!piece) continue
            
            nPieces[piece]++

            let from = i

            if (this.color(piece) !== this.turn) continue

            if (!onlyCaptures) {
                let castlingRights = this.getCastlingRights()
                
                if (piece === K && i === 116) {
                    if (castlingRights & 8) {
                        if (
                            !this.board[117] &&
                            !this.board[118] &&
                            !this.isSquareAttacked(117, BLACK) &&
                            !this.isSquareAttacked(118, BLACK)
                            ) {
                                if (forMobility) {
                                    mobilityMoves[piece].unsafe[nPieces[piece]]++
                                } else {
                                    moves[moveindex++]=(this.createMove({piece: K, from:116, to:118, isCapture:false, capturedPiece:0, castleSide:8, enPassantSquares:null}))
                                }
                            }
                    }
                    
                    if (castlingRights & 4) {
                        if (
                            !this.board[115] &&
                            !this.board[114] &&
                            !this.board[113] &&
                            !this.isSquareAttacked(115, BLACK) &&
                            !this.isSquareAttacked(114, BLACK)
                            ) {
                            if (forMobility) {
                                mobilityMoves[piece].unsafe[nPieces[piece]]++
                                } else {
                                    moves[moveindex++]=(this.createMove({piece: K, from:116, to:114, isCapture:false, capturedPiece:0, castleSide:4, enPassantSquares:null}))
                                }
                        }
                    } 
                }
    
                if (piece === k && i === 4) {
                    if (castlingRights & 2) {
                        if (
                            !this.board[5] &&
                            !this.board[6] &&
                            !this.isSquareAttacked(5, WHITE) &&
                            !this.isSquareAttacked(6, WHITE)
                            ) {
                            if (forMobility) {
                                mobilityMoves[piece].unsafe[nPieces[piece]]++
                                } else {
                                    moves[moveindex++]=(this.createMove({piece: k, from:4, to:6, isCapture:false, capturedPiece:0, castleSide:2, enPassantSquares:null}))
                                }
                        }
                    }
                    
                    if (castlingRights & 1) {
                        if (
                            !this.board[3] &&
                            !this.board[2] &&
                            !this.board[1] &&
                            !this.isSquareAttacked(3, WHITE) &&
                            !this.isSquareAttacked(2, WHITE)
                            ) {
                            if (forMobility) {
                                mobilityMoves[piece].unsafe[nPieces[piece]]++
                                } else {
                                    moves[moveindex++]=(this.createMove({piece: k, from:4, to:2, isCapture:false, capturedPiece:0, castleSide:1, enPassantSquares:null}))
                                }
                        }
                    }
                }
            }

            //Peones
            if (piece === P || piece === p) {
                    for (let j = 0, len=this.pieces[piece].offsets.length; j < len; j++) {
                        let to = from + this.pieces[piece].offsets[j]
    
                        if (to & 0x88) continue
    
                        //Offsets 1 & 2 corresponden a capturas
                        if (j >= 1) {
                            let isCapture = false
        
                            let capturedPiece = this.board[to]
        
                            if (capturedPiece) {
                                if (this.color(capturedPiece) === this.turn) {
                                    continue
                                } else {
                                    isCapture = true

                                    let promotingPiece = null
    
                                    if (to>=0 && to <= 7) {
                                        promotingPiece = Q
                                    }
                                    
                                    if (to>=112 && to <= 119) {
                                        promotingPiece = q
                                    }

                                    if (forMobility) {
                                        mobilityMoves[piece].unsafe[nPieces[piece]]++
                                } else {
                                    moves[moveindex++]=(this.createMove({piece, from, to, isCapture, capturedPiece, castleSide:0, enPassantSquares:null, promotingPiece}))
                                }
                                }
                            } else {
                                let lastEP = this.enPassantSquares[this.enPassantSquares.length - 1]
                                if (to === lastEP) {
                                    isCapture = false
                                    //En passant move
                                    if (forMobility){
                                        mobilityMoves[piece].unsafe[nPieces[piece]]++
                                } else {
                                     moves[moveindex++]=(this.createMove({piece, from, to, isCapture, capturedPiece:0, castleSide:0, enPassantSquares:null, enPassant: true}))
                                }
                                    epnodes++
                                }
                            }
                            
                        } else {
                            // let to = from + this.pieces[piece].offsets[0]
                            
                            // if (to & 0x88) continue
                            
                            let blockingPiece = this.board[to]
                            let promotingPiece = null
                            
                            if (blockingPiece) {
                                continue
                            }
                            
                            if (to>=0 && to <= 7) {
                                promotingPiece = Q
                            }
                            
                            if (to>=112 && to <= 119) {
                                promotingPiece = q
                            }

                            if (onlyCaptures && !promotingPiece) continue

                            if (forMobility) {
                                mobilityMoves[piece].unsafe[nPieces[piece]]++
                        } else {
                            moves[moveindex++]=(this.createMove({piece, from, to, isCapture:false, capturedPiece:0, castleSide:0, enPassantSquares:null, promotingPiece}))
                        }
    
                            let whitePawns = this.turn === WHITE && from >= 96 && from <= 103
                            let blackPawns = this.turn === BLACK && from >= 16 && from <= 23
    
                            if (whitePawns || blackPawns) {
                                let enPassantSquares = to
                                
                                to = to + this.pieces[piece].offsets[0]
    
                                if (to & 0x88) continue
    
                                if (this.board[to]) continue
                                //Doble push
                                if (forMobility){
                                    mobilityMoves[piece].unsafe[nPieces[piece]]++
                                } else {
                                    let doublePushMove = this.createMove({piece, from, to, isCapture:false, capturedPiece:0, castleSide:0, enPassantSquares})
                                    moves[moveindex++]=(doublePushMove)
                                }
                            }
                        }
                    }
    
                    continue                    
            } else {
                for (let j=0, len = this.pieces[piece].offsets.length; j < len; j++) {
                    let to = i
                    
                    while (true) {
                        to += this.pieces[piece].offsets[j]
                        
                        if (to & 0x88) break
                        
                        let isCapture = false
    
                        let capturedPiece = this.board[to]
    
                        if (capturedPiece) {
                            if (this.color(capturedPiece) === this.turn) {
                                break
                            } else {
                                isCapture = true
                            }
                        } else {
                            if (onlyCaptures) continue
                        }
    
                        if (forMobility) {
                            mobilityMoves[piece].unsafe[nPieces[piece]]++

                            let safe = true
                            
                            if (this.turn === WHITE) {
                                if (this.board[to - 15] === p || this.board[to - 17] === p) safe = false
                            } else {
                                if (this.board[to + 15] === P || this.board[to + 17] === P) safe = false
                            }
                            
                            if (safe) {
                                // mobilityMoves[piece].safe++
                                mobilityMoves[piece].safe[nPieces[piece]]++
                            }
                            
                        } else {
                            moves[moveindex++]=(this.createMove({piece, from, to, isCapture, capturedPiece, castleSide:0, enPassantSquares:null}))
                        }
    
                        if (isCapture || piece === N || piece === n || piece === K || piece === k) {
                            break
                        }
                    }
                }
            }
            
        }

        if (forMobility) return mobilityMoves

        return moves
    },

    evaluate() {
        let material = 0
        let psqt = 0
        
        for (let i = 0; i < 120; i++) {
            if (i & 0x88) {
                i+=7; continue
            }
            let piece = this.board[i]
            if (!piece) continue
            material += 100*piece
            psqt += this.board[i+8] * this.color(piece)
        }

        let score = orobas.color(orobas.turn) * (material + psqt)

        return  score
    },

    draw() {
        let board = ''
        for (let i = 0; i < 120; i++) {
            if (i & 0x88) {
                i += 7
                continue
            }

            let piece = this.board[i]

            board += this.pieces[piece].symbol + ' '

            if (i % 16 === 7) board += '\n'
        }
        console.log(board)
    },

    makeMove(move, illegal) {
        let me = this.turn
        let enemy = this.turn === WHITE? BLACK : WHITE

        if (move.castleSide) {
            let canCastle = move.castleSide & this.getCastlingRights()
            
            if (!canCastle) {
                return false
            }
            
            let from
            let square1
            let to

            if (move.castleSide === 8)  {
                if (this.board[117] || this.board[118]) return false

                if (!this.board[119]) return false

                from = 116; square1 = 117; to = 118
            } else if (move.castleSide === 4)  {
                if (this.board[115] || this.board[114] || this.board[113]) return false

                if (!this.board[112]) return false
                
                from = 116; square1 = 115; to = 114
            } else if (move.castleSide === 2)  {
                if (this.board[5] || this.board[6]) return false
                if (!this.board[7]) return false
                
                from = 4; square1 = 5; to = 6
            } else {
                if (this.board[3] || this.board[2] || this.board[1]) return false
                if (!this.board[0]) return false

                from = 4; square1 = 3; to = 2
            }
            
            if (this.isSquareAttacked(from, enemy)) {
                return false
            }
            if (this.isSquareAttacked(square1, enemy)) {
                return false
            }
            if (this.isSquareAttacked(to, enemy)) {
                return false
            }
        }
        
        this.makeEffectiveMove(move)

        
        //Chequea legalidad
        
        if (this.isKingInCheck()) {
            this.unmakeMove(move)
            
            this.changeTurn()
            return false
        }
        
        this.changeTurn()

        return true
    },

    makeEffectiveMove(move) {
        this.ply++

        // Remueve pieza capturada de casilla de destino
        if (move.isCapture) {
            this.removePiece(move.capturedPiece, move.to)
        }

        // Quita la pieza de casilla de origen
        this.removePiece(move.piece, move.from)
        
        if (move.promotingPiece) {
            this.addPîece(move.promotingPiece, move.to)
        } else {
            this.addPîece(move.piece, move.to)
        }

        if (move.piece === K) this.setKingPosition(WHITE, move.to)
        if (move.piece === k) this.setKingPosition(BLACK, move.to)

        if (move.enPassant) {
            if (this.turn === WHITE) {
                this.removePiece(p, move.to + 16)
            } else {
                this.removePiece(P, move.to - 16)
            }
        }
        
        if (move.enPassantSquares) {
            let lastEnPassantSquare = this.enPassantSquares[this.enPassantSquares.length - 1]
            this.updateHashkey(this.zobristKeys.enPassantSquares[lastEnPassantSquare]) // Quita última casilla e.p.
            this.updateHashkey(this.zobristKeys.enPassantSquares[move.enPassantSquares]) // Agrega nuevo e.p.
        }
        
        this.enPassantSquares.push(move.enPassantSquares)

        let castlingRights = this.getCastlingRights()

        if (move.castleSide) {
            if (move.castleSide === 8) {
                this.removePiece(R, 119)
                this.addPîece(R, 117)
                
                castlingRights = castlingRights & ~8 & ~4
            }
            
            if (move.castleSide === 4) {
                this.removePiece(R, 112)
                this.addPîece(R, 115)
                
                castlingRights = castlingRights & ~8 & ~4
            }

            if (move.castleSide === 2) {
                this.removePiece(r, 7)
                this.addPîece(r, 5)

                castlingRights = castlingRights & ~2 & ~1
            }


            if (move.castleSide === 1) {
                this.removePiece(r, 0)
                this.addPîece(r, 3)

                castlingRights = castlingRights & ~2 & ~1
            }
        } else {
            
        }
        if ((castlingRights & 8) && (move.piece === K || (move.piece === R && move.from === 119) || move.to === 119)) {
            castlingRights = castlingRights & ~8
        }

        if ((castlingRights & 4) && (move.piece === K || (move.piece === R && move.from === 112) || move.to === 112)) {
            castlingRights = castlingRights & ~4
        
        }

        if ((castlingRights & 2) && (move.piece === k || (move.piece === r && move.from === 7) || move.to === 7)) {
            castlingRights = castlingRights & ~2
        }

        if ((castlingRights & 1) && (move.piece === k || (move.piece === r && move.from === 0) || move.to === 0)) {
            castlingRights = castlingRights & ~1
        }
        
        this.castlingRights.push(castlingRights)

        this.rephistory.push(this.hashkey)
    },

    unmakeMove(move) {
        this.ply--

        if (move.promotingPiece) {
            this.removePiece(move.promotingPiece, move.to)
        } else {
            this.removePiece(move.piece, move.to)
        }
        
        if (move.capturedPiece) {
            this.addPîece(move.capturedPiece, move.to)
        }
        
        this.addPîece(move.piece, move.from)

        if (move.piece === K) this.setKingPosition(WHITE, move.from)
        if (move.piece === k) this.setKingPosition(BLACK, move.from)

        if (move.enPassant) {
            if (this.turn === BLACK) {
                this.addPîece(p, move.to + 16)

            } else {
                this.addPîece(P, move.to - 16)
            }
        }

        if (move.castleSide) {
            if (move.castleSide === 8) {
                this.removePiece(R, 117)
                this.addPîece(R, 119)
            }
            
            if (move.castleSide === 4) {
                this.removePiece(R, 115)
                this.addPîece(R, 112)
            }
            
            if (move.castleSide === 2) {
                this.removePiece(r, 5)
                this.addPîece(r, 7)
            }

            if (move.castleSide === 1) {
                this.removePiece(r, 3)
                this.addPîece(r, 0)
            }
        }

        this.castlingRights.pop()
        this.enPassantSquares.pop()

        if (move.enPassantSquares) {
            let lastEnPassantSquare = this.enPassantSquares[this.enPassantSquares.length - 1] // El penúltimo
            this.updateHashkey(this.zobristKeys.enPassantSquares[move.enPassantSquares]) // Quita e.p.
            this.updateHashkey(this.zobristKeys.enPassantSquares[lastEnPassantSquare]) // Agrega e.p. anterior
        }
        
        this.changeTurn()

        this.rephistory.pop()
    },

    addPîece(piece, square) {
        this.updateHashkey(this.zobristKeys.positions[piece][square]) //Agrega pieza al hashkey en casilla de destino

        if (piece === P || piece === p/* || piece === K || piece === k*/) {
            this.updatePawnHashkey(this.zobristKeys.positions[piece][square]) //Agrega pieza al hashkey en casilla de destino
        }

        this.board[square] = piece
    },

    removePiece(piece, square) {
        
        this.updateHashkey(this.zobristKeys.positions[piece][square]) //Quita pieza del hashkey de su casilla original
        
        if (piece === P || piece === p/* || piece === K || piece === k*/) {
            this.updatePawnHashkey(this.zobristKeys.positions[piece][square]) //Quita pieza del hashkey de su casilla original
        }
        
        this.board[square] = 0
    },

    setKingPosition(turn, square) {
        if (turn === WHITE) {
            this.whiteKingIndex = square
        } else {
            this.blackKingIndex = square
        }
    },
 
    color(piece) {
        return piece >= p? BLACK : WHITE
    },

    perftData: {
        nodes: 0,
        castles: 0,
        captures: 0,
        enpassant: 0,
        checkmates: 0,
        checks: 0
    },

    isKingInCheck() {
        if (this.turn === WHITE) {
            return this.isSquareAttacked(this.whiteKingIndex, BLACK, false)
            
        } else {
            return this.isSquareAttacked(this.blackKingIndex, WHITE, false)

        }
    },

    perft(depth) {
    
        if (depth === 0) {
            this.perftData.nodes++
            return 1
        }
        
        let nodes = 0
        let moves = this.getMoves(false, false)
        
        let legal = 0

        for (let j = 0; j < moves.length; j++) {
            
            if (orobas.makeMove(moves[j])) {
                legal++

                let incheck = this.isKingInCheck()

                if (incheck) this.perftData.checks++

                if (moves[j].isCapture || moves[j].enPassant) this.perftData.captures++
                if (moves[j].castleSide) this.perftData.castles++
                if (moves[j].enPassant) this.perftData.enpassant++

                nodes += this.perft(depth - 1)

                orobas.unmakeMove(moves[j])
            }
        }

        if (legal === 0) {
            this.perftData.checkmates++
        }

        return nodes
    },

    init(silent) {

        if (!silent) console.log('Creating new game!!!!!')
        this.createBoard()
        this.createPieces()
        this.createPieceList()
        this.initZobrist()
        if (!silent) this.draw()
    }
}

let epnodes = 0

orobas.init()

// const {sort} = require('fast-sort')
// require('fast-filter').install('filter')

// let seedrandom = require('seedrandom')
// let rnd = new seedrandom('orobas1234', {global: true})

Math.abs = (x) => {
    let y = (x >> 31);
    return (x ^ y) - y;
}

AI = {
    version: "6.1.6",
    totaldepth: 48,
    ttNodes: 0,
    collisions: 0,
    iteration: 0,
    qsnodes: 0,
    nodes: 0,
    pnodes: 0, //Pawn structure nodes
    phnodes: 0, //Pawn hash nodes
    pvnodes: 0, //Pawn attack hash nodes
    rmoves: 0, //Random pruned nodes
    lazynodes: 0, //Lazy evaluation nodes
    uctnodes: 0,
    probcuts: 0,
    evalhashnodes: 0,
    evalnodes: 0,
    evalTime: 0,
    totalMoves: 0,
    genMovesTime: 0,
    moveTime: 0,
    status: null,
    fhf: 0,
    fh: 0,
    random: 0, //40 +depth
    phase: 0,
    htlength: 12e6,
    pawntlength: 5e5,
    mindepth: [6,6,6,6],
    // mindepth: [0,0,0,0],
    secondspermove: 0.2,
    lastmove: null,
    f: 0,
    previousls: 0,
    lastscore: 0,
    nullWindowFactor: 4 // 330 ELO
}

// ÍNDICES
const PAWN = 1
const KNIGHT = 2
const BISHOP = 3
const ROOK = 4
const QUEEN = 5
const KING = 6

// const K = KING
// const Q = QUEEN
// const R = ROOK
// const B = BISHOP
// const N = KNIGHT
// const P = PAWN
// const k = KING + 6
// const q = QUEEN + 6
// const r = ROOK + 6
// const b = BISHOP + 6
// const n = KNIGHT + 6
// const p = PAWN + 6

// const WHITE = 1
// const BLACK = 2

const CENTER = [51,52,67,68]

const WIDECENTER = [50,51,52,53,66,67,68,69]

const WHITECENTER = [66,67,68,69]
const BLACKCENTER = [50,51,52,53]

const WHITEINDEX = [1,2,3, 4, 5, 6]
const BLACKINDEX = [7,8,9,10,11,12]
const ALLINDEX = [1,2,3,4,5,6,7,8,9,10,11,12]

const ABS = new Map()

ABS[0] = 0
ABS[k] = K
ABS[q] = Q
ABS[r] = R
ABS[b] = B
ABS[n] = N
ABS[p] = P
ABS[P] = P
ABS[N] = N
ABS[B] = B
ABS[R] = R
ABS[Q] = Q
ABS[K] = K

function smoothClamp(x, limit) {
    return Math.round(limit * Math.tanh(x / limit)) | 0;
}

const OPENING = 0
const MIDGAME = 1
const EARLY_ENDGAME = 2
const LATE_ENDGAME = 3

const LOWERBOUND = -1
const EXACT = 0
const UPPERBOUND = 1

AI.PIECE_VALUES = [
    new Map(),
    new Map(),
    new Map(),
    new Map(),
]

AI.PSQT_OPENING =  [null]
AI.PSQT_LATE_ENDGAME =  [null]




// importScripts('structurebonus.js')
// importScripts('psqtbonus.js')
// importScripts('piecedistancebonus.js')
importScripts('parameters.js')
importScripts('probabilidades_blancas.js')

const VPAWN = AI.POV[0]
const VPAWN2 = VPAWN / 2 | 0
const VPAWN3 = VPAWN / 3 | 0
const VPAWN4 = VPAWN / 4 | 0
const VPAWN5 = VPAWN / 5 | 0
const VPAWN10= VPAWN /10 | 0
const VPAWNx2 = 2*VPAWN | 0
const VPAWNx3 = 3*VPAWN | 0
const VPAWNx4 = 4*VPAWN | 0

const MARGIN1 = VPAWN/AI.nullWindowFactor | 0
const MARGIN2 = VPAWN*2/AI.nullWindowFactor | 0
const MARGIN3 = VPAWN*3/AI.nullWindowFactor | 0
const MARGIN4 = VPAWN*4/AI.nullWindowFactor | 0
const MARGIN5 = VPAWN*5/AI.nullWindowFactor | 0
const MARGIN10 = VPAWN*10/AI.nullWindowFactor | 0
const SMALLMARGIN = (VPAWN/2)/AI.nullWindowFactor | 0
const VERYSMALLMARGIN = (VPAWN/3)/AI.nullWindowFactor | 0

let FUTILITYMARGIN = []

// piece values (tu entrada)
const MINOR = AI.POV[1] / AI.nullWindowFactor | 0; // menor pieza no-pawn (caballo) AJUSTADA

// perfiles:
// conservador: base 150, scale 60
// equilibrado: base PAWN (126), scale 76
// agresivo: base 100, scale 90

(function futilityMargins(n, { base = MARGIN1*1.5, scale = 0.6 * MARGIN1, cap = 0.8 * MINOR | 0 } = {}) {
  for (let d = 0; d <= AI.totaldepth; d++) {
    let m = base + scale * d | 0;
    if (cap !== null && m > cap) m = cap;
    FUTILITYMARGIN.push(m);
  }
})()

// Inicializar array
AI.LMP = [];

// Total depth de tu motor
for (let depth = 0; depth <= AI.totaldepth; depth++) {
    // Fórmula agresiva: primeros movimientos que NO se podan
    let threshold = Math.floor(10 / Math.log2(depth + 2));
    
    // Nunca menos de 1 movimiento
    AI.LMP[depth] = Math.max(1, threshold);
}

console.log(AI.LMP)

console.log('Max material value', AI.maxMaterialValue)

const MATE = 34 * MARGIN1
const DRAW = 0
const INFINITY = MATE + 1 | 0

const EMPTYMOVE = {
    key: 0
}

AI.ZEROINDEX = new Map()

AI.ZEROINDEX[P] = 0
AI.ZEROINDEX[N] = 1
AI.ZEROINDEX[B] = 2
AI.ZEROINDEX[R] = 3
AI.ZEROINDEX[Q] = 4
AI.ZEROINDEX[K] = 5
AI.ZEROINDEX[p] = 0
AI.ZEROINDEX[n] = 1
AI.ZEROINDEX[b] = 2
AI.ZEROINDEX[r] = 3
AI.ZEROINDEX[q] = 4
AI.ZEROINDEX[k] = 5

//CREA TABLA PARA REDUCCIONES
AI.LMR_TABLE = new Array(AI.totaldepth + 1)

for (let depth = 0; depth < AI.totaldepth + 1; depth++) {

    AI.LMR_TABLE[depth] = new Array(218)

    for (let moves = 1; moves < 218; moves++) {
        AI.LMR_TABLE[depth][moves] = Math.round(Math.log(depth)*Math.log(moves)/2) | 0
        // AI.LMR_TABLE[depth][moves] =
        //     (depth >= 3 && moves >= 3) &&               // condiciones mínimas
        //     Math.min(
        //         Math.floor( Math.log(moves + 1) * Math.pow(depth, 0.65) / 2.1 ) || 1,  // fórmula agresiva + fallback a 1
        //         depth - 2                                                               // límite máximo permitido
        //     ) || 0;                               // si falla alguna condición, reducción = 0

    }
}

AI.CENTERMANHATTAN = [
    6, 5, 4, 3, 3, 4, 5, 6,  null,  null,  null,  null,  null,  null,  null,  null,
    5, 4, 3, 2, 2, 3, 4, 5,  null,  null,  null,  null,  null,  null,  null,  null,
    4, 3, 2, 1, 1, 2, 3, 4,  null,  null,  null,  null,  null,  null,  null,  null,
    3, 2, 1, 0, 0, 1, 2, 3,  null,  null,  null,  null,  null,  null,  null,  null,
    3, 2, 1, 0, 0, 1, 2, 3,  null,  null,  null,  null,  null,  null,  null,  null,
    4, 3, 2, 1, 1, 2, 3, 4,  null,  null,  null,  null,  null,  null,  null,  null,
    5, 4, 3, 2, 2, 3, 4, 5,  null,  null,  null,  null,  null,  null,  null,  null,
    6, 5, 4, 3, 3, 4, 5, 6,  null,  null,  null,  null,  null,  null,  null,  null,
]

AI.manhattanDistance = (board, sq1, sq2)=> {
    sq1 = board.board64[sq1] // from 0x88 to 64
    sq2 = board.board64[sq2] // from 0x88 to 64
    let file1, file2, rank1, rank2;
    let rankDistance, fileDistance;
    file1 = sq1  & 7;
    file2 = sq2  & 7;
    rank1 = sq1 >> 3;
    rank2 = sq2 >> 3;
    rankDistance = Math.abs(rank2 - rank1);
    fileDistance = Math.abs(file2 - file1);
    return rankDistance + fileDistance;
}

// Chebyshev distance
AI.distance = (board, sq1, sq2)=>{
    sq1 = board.board64[sq1] // from 0x88 to 64
    sq2 = board.board64[sq2] // from 0x88 to 64

    let file1, file2, rank1, rank2
    let rankDistance, fileDistance
    file1 = sq1  & 7
    file2 = sq2  & 7
    rank1 = sq1 >> 3
    rank2 = sq2 >> 3
    rankDistance = Math.abs(rank2 - rank1)
    fileDistance = Math.abs(file2 - file1)
    return Math.max(rankDistance, fileDistance)
}

// MVV-LVA
// Valor para determinar orden de capturas,
// prefiriendo la víctima más valiosa con el atacante más débil
//https://open-chess.org/viewtopic.php?t=3058
// /*P*/[6002, 20225, 20250, 20400, 20800, 26900],
let mvvlvaScores =  [   
    /*    P      N      B      R      Q       K    */
/*P*/[6002,20225,20250,20400,20800,26900],
/*N*/[4775, 6004,20025,20175,20575,26675],
/*B*/[4750, 4975, 6006,20150,20550,26650],
/*R*/[4600, 4825, 4850, 6008,20400,26500],
/*Q*/[4200, 4425, 4450, 4600, 6010,26100],
/*K*/[3100, 3325, 3350, 3500, 3900,26000],
]


AI.MVVLVASCORES = []
for (let e of ALLINDEX) {
    AI.MVVLVASCORES[e] = []
    for (let f of ALLINDEX) {
        let score = mvvlvaScores[AI.ZEROINDEX[e]][AI.ZEROINDEX[f]]

        AI.MVVLVASCORES[e][f] = score
    }
}

// CREA TABLAS DE TRASPOSICIÓN / PEONES / HISTORIA
AI.createTables = function (board, tt, ev, hh, pp) {
    // console.log('Creating tables', tt, ev, hh, pp)

    if (tt) {
        AI.collisions = 0
        AI.ttGets = 0

        AI.hashTable = (new Array(this.htlength)).fill(null)
    }

    if (ev) {
        AI.evalTable = (new Array(this.htlength)).fill(null)
    }

    if (hh) {

        AI.history = new Map()
        
        AI.history[K] = Array(120).fill(0)
        AI.history[Q] = Array(120).fill(0)
        AI.history[R] = Array(120).fill(0)
        AI.history[B] = Array(120).fill(0)
        AI.history[N] = Array(120).fill(0)
        AI.history[P] = Array(120).fill(0)
        
        AI.history[k] = Array(120).fill(0)
        AI.history[q] = Array(120).fill(0)
        AI.history[r] = Array(120).fill(0)
        AI.history[b] = Array(120).fill(0)
        AI.history[n] = Array(120).fill(0)
        AI.history[p] = Array(120).fill(0)

    }

    if (pp) {
        AI.pawncollisions = 0
        AI.phnodes = 0

        AI.pawnTable = (new Array(this.pawntlength)).fill(null)

        AI.phnodes = 0
        AI.pnodes = 0
    }
}

//ESTABLECE VALORES ALEATORIAS EN LA APERTURA (PARA TESTEOS)
AI.randomizePSQT = function () {
    if (AI.phase === OPENING) {
        //From Knight to Queen
        for (let i of WHITEINDEX) {
            AI.PSQT[i] = AI.PSQT[i].map(e => {
                return e + Math.random() * AI.random - AI.random / 2 | 0
            })
        }
    }
}

AI.evaluate = function (board, ply, alpha, beta, pvNode, incheck, illegalMovesSoFar) {

    let cutNode = !pvNode
    let repetitions = 0

    // Repetitions (+14 ELO)
    for (let i = board.rephistory.length - 2; i >= 0; i-- ) {
        if (board.hashkey === board.rephistory[i]) {
            repetitions++

            if (repetitions > 1) {
                return DRAW
            }
        }
    }

    let progress = 100 * (1 - AI.totalmaterial / AI.maxMaterialValue) | 0

    AI.phase = progress > AI.PHASELIMITS[2]? 3 : (progress > AI.PHASELIMITS[1]? 2 : (progress > AI.PHASELIMITS[0]? 1 : 0))

    if (!AI.phase) AI.phase = 0
    
    let turn = board.turn
    let sign = turn === WHITE? 1 : -1
    
    let evalEntry = AI.evalTable[board.hashkey % this.htlength]
    
    if (evalEntry && evalEntry.hashkey === board.hashkey) {
        this.evalhashnodes++
        return sign * evalEntry.score / AI.nullWindowFactor | 0
    }

    this.evalnodes++
    
    // let t0 = Date.now()

    alpha = alpha * this.nullWindowFactor | 0
    beta = beta * this.nullWindowFactor | 0

    let score = (AI.random? Math.random()*AI.random - AI.random/2 | 0 : 0)

    let openingMaterial = 0
    let endgameMaterial = 0


    let openingPsqt = 0
    let endgamePsqt = 0

    let tempTotalMaterial = 0

    let pieceKingDistance = 0

    let pieceCount = new Array(13).fill(0)

    let pieces = {
        [P]: [],
        [N]: [],
        [B]: [],
        [R]: [],
        [Q]: [],
        [K]: [],

        [p]: [],
        [n]: [],
        [b]: [],
        [r]: [],
        [q]: [],
        [k]: [],
    }

    for (let i = 0; i < 120; i++) {
        if (i & 0x88) {
            i+=7
            continue
        }

        let piece = board.board[i]
        
        if (!piece) {
            continue
        }

        pieces[piece].push(i)

        pieceCount[piece]++

        let turn = board.color(piece)
        let sign = turn === WHITE? 1 : -1

        if (AI.phase <= MIDGAME) {
            if (piece === B && board.board[i + 16] === P) score -= VPAWN
            if (piece === b && board.board[i - 16] === p) score += VPAWN
        }

        let piecetype = ABS[piece]
        let index = turn === WHITE? i : (112^i)

        //PSQT
        // let prob = AI.PROB[piecetype][index]

        // score += sign * 10 * Math.log(prob / (1 - prob))

        let pieceOpeningPSQT = (AI.PSQT_OPENING[piecetype][index])
        let pieceEndgamePSQT = (AI.PSQT_LATE_ENDGAME[piecetype][index])
        // console.log(AI.PIECE_VALUES[OPENING][piece], AI.PIECE_VALUES[OPENING][piece] * pieceOpeningPSQT | 0, AI.PIECE_VALUES[LATE_ENDGAME][piece], AI.PIECE_VALUES[LATE_ENDGAME][piece] * pieceEndgamePSQT | 0)

        // MATERIAL
        openingMaterial += AI.PIECE_VALUES[OPENING][piece] * pieceOpeningPSQT
        endgameMaterial += AI.PIECE_VALUES[LATE_ENDGAME][piece] * pieceEndgamePSQT

        tempTotalMaterial += ABS[piece] === P? 0 : AI.PIECE_VALUES[OPENING][ABS[piece]]    
        
    }

    AI.totalmaterial = tempTotalMaterial

    let mgFactor = AI.totalmaterial / AI.maxMaterialValue

    let egFactor = 1 - mgFactor

    let material = mgFactor * openingMaterial + egFactor * endgameMaterial | 0

    // Material
    score += material | 0

    if (AI.phase === LATE_ENDGAME && alpha > VPAWNx3) {
        let opponentKing = turn === WHITE? board.blackKingIndex : board.whiteKingIndex
        let kingToTheCorner = AI.CENTERMANHATTAN[opponentKing] - 3
        let distanceBetweenKings = 8 - AI.manhattanDistance(board, board.whiteKingIndex, board.blackKingIndex)

        let mopup = 80*(kingToTheCorner + distanceBetweenKings)

        if (turn === WHITE) { 
            score += mopup
        } else {
            score -= mopup
        }
    }

    
    // console.log(score)
    
    score += AI.getStructure(board, pieces[P], pieces[p])
    score += AI.getPawnShield(board)

        
    // let winning = Math.abs(score) > VPAWNx3

    // Lazy Futility  (+164) 1r3rk1/1pp2ppp/p5b1/3NR3/1Pq5/6QP/5PP1/5RK1 b - - 4 24

    if (pvNode) {
        if (score - VPAWN >= beta) {
            let nullWindowScore = beta / AI.nullWindowFactor | 0
    
            AI.lazynodes++
    
            return sign * nullWindowScore
        }
    
        if (score + VPAWN <= alpha) {
            let nullWindowScore = alpha / AI.nullWindowFactor | 0
    
            AI.lazynodes++
    
            return sign * nullWindowScore
        }

        // Evaluación posicional
        let positional = 0
    
        positional += smoothClamp(AI.getPositional(board, pieces), VPAWNx2)
        positional += smoothClamp(AI.getUnderdevelopment(board, pieces), VPAWNx2)
        positional += smoothClamp(AI.getMobility(board).score, VPAWNx2)
        // positional += smoothClamp(AI.getDefendedPieces(board, pieces))
    
        let clamp = positional / 3 | 0
    
        score += clamp | 0
    }
    
    // Saves the score in the evaluation table before the tempo bonus
    AI.evalTable[board.hashkey % this.htlength] = {
        hashkey: board.hashkey,
        score,
        pvNode
    }
    
    let nullWindowScore = score / AI.nullWindowFactor | 0

    // let t1 = Date.now()
    // AI.evalTime += t1 - t0

    return sign * nullWindowScore
}


AI.getDefendedPieces = (board, pieces)=>{
    let score = 0

    if (pieces[N][0] && board.isSquareAttacked(pieces[N][0], WHITE)) score +=10
    if (pieces[N][1] && board.isSquareAttacked(pieces[N][1], WHITE)) score +=10
    if (pieces[B][0] && board.isSquareAttacked(pieces[B][0], WHITE)) score +=10
    if (pieces[B][1] && board.isSquareAttacked(pieces[B][1], WHITE)) score +=10
    if (pieces[R][0] && board.isSquareAttacked(pieces[R][0], WHITE)) score +=10
    if (pieces[R][1] && board.isSquareAttacked(pieces[R][1], WHITE)) score +=10

    if (pieces[n][0] && board.isSquareAttacked(pieces[n][0], BLACK)) score -=10
    if (pieces[n][1] && board.isSquareAttacked(pieces[n][1], BLACK)) score -=10
    if (pieces[b][0] && board.isSquareAttacked(pieces[b][0], BLACK)) score -=10
    if (pieces[b][1] && board.isSquareAttacked(pieces[b][1], BLACK)) score -=10
    if (pieces[r][0] && board.isSquareAttacked(pieces[r][0], BLACK)) score -=10
    if (pieces[r][1] && board.isSquareAttacked(pieces[r][1], BLACK)) score -=10

    return score
    
}

AI.getUnderdevelopment = (board, pieces)=>{
    let score = 0

    //underdevelopment
    if (board.board[113] === N || board.board[114] === B || board.board[115] === Q || board.board[117] === B || board.board[118] === N) score -= VPAWNx2

    if (board.board[1] === n || board.board[2] === b || board.board[3] === q || board.board[5] === b || board.board[6] === n) score += VPAWNx2

    return score
}

AI.getPositional = (board, pieces)=>{
    let score = 0

    //Trapped king
    if (board.board[118] === K && board.board[119] === R) score -= VPAWNx2
    if (board.board[117] === K && board.board[119] === R) score -= VPAWN

    if (board.board[6] === k && board.board[7] === r) score += VPAWNx2
    if (board.board[5] === k && board.board[7] === r) score += VPAWN

    // Bishop pairs
    if (pieces[B][0] && pieces[B][1]) {
        // score += VPAWN2

        if (board.diagonals1[pieces[B][0]] + 1 === board.diagonals1[pieces[B][1]]) score += VPAWN10
        if (board.diagonals1[pieces[B][0]] - 1 === board.diagonals1[pieces[B][1]]) score += VPAWN10
        if (board.diagonals2[pieces[B][0]] + 1 === board.diagonals2[pieces[B][1]]) score += VPAWN10
        if (board.diagonals2[pieces[B][0]] - 1 === board.diagonals2[pieces[B][1]]) score += VPAWN10
    }

    if (pieces[b][0] && pieces[b][1]) {
        // score -= VPAWN2

        if (board.diagonals1[pieces[b][0]] + 1 === board.diagonals1[pieces[b][1]]) score -= VPAWN10
        if (board.diagonals1[pieces[b][0]] - 1 === board.diagonals1[pieces[b][1]]) score -= VPAWN10
        if (board.diagonals2[pieces[b][0]] + 1 === board.diagonals2[pieces[b][1]]) score -= VPAWN10
        if (board.diagonals2[pieces[b][0]] - 1 === board.diagonals2[pieces[b][1]]) score -= VPAWN10
    }

    // Trapped bishops
    if (pieces[B][0]) {
        if (board.board[pieces[B][0] - 15] === P) score -= VPAWN2
        if (board.board[pieces[B][0] - 17] === P) score -= VPAWN2
    }

    if (pieces[B][1]) {
        if (board.board[pieces[B][1] - 15] === P) score -= VPAWN2
        if (board.board[pieces[B][1] - 17] === P) score -= VPAWN2
    }

    if (pieces[b][0]) {
        if (board.board[pieces[b][0] + 15] === p) score += VPAWN2
        if (board.board[pieces[b][0] + 17] === p) score += VPAWN2
    }

    if (pieces[b][1]) {
        if (board.board[pieces[b][1] + 15] === p) score += VPAWN2
        if (board.board[pieces[b][1] + 17] === p) score += VPAWN2
    }

    // Queens / Kings
    // castiga a la dama por estar alejada de las columnas o diagonales del rey

    if (pieces[Q][0]) {
        score -= VPAWN10 * (Math.abs(board.columns[pieces[Q][0]] - board.columns[pieces[k][0]]))
        score -= VPAWN10 * (Math.abs(board.diagonals1[pieces[Q][0]] - board.diagonals1[pieces[k][0]]))
        score -= VPAWN10 * (Math.abs(board.diagonals2[pieces[Q][0]] - board.diagonals2[pieces[k][0]]))
    }
    
    if (pieces[q][0]) {
        score += VPAWN10 * (Math.abs(board.columns[pieces[q][0]] - board.columns[pieces[K][0]]))
        score += VPAWN10 * (board.diagonals1[pieces[q][0]] - board.diagonals1[pieces[K][0]])
        score += VPAWN10 * (board.diagonals2[pieces[q][0]] - board.diagonals2[pieces[K][0]])
    }
    
    // Rooks / Kings
    
    if (pieces[R][0]) {
        score -= VPAWN4 * (Math.abs(board.columns[pieces[R][0]] - board.columns[pieces[k][0]]))
    }

    if (pieces[R][1]) {
        if (board.columns[pieces[R][1]] === board.columns[pieces[k][0]]) score += VPAWN10
    }

    if (pieces[r][0]) {
        if (board.columns[pieces[r][0]] === board.columns[pieces[K][0]]) score -= VPAWN10
    }


    if (pieces[r][1]) {
        if (board.columns[pieces[r][1]] === board.columns[pieces[K][0]]) score -= VPAWN10
    }

    // Rooks / Queens

    if (pieces[R][0]) {
        if (board.columns[pieces[R][0]] === board.columns[pieces[q][0]]) score += VPAWN10
    }

    if (pieces[R][1]) {
        if (board.columns[pieces[R][1]] === board.columns[pieces[q][0]]) score += VPAWN10
    }

    if (pieces[r][0]) {
        if (board.columns[pieces[r][0]] === board.columns[pieces[Q][0]]) score -= VPAWN10
    }

    if (pieces[r][1]) {
        if (board.columns[pieces[r][1]] === board.columns[pieces[Q][0]]) score -= VPAWN10
    }

    // Bishops / Queens

    if (pieces[B][0]) {
        if (board.diagonals1[pieces[B][0]] === board.diagonals1[pieces[q][0]]) score += VPAWN10
        if (board.diagonals2[pieces[B][0]] === board.diagonals2[pieces[q][0]]) score += VPAWN10
    }

    if (pieces[B][1]) {
        if (board.diagonals1[pieces[B][1]] === board.diagonals1[pieces[q][0]]) score += VPAWN10
        if (board.diagonals2[pieces[B][1]] === board.diagonals2[pieces[q][0]]) score += VPAWN10
    }

    if (pieces[b][0]) {
        if (board.diagonals1[pieces[b][0]] === board.diagonals1[pieces[Q][0]]) score -= VPAWN10
        if (board.diagonals2[pieces[b][0]] === board.diagonals2[pieces[Q][0]]) score -= VPAWN10
    }

    if (pieces[b][1]) {
        if (board.diagonals1[pieces[b][1]] === board.diagonals1[pieces[Q][0]]) score -= VPAWN10
        if (board.diagonals2[pieces[b][1]] === board.diagonals2[pieces[Q][0]]) score -= VPAWN10
    }

    // Bishops / Kings

    if (pieces[B][0]) {
        if (board.diagonals1[pieces[B][0]] === board.diagonals1[pieces[k][0]]) score += VPAWN10
        if (board.diagonals2[pieces[B][0]] === board.diagonals2[pieces[k][0]]) score += VPAWN10
    }

    if (pieces[B][1]) {
        if (board.diagonals1[pieces[B][1]] === board.diagonals1[pieces[k][0]]) score += VPAWN10
        if (board.diagonals2[pieces[B][1]] === board.diagonals2[pieces[k][0]]) score += VPAWN10
    }

    if (pieces[b][0]) {
        if (board.diagonals1[pieces[b][0]] === board.diagonals1[pieces[K][0]]) score -= VPAWN10
        if (board.diagonals2[pieces[b][0]] === board.diagonals2[pieces[K][0]]) score -= VPAWN10
    }

    if (pieces[b][1]) {
        if (board.diagonals1[pieces[b][1]] === board.diagonals1[pieces[K][0]]) score -= VPAWN10
        if (board.diagonals2[pieces[b][1]] === board.diagonals2[pieces[K][0]]) score -= VPAWN10
    }

    return score
}

AI.logisticTable = new Map()

AI.logistic = (x, limit)=> {
    if (!x) return 0

    let logisticEntry = AI.logisticTable[x]

    if (logisticEntry) {
        return logisticEntry
    }

    let logistic = 2*limit / (1 + Math.exp(-x/(0.5*limit))) - limit | 0

    AI.logisticTable[x] = logistic

    return logistic
}

AI.getPawnShield = (board)=>{

    if (AI.phase > MIDGAME) return 0

    let score = 0

    // Enroque de rey blanco
    if (board.whiteKingIndex === 118 || board.whiteKingIndex === 119) {
        if (board.board[101] !== P && board.board[85] !== P && board.board[69] !== P) {
            score -= VPAWN2
        }

        if (board.board[86] !== P && board.board[102] !== P) {
            score -= VPAWN2
        }
    }

    // Enroque de dama blanco
    if (board.whiteKingIndex === 114 || board.whiteKingIndex === 113) {
        if (board.board[66] !== P && board.board[82] !== P && board.board[98] !== P) {
            score -= VPAWN2
        }

        if (board.board[81] !== P && board.board[97] !== P) {
            score -= VPAWN2
        }
    }


    // Enroque de rey negro
    if (board.blackKingIndex === 6 || board.blackKingIndex === 7) {
        if (board.board[21] !== p && board.board[37] !== p && board.board[53] !== p) {
            score += VPAWN2
        }

        if (board.board[22] !== p && board.board[38] !== p) {
            score += VPAWN2
        }
    }

    // Enroque de dama negro
    if (board.blackKingIndex === 1 || board.blackKingIndex === 2) {
        if (board.board[18] !== p && board.board[34] !== p && board.board[50] !== p) {
            score += VPAWN2
        }

        if (board.board[17] !== p && board.board[33] !== p) {
            score += VPAWN2
        }
    }
    
    return score
}

AI.getMobility = (board) => {
    let nmoves = board.getMoves().length

    board.changeTurn()
    
    let mmoves = board.getMoves().length

    board.changeTurn()

    let score = 3*(nmoves - mmoves)

    let totalMobility = nmoves + mmoves

    return board.turn === WHITE ? {score, totalMobility} : {score:-score, totalMobility}
}

AI.getMobility2 = (board)=>{
    let score = 0
    let whiteMoves
    let blackMoves

    if (board.turn === WHITE) {
        whiteMoves = board.getMoves(true,false)
        board.changeTurn()
        blackMoves = board.getMoves(true,false)
        board.changeTurn()
    } else {
        blackMoves = board.getMoves(true,false)
        board.changeTurn()
        whiteMoves = board.getMoves(true,false)
        board.changeTurn()
    }

    // Full Mobility (+0 ELO)
    // Unsafe Mobility (+0 ELO)
    // Safe Mobility (-59 ELO)

    let whiteMobility = 0

    whiteMobility += whiteMoves[N].unsafe.map(e=>{return AI.MOB[N][e]}).reduce((a,b)=>{return a + b}) | 0
    whiteMobility += whiteMoves[B].unsafe.map(e=>{return AI.MOB[B][e]}).reduce((a,b)=>{return a + b}) | 0
    whiteMobility += whiteMoves[R].unsafe.map(e=>{return AI.MOB[R][e]}).reduce((a,b)=>{return a + b}) | 0
    whiteMobility += whiteMoves[Q].unsafe.map(e=>{return AI.MOB[Q][e]}).reduce((a,b)=>{return a + b}) | 0

    let blackMobility = 0

    blackMobility += blackMoves[n].unsafe.map(e=>{return AI.MOB[N][e]}).reduce((a,b)=>{return a + b})
    blackMobility += blackMoves[b].unsafe.map(e=>{return AI.MOB[B][e]}).reduce((a,b)=>{return a + b})
    blackMobility += blackMoves[r].unsafe.map(e=>{return AI.MOB[R][e]}).reduce((a,b)=>{return a + b})
    blackMobility += blackMoves[q].unsafe.map(e=>{return AI.MOB[Q][e]}).reduce((a,b)=>{return a + b})

    score = whiteMobility - blackMobility | 0

    return score
}

let max = 0
let min = 0
let total = 1
let total2 = 1

// IMPORTANTE: Esta función devuelve el valor de la estructura de peones.
// Dado que la estructura tiende a ser relativamente fija, el valor se guarda
// en una tabla hash y es devuelto en caso que se requiera evaluar la misma
// estructura. La tasa de acierto de las entradas hash es mayor al 95%, por lo
// que esta función es esencial para mantener un buen rendimiento.
AI.getStructure = (board, pawnindexW, pawnindexB)=> {
    let hashkey = board.pawnhashkey

    let hashentry = AI.pawnTable[hashkey % AI.pawntlength]

    AI.pnodes++

    if (hashentry) {
        if (hashentry.hashkey === hashkey) {
            AI.phnodes++
            return hashentry.score
        } else {
            hashentry.hashkey = null
            AI.pawncollisions++
        }
    } 

    let doubled = 0//AI.getDoubled(board, pawnindexW, pawnindexB) // con BUGSS
    let defended = AI.getDefended(board, pawnindexW, pawnindexB)
    let passers = AI.getPassers(board, pawnindexW, pawnindexB)
    let space = AI.getSpace(board, pawnindexW, pawnindexB)
    let backward = AI.getBackwardPawns(board, pawnindexW, pawnindexB)
    let center = AI.getCenterControl(board, pawnindexW, pawnindexB)

    let score = passers + backward + defended + doubled + space + center
    
    AI.pawnTable[hashkey % AI.pawntlength] = {hashkey, score}

    return score
}

AI.getCenterControl = (board, pawnindexW, pawnindexB)=>{
    let score = 0

    if (AI.phase == OPENING) {
        for (let i = 0; i < 4; i++) {
            if (board.board[WHITECENTER[i]] === P) score += VPAWN10
            if (board.board[BLACKCENTER[i]] + 15 === P) score += VPAWN10
            if (board.board[BLACKCENTER[i]] + 17 === P) score += VPAWN10
            
            if (board.board[BLACKCENTER[i]] === p) score -= VPAWN10
            if (board.board[WHITECENTER[i]] - 15 === p) score -= VPAWN10
            if (board.board[WHITECENTER[i]] - 17 === p) score -= VPAWN10
        }
    }

    return score
}

AI.getBackwardPawns = (board, pawnindexW, pawnindexB)=>{
    let whiteBackwardPawns = 0
    let blackBackwardPawns = 0

    for (let i = 0; i < pawnindexW.length; i++) {
        let square = pawnindexW[i]

        if (square >= 64 && square <= 87) {
            if (board.board[square + 15] !== P && board.board[square + 17] !== P && board.board[square + 33] !== P && board.board[square + 31] !== P) {
                whiteBackwardPawns++
            }
        }
    }

    for (let i = 0; i < pawnindexB.length; i++) {
        let square = pawnindexB[i]
        if (square >= 32 && square <= 55) {
            if (board.board[square - 15] !== p && board.board[square - 17] !== p && board.board[square - 33] !== p && board.board[square - 31] !== p) {
                blackBackwardPawns++
            }
        }
    }

    return -AI.PAR[42] * (whiteBackwardPawns - blackBackwardPawns)
}

AI.getSpace = (board, pawnindexW, pawnindexB)=>{
    let spaceW = 0
    let spaceB = 0

    for (let i = 0, len=pawnindexW.length; i < len; i++) {
        spaceW += board.ranksW[pawnindexW[i]] - 1
    }

    for (let i = 0, len=pawnindexB.length; i < len; i++) {
        spaceB += board.ranksB[pawnindexB[i]] - 1
    }

    let space = AI.PAR[41]*Math.log(spaceW - spaceB) | 0

    return space
}

AI.getPassers = (board, pawnindexW, pawnindexB)=>{
    //De haberlos, estos arreglos almacenan la fila en que se encuentran los peones pasados
    let score = 0

    for (let i = 0, len=pawnindexW.length; i < len; i++) {
        let leftFile = pawnindexW[i] - 17
        let centerFile = pawnindexW[i] - 16
        let rightFile = pawnindexW[i] - 15

        let encounters = 0

        while (!encounters) {
            if ((centerFile & 0x88)) break
            if (board.board[centerFile] === p) encounters++
            if (encounters > 0) break
            centerFile -= 16
        }

        if (!encounters) {
            while (!encounters) {
                if ((leftFile & 0x88)) break
                if (board.board[leftFile] === p) encounters++
                if (encounters > 0) break
                leftFile -= 16
            }

            if (!encounters) {
                while (!encounters) {
                    if ((rightFile & 0x88)) break
                    if (board.board[rightFile] === p) encounters++
                    if (encounters > 0) break
                    rightFile -= 16
                }
            }
    
        }

        if (!encounters) {
            let bonus = AI.PASSERSBONUS[pawnindexW[i]]

            score += bonus

            // //blocked passer
            // let blockerindex = pawnindexW[i] - 16
            // if (board.board[blockerindex] === n || board.board[blockerindex] === b) score-=20

            // // Defended passer
            // score += pawnindexB[i] + 15 === P? bonus/4 | 0 : 0
            // score += pawnindexB[i] + 17 === P? bonus/4 | 0 : 0
            // score += pawnindexB[i] -  1 === P? bonus/5 | 0 : 0
            // score += pawnindexB[i] +  1 === P? bonus/5 | 0 : 0

            //TODO: passer protected by king
        }
    }
    
    for (let i = 0, len=pawnindexB.length; i < len; i++) {
        let leftFile = pawnindexB[i] + 17
        let centerFile = pawnindexB[i] + 16
        let rightFile = pawnindexB[i] + 15
        
        let encounters = 0
        
        while (!encounters) {
            if ((centerFile & 0x88)) break
            if (board.board[centerFile] === P) encounters++
            if (encounters > 0) break
            centerFile += 16
        }
        
        if (!encounters) {
            while (!encounters) {
                if ((leftFile & 0x88)) break
                if (board.board[leftFile] === P) encounters++
                if (encounters > 0) break
                leftFile += 16
            }
            
            if (!encounters) {
                while (!encounters) {
                    if ((rightFile & 0x88)) break
                    if (board.board[rightFile] === P) encounters++
                    if (encounters > 0) break
                    rightFile += 16
                }
            }
        }
        
        if (!encounters) {
            let bonus = AI.PASSERSBONUS[112^pawnindexB[i]]

            score -= bonus
            
            // //blocked passer
            // let blockerindex = pawnindexB[i] + 16
            // if (board.board[blockerindex] === N || board.board[blockerindex] === B) score+=20

            // // Defended passer
            // score -= pawnindexB[i] - 15 === p? bonus/4 | 0 : 0
            // score -= pawnindexB[i] - 17 === p? bonus/4 | 0 : 0
            // score -= pawnindexB[i] -  1 === p? bonus/5 | 0 : 0
            // score -= pawnindexB[i] +  1 === p? bonus/5 | 0 : 0
            
            //TODO: passer protected by king
        }
    }
    
    return score
}

AI.getDoubled = (board, pawnindexW, pawnindexB)=>{
    let score = 0

    if (pawnindexW.length > 2) {
        for (let i = 0, len=pawnindexW.length; i < len; i++) {
            let square = pawnindexW[i] - 16
            
            while (true) {
                let piece = board.board[square]
    
                if (piece) {
                    // if (piece === P) score -= AI.DOUBLEDPENALTY[square]
                    if (piece === P) score -= AI.PAR[43]
                    break
                }
                square -= 16
    
                if ((square - 16) & 0x88) break
    
            }
        }
    }
    
    if (pawnindexB.length > 2) {
        for (let i = 0, len=pawnindexB.length; i < len; i++) {
            let square = pawnindexB[i] + 16
    
            while (true) {
                let piece = board.board[square]
    
                if (piece) {
                    // if (piece === p) score += AI.DOUBLEDPENALTY[112^square]
                    if (piece === p) score += AI.PAR[43]
                    break
                }
    
                square += 16
    
                if ((square + 16) & 0x88) break
            }
        }
    }

    return score
}

// AI.simpleSEE = (board, move)=> {
//     let mvvlva = AI.MVVLVASCORES[move.piece][move.capturedPiece]

//     let diff = AI.PIECE_VALUES[OPENING][ABS[move.capturedPiece]] - AI.PIECE_VALUES[OPENING][ABS[move.piece]]

//     if (diff > 0) { // Buena captura
//         return mvvlva
//     } else {
//         if (board.isSquareAttacked(move.to, board.color(move.capturedPiece), false, false)) {
//             // La pieza está defendida. Mala captura
//             return mvvlva
//         } else {
//             // Pieza gratuita
//             return 3e8 + mvvlva
//         }
//     }
// }

// pieceValues[x] debe ser un arreglo: [., peón, caballo, alfil, torre, dama, rey]
// Ej: const pieceValues = [0, 100, 320, 330, 500, 900, 20000];

AI.simpleSEE = (board, move)=> {
    // 1. Valor de la pieza que queda capturada
    const targetPiece = move.capturedPiece 
    if (!targetPiece) return 0; // no hay ganancia

    const capturedValue = AI.PIECE_VALUES[OPENING][ABS[move.capturedPiece]]

    // 2. Valor de la pieza atacante
    const attackerValue = AI.PIECE_VALUES[OPENING][ABS[move.piece]]

    // Si ya de entrada pierdes más de lo que ganas, SEE es malo
    if (attackerValue < capturedValue) {
        return capturedValue - attackerValue;
    }

    // 3. Si la pieza atacante es de igual o mayor valor que la capturada,
    // verificar quién puede recapturar.
    //
    // En modo SIMPLE: si la casilla queda defendida por el rival
    // asumimos que pierdes el atacante completo (muy simplificado).
    //
    // Esto es "suficientemente bueno" para move ordering.
    //
    const defenders = board.isSquareAttacked(move.to, board.color(move.capturedPiece), false, false) // tu motor ya debe tener board.attackers()

    if (defenders) {
        // Pierdes la pieza atacante
        return capturedValue - attackerValue;
    }

    // 4. Si nadie recaptura, la ganancia es total
    return capturedValue;
}


AI.getDefended = (board, pawnindexW, pawnindexB)=>{
    let defendedW = 0
    let defendedB = 0

    for (let i = 0, len=pawnindexW.length; i < len; i++) {
        if (board.board[pawnindexW[i] + 15] === P) {
            defendedW++
            continue
        }

        if (board.board[pawnindexW[i] + 17] === P) {
            defendedW++
            continue
        }

        if (board.board[pawnindexW[i] + 1] === P) {
            defendedW += 0.5
            continue
        }

        if (board.board[pawnindexW[i] - 1] === P) {
            defendedW += 0.5
            continue
        }
    }

    for (let i = 0, len=pawnindexB.length; i < len; i++) {
        if (board.board[pawnindexB[i] - 15] === p) {
            defendedB++
            continue
        }

        if (board.board[pawnindexB[i] - 17] === p) {
            defendedB++
            continue
        }

        if (board.board[pawnindexB[i] + 1] === p) {
            defendedB += 0.5
            continue
        }

        if (board.board[pawnindexB[i] - 1] === p) {
            defendedB += 0.5
            continue
        }
    }

    let defendedWhitePawns = AI.PAR[44]*defendedW
    let defendedBlackPawns = AI.PAR[44]*defendedB

    return defendedWhitePawns - defendedBlackPawns | 0
}

AI.see = function (board, move) {

}

// AI.sortMoves = function (board, moves, turn, ply, depth, ttEntry) {
//     if (ply > AI.totaldepth) ply = AI.totaldepth

//     let killer1, killer2
//     let ttMove = null
    
//     if (AI.killers) {
//         killer1 = AI.killers[turn][ply][0]
//         killer2 = AI.killers[turn][ply][1]
//     }

//     // let t0 = (new Date).getTime()

//     let sortedMoves = []
//     let unsortedMoves = []

//     for (let i = 0, len = moves.length; i < len; i++) {
//         let move = moves[i]

//         move.mvvlva = 0
//         move.hvalue = 0
//         move.killer1 = 0
//         move.killer2 = 0
//         move.score = 0

//         let ttEntryMove = false

//         // CRITERION 1: The move is on the Transposition Table (389 ELO)
//         if (ttEntry && move.key === ttEntry.move.key) {
//             move.tt = true
//             ttMove = move
//             continue
//         }
        
//         if (move.isCapture) {
//             // move.mvvlva = AI.MVVLVASCORES[move.piece][move.capturedPiece]

//             // move.score += 2e8 + move.mvvlva
//             move.score += AI.simpleSEE(board, move)

//             sortedMoves.push(move)

//             continue
//         } else {
//             // CRITERIO: First killer move
//             if (killer1 && killer1.key === move.key) {
//                 move.killer1 = true
//                 move.score += 6e6

//                 sortedMoves.push(move)

//                 continue
//             }

//             // CRITERIO: Second killer move
//             if (killer2 && killer2.key === move.key) {
//                 move.killer2 = true
//                 move.score += 5e6

//                 sortedMoves.push(move)

//                 continue
//             }
            
//             // CRITERIO: Promotion
//             if (move.promotingPiece) {
//                 move.score += 1e8

//                 sortedMoves.push(move)

//                 continue
//             }

//             // // CRITERIO: Castle (-18 ELO?)
//             // if (move.castleSide) {

//             //     if (AI.phase === OPENING) {
//             //         move.score = 3e8 // igual que capturas sin mlvv
                
//             //         sortedMoves.push(move)
                    
//             //         continue
//             //     }
                    
//             //     if (AI.phase === MIDGAME) {
//             //             move.score = 1e7
                        
//             //             sortedMoves.push(move)
                        
//             //             continue
//             //     }

//             // }

//             // The move is in the previous Principal Variation (107 ELO)
//             // if (AI.PV[ply] && AI.PV[ply].key === move.key) {
//             //     move.pv = true
//             //     move.score += 1e6
//             //     sortedMoves.push(move)
//             //     continue
//             // }
            
//             // CRITERIO 6: Historical moves (107 ELO)
//             let hvalue = AI.history[move.piece][move.to]
//             move.score += hvalue
//             sortedMoves.push(move)

//             continue
    
    
//             //     sortedMoves.push(move)

//             //     continue
//             // } else {
//             //     // if (AI.phase <= MIDGAME) {
//             //     //     if (turn === WHITE) {
//             //     //         move.score += AI.PSQT_OPENING[ABS[move.piece]][move.to] - AI.PSQT_OPENING[ABS[move.piece]][move.from]
//             //     //     } else {
//             //     //         move.score += AI.PSQT_OPENING[ABS[move.piece]][112^move.to] - AI.PSQT_OPENING[ABS[move.piece]][112^move.from]
//             //     //     }
//             //     // } else {
//             //     //     if (turn === WHITE) {
//             //     //         move.score += AI.PSQT_LATE_ENDGAME[ABS[move.piece]][move.to] - AI.PSQT_LATE_ENDGAME[ABS[move.piece]][move.from]
//             //     //     } else {
//             //     //         move.score += AI.PSQT_LATE_ENDGAME[ABS[move.piece]][112^move.to] - AI.PSQT_LATE_ENDGAME[ABS[move.piece]][112^move.from]
//             //     //     }
//             //     // }

//             //     unsortedMoves.push(move)
                
//             //     continue
//             // }
//         }
//     }

//     // ORDENA LOS MOVIMIENTOS
//     // El tiempo de esta función toma hasta un 10% del total de cada búsqueda.
//     // Sería conveniente utilizar un mejor método de ordenamiento.
//     if (sortedMoves.length > 1) {
//         sortedMoves.sort((a, b) => {
//             return b.score - a.score
//         })
//     }

//     if (ttMove) {
//         moves = [ttMove]
//     } else {
//         moves = []
//     }
    
//     moves = moves.concat(sortedMoves)

//     // let t1 = (new Date()).getTime()

//     // AI.sortingTime += (t1 - t0)

//     return moves
// }

// AI.sortMoves = function (board, moves, turn, ply, depth, ttEntry) {
//     // usar copia del ply si necesario
//     if (ply > AI.totaldepth) ply = AI.totaldepth;

//     let killer1 = AI.killers ? AI.killers[turn][ply][0] : null;
//     let killer2 = AI.killers ? AI.killers[turn][ply][1] : null;
//     let ttMove = null;

//     const sortedMoves = [];
//     const unsortedMoves = [];

//     // clamp helper
//     const clamp = (v, min, max) => (v < min ? min : v > max ? max : v);

//     for (let i = 0; i < moves.length; i++) {
//         const move = moves[i];
//         move.score = 0;

//         // ttMove detection (no push yet)
//         if (ttEntry && ttEntry.move && move.key === ttEntry.move.key) {
//             move.tt = true;
//             ttMove = move;
//             continue;
//         }

//         if (move.isCapture) {
//             // base: MVV-LVA (alto) + pequeño bonus por SEE
//             const mvvlva = AI.MVVLVASCORES ? AI.MVVLVASCORES[move.piece][move.capturedPiece] : 0;
//             const see = AI.simpleSEE ? AI.simpleSEE(board, move) : 0;
//             // si see >= 0 -> small positive bonus; si < 0 -> small penalty
//             const seeAdj = (see >= 0) ? 5000 : -1500; // ajusta según pruebas
//             move.score = 200000000 + mvvlva + seeAdj;
//             sortedMoves.push(move);
//             continue;
//         }

//         // killers
//         if (killer1 && killer1.key === move.key) {
//             move.killer1 = true;
//             move.score = 6000000;
//             sortedMoves.push(move);
//             continue;
//         }
//         if (killer2 && killer2.key === move.key) {
//             move.killer2 = true;
//             move.score = 5000000;
//             sortedMoves.push(move);
//             continue;
//         }

//         // promotion
//         if (move.promotingPiece) {
//             move.score = 100000000;
//             sortedMoves.push(move);
//             continue;
//         }

//         // history: usar depth (profundidad restante), no ply
//         // asegúrate que AI.history[depth] exista; si no, fallback a ply
//         const histIndex = (AI.history[depth]) ? depth : Math.min(ply, AI.totaldepth);
//         let hvalue = 0;
//         if (AI.history[histIndex] && AI.history[histIndex][move.piece]) {
//             hvalue = AI.history[histIndex][move.piece][move.to] | 0;
//         }
//         // clamp history para evitar saturación
//         hvalue = clamp(hvalue, -2000000, 2000000);
//         move.score = move.score + hvalue;

//         // Decide si lo ponemos en sorted (history positivo) o en unsorted (put at end)
//         if (hvalue !== 0) sortedMoves.push(move); else unsortedMoves.push(move);
//     }

//     // Ordenar por score descendente
//     if (sortedMoves.length > 1) sortedMoves.sort((a, b) => b.score - a.score);

//     // Reconstruir lista: ttMove primero si existe, luego sorted, luego unsorted
//     const out = [];
//     if (ttMove) out.push(ttMove);
//     for (let m of sortedMoves) out.push(m);
//     for (let m of unsortedMoves) out.push(m);

//     return out;
// }

let ert = 0

AI.sortMoves = (board, moves, turn, ply, depth, ttEntry)=> {

    let ttMove = null
    let goodCaps = []
    let badCaps = []
    let killers = []
    let quiets = []

    for (const move of moves) {
        move.score = 0

        // TT MOVE
        if (ttEntry && move.key === ttEntry.move.key) {
            ttMove = move
            continue
        }

        // CAPTURES
        if (move.isCapture) {
            const see = AI.simpleSEE(board, move)
            if (see >= 0) {
                move.score = 1e8 + see
                goodCaps.push(move)
            } else {
                move.score = -1e6 + see
                badCaps.push(move)
            }
            continue
        }

        // KILLERS
        if (AI.killers[turn][ply][0]?.key === move.key ||
            AI.killers[turn][ply][1]?.key === move.key) {
            move.score = 9e7
            move.killer = true
            killers.push(move)
            continue
        }

        // QUIET BY HISTORY
        move.score = AI.history[move.piece][move.to]
        quiets.push(move)
    }

    // SORT CAPTURES + QUIETS
    goodCaps.sort((a,b) => b.score - a.score)
    killers.sort((a,b) => b.score - a.score)
    quiets.sort((a,b) => b.score - a.score)
    badCaps.sort((a,b) => b.score - a.score)

    let out = []
    if (ttMove) out.push(ttMove)

    out = out.concat(goodCaps, killers, quiets, badCaps)
    return out
}


AI.quiescenceSearch = function (board, alpha, beta, depth, ply, pvNode, illegalMovesSoFar, lookForMateTurn, allowNullMove) {
    
    AI.qsnodes++

    let turn = board.turn
    let hashkey = board.hashkey

    let ttEntry = this.ttGet(turn, hashkey)

    if (ttEntry && ttEntry.depth === -1) {
        if (ttEntry.flag === EXACT) {
            return ttEntry.score
        } else if (ttEntry.flag === LOWERBOUND) {
            if (ttEntry.score > alpha) alpha = ttEntry.score
        } else if (ttEntry.flag === UPPERBOUND) {
            if (ttEntry.score < beta) beta = ttEntry.score
        }

        if (alpha >= beta) return ttEntry.score
    }

    let legal = 0
    let standpat = alpha // Only to prevent undefined values for standpat
    
    let incheck = board.isKingInCheck()

    let cutNode = !pvNode

    standpat = AI.evaluate(board, ply, alpha, beta, false, incheck, illegalMovesSoFar) | 0
    // El standpat pvNode debe estar en falso, sino genera ruido en el FHF
    
    if (!incheck) {
        if (standpat >= beta) {
            return standpat
        }
    
        if (standpat > alpha) alpha = standpat
        
        // Delta pruning (35 ELO)
        if (standpat + MARGIN10 < alpha) return alpha
    }

    let moves = board.getMoves(false, true)
    
    let score = -INFINITY
    
    moves = AI.sortMoves(board, moves, turn, ply, depth, ttEntry)

    for (let i = 0, len = moves.length; i < len; i++) {
        let move = moves[i]

        let isWinningMove = AI.PIECE_VALUES[OPENING][ABS[move.capturedPiece]] > AI.PIECE_VALUES[OPENING][ABS[move.piece]]

        // Futility pruning +85 ELO
        if (!incheck && !isWinningMove && standpat + MARGIN2 <= alpha) {
            continue
        }

        // let m0 = (new Date()).getTime()
        if (board.makeMove(move)) {
            // AI.moveTime += (new Date()).getTime() - m0
            legal++

            score = -AI.quiescenceSearch(board, -beta, -alpha, depth - 1, ply + 1, pvNode, legal-1, lookForMateTurn, allowNullMove)

            board.unmakeMove(move)

            if (score >= beta) {
                AI.ttSave(turn, hashkey, score, LOWERBOUND, -1, move)
                return score
            }
            
            if (score > alpha) {
                AI.ttSave(turn, hashkey, score, EXACT, -1, move)
                alpha = score
            }
        }
    }

    return alpha
}

// ttSave por depth
AI.ttSave = function (turn, hashkey, score, flag, depth, move) {
    if (AI.stop) {
        // console.log('stop')
        return
    }

    if (!move) {
        // console.log('no move')
        return
    }

    let index = hashkey % AI.htlength

    let ttEntry = AI.hashTable[index]

    if ((ttEntry && ttEntry.hashkey === hashkey)) {

        let visits = ttEntry.visits++

        if (depth >= ttEntry.depth) {
            AI.hashTable[index] = {
                hashkey,
                score,
                flag,
                depth,
                move,
                visits
            }

        } else {
            AI.hashTable[index].visits++
        }
        
        return
    }

    AI.hashTable[index] = {
        hashkey,
        score,
        flag,
        depth,
        move,
        visits: 1
    }

    AI.totalTTnodes++
}

AI.ttGet = function (turn, hashkey) {
    AI.ttGets++
    let ttEntry = AI.hashTable[hashkey % AI.htlength]
    
    if (ttEntry) {
        if (ttEntry.hashkey === hashkey) {
            AI.ttnodes++
            return ttEntry
        } else {
            AI.collisions++
            // AI.hashTable[hashkey % AI.htlength] = null
            return null
        }
    } else {
        return null
    }
}

AI.saveHistory = function (ply, move, value) {
    
    AI.history[move.piece][move.to] += value | 0
  
}

function probCut(board, depth, alpha, beta, ply) {

    // Condición mínima: profundidad suficiente
    if (depth < 5) return null;

    // Solo probamos corte si la ventana lo permite
    const cutoffBeta = beta + MARGIN2;

    // Hacemos una mini-búsqueda reducida (depth - 3)
    const reducedDepth = depth - 3;

    const score = AI.PVS(board, cutoffBeta - 1, cutoffBeta, reducedDepth, ply, false)

    // Si pasó el umbral, cortamos igual que en Multi-ProbCut
    if (score >= cutoffBeta) {
        return score;
    }

    AI.probcuts++

    return null; // seguir búsqueda normal
}

// PRINCIPAL VARIATION SEARCH
// El método PVS es Negamax + Ventana-Nula
AI.PVS = function (board, alpha, beta, depth, ply, dangerous, pvNode) {
    // Date.now es un algoritmo que consume mucho tiempo; por esa razón revisa cada 2000 nodos
    // if (AI.nodes % 2000 === 0) console.log('revisa')
    if (AI.iteration > AI.mindepth[AI.phase] && AI.nodes % 2000 === 0) {
        if (Date.now() > AI.timeEnd) {
            AI.stop = true

            return alpha
        }
    }
    
    if (ply > AI.pliesForSearch) {
        AI.pliesForSearch = ply
    }

    if (ply > AI.totaldepth) ply = AI.totaldepth

    let mating_value = MATE - ply;

    if (mating_value < beta) {
        beta = mating_value
        if (alpha >= mating_value) {
            // console.log('mate')
            return mating_value
        }
    }
    
    mating_value = -MATE + ply;
    
    if (mating_value > alpha) {
        alpha = mating_value
        if (beta <= mating_value) {
            // console.log('mate')
            return mating_value
        }
    }

    let turn = board.turn
    let hashkey = board.hashkey
    let ttEntry = AI.ttGet(turn, hashkey)

    let moves = []

    if (pvNode) AI.pvnodes++

    let cutNode = !pvNode
    let incheck = board.isKingInCheck()

    AI.nodes++

    if (depth <= 0) {
        return AI.quiescenceSearch(board, alpha, beta, depth, ply, pvNode)
    }

    let opponentTurn = turn === WHITE? BLACK : WHITE
    let sign = turn === WHITE? 1 : -1

    if (ttEntry && ttEntry.depth >= depth) {
        if (ttEntry.flag === EXACT) {
            return ttEntry.score
        } else if (ttEntry.flag === LOWERBOUND) {
            if (ttEntry.score > alpha) alpha = ttEntry.score
        } else if (ttEntry.flag === UPPERBOUND) {
            if (ttEntry.score < beta) beta = ttEntry.score
        }

        if (alpha >= beta) {
            return alpha
        }
    }

    if (moves.length === 0) {
        moves = board.getMoves(false, false)
        moves = AI.sortMoves(board, moves, turn, ply, depth, ttEntry)
    }

    let prune = cutNode && depth < 8 && !incheck && beta > (-MATE + AI.totaldepth) && alpha < (MATE - AI.totaldepth) && !dangerous

    let mateE = 0 // Mate threat extension

    if (AI.stop && AI.iteration > AI.mindepth[AI.phase]) return alpha

    let staticEval = AI.evaluate(board, ply, alpha, beta, pvNode, incheck) | 0
    
    if (prune) {

        // PROBCUT
        const pc = probCut(board, depth, alpha, beta, ply);
        if (pc !== null) {
            return pc;
        }

        // HARD RAZORING
        if (depth <= 2) {
            if (staticEval + FUTILITYMARGIN[depth] < alpha) {
                // La posición es demasiado mala, podar sin buscar
                return staticEval;
            }
        }
        
        // RAZORING (Strelka) (0 ELO)
        // let razoringMargin = staticEval + MARGIN3;
    
        // if (razoringMargin < alpha) {
        //     if (depth == 1) {
        //         let new_razoringMargin = AI.quiescenceSearch(board, alpha, beta, 0, ply, pvNode, 0, false, false)
        //         return Math.max(new_razoringMargin, razoringMargin);
        //     }
    
        //     razoringMargin += MARGIN2*depth
    
        //     if (razoringMargin < beta && depth <= 3) {
        //         let new_razoringMargin = AI.quiescenceSearch(board, alpha, beta, 0, ply, pvNode, 0, false, false)
            
        //         if (new_razoringMargin < beta) {
        //             return Math.max(new_razoringMargin, razoringMargin);
        //         }
        //     }
        // }

    }

    // NULL MOVE PRUNING
    // if (cutNode && !incheck && depth >= 3 && AI.phase < LATE_ENDGAME) {
    //     const R = 2 + (depth / 4)|0; // reducción clásica
    //     board.changeTurn();
    //     const score = -AI.PVS(board, -beta, -beta + 1, depth - 1 - R, ply + 1, dangerous, true)
    //     board.changeTurn();

    //     if (score >= beta) return score; // cutoff
    // }



    // IID (9 ELO)
    // if (!ttEntry && depth > 2) depth-- 
    if (!ttEntry && depth > 2) {
        depth--
        // pvNode = true
    }

    let bestmove = moves[0]
    let legal = 0
    let illegalMoves = 0
    
    let alphaOriginal = alpha
    let bestscore = alpha
    let score = -INFINITY

    let E = 0

    let nonCaptures = 0
    AI.totalMoves += moves.length

    for (let i = 0, len = moves.length; i < len; i++) {
        
        let move = moves[i]
        let piece = move.piece

        if (!move.isCapture) nonCaptures++

        if (cutNode && !move.isCapture && !move.killer && !move.isPromotion) {
            // Futility pruning
            let margin = FUTILITYMARGIN[depth];
        
            if (staticEval + margin <= alpha) {
                continue
            }

            // Late moves pruning, inspired in Stockfish - (96 ELO / 20)
            if (legal > AI.LMP[depth]) {
                AI.maxMovesCount++
                return alpha
            }
    
        }

        //Reducciones
        let R = 0

        // // Enhanced Transposition Cut-Off actual position +12 ELO
        // if (!ttEntry) {
            
        //     let ttETC = AI.ttGet(turn, hashkey)
            
        //     if (ttETC && ttETC.hashkey === hashkey && ttETC.depth >= depth) {
        //         AI.etcNodes++
        //         // max++
        //         if (ttETC.flag === LOWERBOUND) {
        //             if (ttETC.score > alpha) alpha = ttETC.score
        //         } else if (ttETC.flag === UPPERBOUND) {
        //             if (ttETC.score < beta) beta = ttETC.score
        //         } else { // EXACT
        //             if (ttETC.score > alpha) { // > beta?
        //                 alpha = ttETC.score
        //             }
        //         }
        //     }
        // }

        // let m0 = (new Date()).getTime()
        if (board.makeMove(move)) {
            // AI.moveTime += (new Date()).getTime() - m0
            legal++

            if (!move.isCapture) AI.quietMoves++

            let inCheckAfterMove = board.isKingInCheck()

            let dangerous = move.mvvlva < 5000 || inCheckAfterMove// || ABS[move.piece] === K
            
            if (!move.isCapture && !move.killer && !inCheckAfterMove && AI.history[move.piece][move.to] < 20) {
                R += AI.LMR_TABLE[depth][legal] | 0 // (240 ELO)
                
                //History reductions (70 ELO)
                if (!move.isCapture && AI.history[piece][move.to] < 0) R++
    
                if (!move.isCapture && cutNode) {
                    // R++ on Cut-Node (106 ELO)
                    R++
                }
            }

            if (legal === 1) {
                // El primer movimiento se busca con ventana total y sin reducciones
                score = -AI.PVS(board, -beta, -alpha, depth + E - 1, ply + 1, dangerous, true)
            } else {
                score = -AI.PVS(board, -alpha - 1, -alpha, depth + E - R - 1, ply + 1, dangerous, false)

                if (score > alpha) {
                    R = 0
                    score = -AI.PVS(board, -beta, -alpha, depth + E - 1, ply + 1, dangerous, true)
                }
            }

            board.unmakeMove(move)

            if (AI.stop) return alphaOriginal //tested ok
            
            if (score > alpha) {
                // Fail-high
                if (score >= beta) {
                    if (legal === 1) {
                        AI.fhf++
                    }
                    
                    AI.fh++

                    // AI.PV[ply] = move
                    // AI.PV[ply].hashkey = hashkey

                    //LOWERBOUND
                    
                    // Guardar killer move
                    if (!move.isCapture) {

                        const killers = AI.killers[turn | 0][ply];

                        // evitar duplicados
                        if (!killers[0] || killers[0].key !== move.key) {

                            // desplazar killer 0 → killer 1
                            if (killers[0]) {
                                // copiar el objeto, no la referencia
                                killers[1] = { ...killers[0] };
                            }

                            // asignar killer 0 (clonado)
                            killers[0] = { ...move };
                        }

                        // historial (ok)
                        AI.saveHistory(ply, move, (i + 1) * depth * depth);
                    }
                    
                    AI.ttSave(turn, hashkey, score, LOWERBOUND, depth + E, move)
                    
                    return beta
                }

                AI.ttSave(turn, hashkey, score, EXACT, depth, move)
                
                bestscore = score
                bestmove = move
                alpha = score

                if (!move.isCapture) { AI.saveHistory(ply, move, depth*depth) }
                
            } else {
                if (!move.isCapture) { AI.saveHistory(ply, move, -depth*depth) }
            }
        } else {
            illegalMoves++
        }
    }

    if (legal === 0) {
        if (incheck) {
            // Mate
            // if (allowNullMove) AI.ttSave(turn, hashkey, -MATE + ply, EXACT, depth, null)
            //Saving the mate position apparently have some evaluation bugs. Not fully tested
            
            return -MATE + ply
        } else {
            // Ahogado
            // if (allowNullMove) AI.ttSave(turn, hashkey, DRAW, EXACT, depth, bestmove)
            
            return DRAW
        }

    } else {
        // console.log(ply, bestscore, alphaOriginal)
        if (bestscore > alphaOriginal) {
            // Mejor movimiento
            if (bestmove) {         
                AI.ttSave(turn, hashkey, bestscore, EXACT, depth, bestmove)
            } else {
                console.log(' no po')
            }
            
            return bestscore
        } else {
            //UpperBound
            AI.ttSave(turn, hashkey, alphaOriginal, UPPERBOUND, depth, bestmove)

            return alphaOriginal
        }

    }
}

AI.getPV = function (board, length) {
    let PV = [null]
    let startinghashkey = board.hashkey
    let legal = 0

    let ttEntry
    let ttFound

    for (let i = 0; i < length; i++) {
        ttFound = false
        let hashkey = board.hashkey
        ttEntry = AI.ttGet(board.turn, hashkey)

        if (ttEntry) {
            let moves = board.getMoves(false, false).filter(move => {
                return move.key === ttEntry.move.key
            })


            if (moves.length > 0) {
                if (board.makeMove(ttEntry.move)) {
                    legal++

                    ttEntry.move.hashkey = hashkey
                    
                    PV.push(JSON.parse(JSON.stringify(ttEntry.move)))
                    
                    ttFound = true
                }
            }
        } else {
            // break
        }
    }
    
    for (let i = PV.length - 1; i > 0; i--) {
        board.unmakeMove(PV[i])
    }
    
    return PV
}

// https://www.chessprogramming.org/MTD(f) +188 ELO
AI.MTDF = function (board, f, d) {
    //Esta línea permite que el algoritmo funcione como PVS normal
    // return AI.PVS(board, -INFINITY, INFINITY, d, 1, true)
    
    let g = f

    let upperBound = INFINITY
    let lowerBound = -INFINITY

    let lastIterationF = f

    let beta

    do {
        if (g === lowerBound) {
            beta = g + 1
        } else {
            beta = g
        }

        g = AI.PVS(board, beta - 1, beta, d, 1, false)

        if (g < beta) {
            upperBound = g
        } else {
            lowerBound = g
        }
    } while (lowerBound < upperBound && !AI.stop)


    if (AI.stop) {
        return lastIterationF
    } else {
        return g
    }
}

AI.MTDF2 = function (board, f, d, lowerBound, upperBound) {
    //Esta línea permite que el algoritmo funcione como PVS normal
    // return AI.PVS(board, -Infinity, Infinity, d, 1)
    return AI.PVS(board, lowerBound, upperBound, d, 1, false, true)
    // return AI.BNS(board, -INFINITY, INFINITY, d)
    
    let bound = [lowerBound, upperBound] // lower, upper
    
    do {
       let beta = f + (f === bound[0])

       f = AI.PVS(board, beta - 1, beta, d, 1, false, true) //beta - 2 es mejor que beta - 1 (140 ELO)

    //    f = AI.BNS(board, beta - 1, beta, d)
       bound[f < beta? 1 : 0] = f


    //    console.log(bound)
    } while (bound[0] < bound[1])
    
    return f
}

AI.nextGuess = (alpha, beta, subtreeCount)=>{
    return alpha + (beta - alpha) * (subtreeCount - 1) / subtreeCount
}

AI.BNS = (board, alpha, beta, depth)=>{
    let moves = board.getMoves()

    let ttEntry = AI.ttGet(board.turn, board.hashkey)
    
    moves = AI.sortMoves(board, moves, board.turn, 1, depth, ttEntry)

    let subtreeCount = moves.length
    let bestNode

    let betterCount = 0

    do {
        let test = AI.nextGuess(alpha, beta, subtreeCount) | 0

        betterCount = 0

        for (let i = 0; i < moves.length; i++) {
            if (betterCount > 1) break

            let move = moves[i]

            if (board.makeMove(move)) {
                let bestVal = -AI.PVS(board, -test, -test + 1, depth - 1, 2, false)
    
                board.unmakeMove(move)
    
                if (bestVal >= test) {
                    betterCount++
                    bestNode = move

                }
            }

        }
        
        if (betterCount >= 1) {
            subtreeCount = betterCount
            alpha = test
        }
        
        if (betterCount === 0) {
            beta--
        }
        
    } while (beta - alpha > 1 && betterCount !== 1 && !AI.stop)
    
    // AI.ttSave(board.turn, board.hashkey, alpha, EXACT, depth, bestNode)

    return alpha
}


AI.search = function (board, options) {
    if (options.print) console.log('Board Zobrist Hash', board.hashkey)
    AI.sortingTime = 0
    AI.searchTime0 = Date.now()
    AI.collisions = 0
    AI.ttGets = 0.1
    AI.pawncollisions = 0
    AI.probcuts = 0
    AI.turn = board.turn
    AI.sign = board.turn === WHITE? 1 : -1
    AI.pliesForSearch = 0

    if (board.movenumber && board.movenumber <= 1) {
        AI.lastscore = 0
        AI.bestmove = 0
        AI.bestscore = 0
        AI.f = 0
    }

    let isEnPassant = board.enPassantSquares

    // console.log(isEnPassant)

    if (options && options.seconds) AI.secondspermove = options.seconds

    AI.milspermove = 1000 * AI.secondspermove
    
    let nmoves = board.movenumber * 2
    let changeofphase = false
    
    AI.phase = 0
    
    if (AI.lastphase !== AI.phase) changeofphase = true
    
    AI.lastphase = AI.phase

    // AI.createTables(board, true, true, true, true)
    // AI.f = AI.f

    if (board.movenumber && board.movenumber === 1) {
        AI.createTables(board, true, true, true, true)
        AI.lastscore = 0
    }

    return new Promise((resolve, reject) => {
        let color = board.turn

        AI.color = color

        let isWhite = color === 1

        AI.nodes = 0
        AI.qsnodes = 0
        AI.enodes = 0
        AI.pvnodes = 0
        AI.ttnodes = 0
        AI.etcNodes = 0
        AI.uctnodes = 0
        AI.evalhashnodes = 0
        AI.evalnodes = 0
        AI.lazynodes = 0
        AI.rmoves = 0
        AI.evalTime = 0
        AI.moveTime = 0
        AI.iteration = 0
        AI.PV = AI.getPV(board, 1)
        AI.stop = false
        AI.maxMovesCount = 0
        AI.totalMoves = 0
        AI.quietMoves = 0

        AI.changeinPV = true

        let score = 0
        AI.fhfperc = 0

        AI.killers = []

        AI.killers[WHITE] = (new Array(AI.totaldepth + 1)).fill([null, null])
        AI.killers[BLACK] = (new Array(AI.totaldepth + 1)).fill([null, null])

        for (let i = 0; i < AI.totaldepth; i++) {
            AI.killers[WHITE][i] = [null, null]
            AI.killers[BLACK][i] = [null, null]
        }

        AI.fh = AI.fhf = 0.001
        
        AI.previousls = AI.lastscore

        let alpha = -INFINITY
        let beta = INFINITY

        let sign = board.turn === WHITE? 1 : -1

        AI.effectiveEvaluations = 0

        AI.staticEval = AI.evaluate(board, 1, alpha, beta, true, board.isKingInCheck(), 0)

        if (AI.staticEval > SMALLMARGIN) {
            AI.WINNING = WHITE
        } else if (AI.staticEval < -SMALLMARGIN) {
            AI.WINNING = BLACK
        } else {
            AI.WINNING = 0
        }

        let candidateMoves = []

        let score100, sigmoid

        AI.mostCommonSquares = new Array(64).fill(0)

        AI.timer = Date.now()

        AI.timeEnd = AI.timer + AI.milspermove
    
        board.rephistory.push(board.hashkey)

        let depth = 0

        //Iterative Deepening
        for (; depth <= AI.totaldepth; ) {
            if (AI.stop && AI.bestmove) break

            AI.iteration++

            postMessage({depth: depth - 1, score: score100 | 0})

            let ttEntry = AI.ttGet(board.turn, board.hashkey)

            let alpha = depth < 6? -INFINITY : AI.f - SMALLMARGIN
            let beta = depth < 6? INFINITY : AI.f + SMALLMARGIN

            if (false && ttEntry && ttEntry.depth > depth) {
                AI.f = ttEntry.score
                AI.bestmove = ttEntry.move
            } else {

                let mtdfScore = AI.MTDF2(board, AI.f, depth, alpha, beta) // +239 ELO

                if (mtdfScore >= beta || mtdfScore <= alpha) {
                    // re-search
                    console.log('Re-Search')
                    mtdfScore = AI.MTDF2(board, AI.f, depth, -INFINITY, INFINITY)
                }

                if (!AI.stop) AI.f = mtdfScore
            }

            score = AI.nullWindowFactor * (isWhite ? 1 : -1) * AI.f | 0

            AI.PV = AI.getPV(board, AI.totaldepth)

            if (AI.PV[1]) {
                candidateMoves.push(AI.PV[1])
            }

            if (AI.stop) break

            AI.lastscore = score

            AI.fhfperc = Math.round(AI.fhf * 100 / AI.fh)

            // console.log(depth, `FHF: ${AI.fhfperc}%`)

            if (AI.PV && !AI.stop && options.print) {
                console.log('FHF', AI.fhfperc, 'Depth:', depth, 'Score:', score, 'Eval Nodes:', AI.evalnodes, 'PV Nodes', AI.pvnodes, 'PHR:',(AI.phnodes / AI.pnodes * 100 | 0), 'MCP:', AI.maxMovesCount, 'UCT Nodes:', AI.uctnodes, 'ProbCuts:', AI.probcuts)
            }

            score100 = AI.lastscore * (100/VPAWN)

            sigmoid = 1 / (1 + Math.pow(10, -score100 / 354))

            postMessage({sigmoid, score: AI.lastscore})

            depth++
        }


        AI.bestmove = candidateMoves[candidateMoves.length - 2]

        AI.lastmove = AI.bestmove

        //zugzwang prevention
        if (!AI.bestmove) {
            console.log('No bestmove')
            let moves = board.getMoves(false, false)

            AI.bestmove = moves[moves.length * Math.random() | 0]
        }

        AI.searchTime1 = Date.now()
        AI.searchTime = AI.searchTime1 - AI.searchTime0
        if (options.print) console.log(
                    // 'Sorting % time: ', (AI.sortingTime / AI.searchTime) * 100 | 0,
                    // 'Evaluation % time: ', (AI.evalTime / AI.searchTime) * 100 | 0,
                    'NWF: ', AI.nullWindowFactor | 0,
                    'Random Moves Pruned (%): ', (AI.rmoves / AI.totalMoves) * 100 | 0,
                    'ETC (%): ', (AI.etcNodes/AI.nodes*1000 | 0) / 10,
                    'Collisions (n): ', AI.collisions,
                    'Collisions (%): ', (AI.collisions/AI.ttGets*1000 | 0) / 10,
                    'Pawn Hit Rate (%): ', (AI.phnodes/AI.pnodes*1000 | 0) / 10,
                    'Pawn Collisions (%): ', (AI.pawncollisions/AI.pnodes*1000 | 0) / 10,
                    'Nodes: ', (AI.nodes) | 0,
                    'QS Nodes: ', (AI.qsnodes) | 0,
                    'NPS: ', (AI.nodes + AI.qsnodes) / options.seconds | 0,
                    'Lazy Nodes: ', AI.lazynodes,
        )

        resolve({
            n: board.movenumber, phase: AI.phase, depth: depth - 1, from: board.board64[AI.bestmove.from],
            to: board.board64[AI.bestmove.to], fromto0x88: [AI.bestmove.from, AI.bestmove.to],
            score: score100, sigmoid: (sigmoid * 100 | 0) / 100, nodes: AI.nodes, qsnodes: AI.qsnodes,
            FHF: AI.fhfperc + '%', version: AI.version
        })

        if (AI.bestmove.isCapture) board.rephistory = []

        let near2mate = false

        if (board.movenumber && board.movenumber > 2) {
            if (AI.f > MATE - AI.totaldepth) near2mate = true
            if (AI.f < -MATE + AI.totaldepth) near2mate = true
        }

        if (!near2mate) {
            AI.createTables(board, AI.collisions/AI.ttGets > 0.02, AI.collisions/AI.ttGets > 0.02, true, AI.pawncollisions/AI.phnodes > 0.05)
        } else {
            if (options.print) console.log('Near to mate!')
        }
    })
}

AI.createTables(orobas, true, true, true, true)

onmessage = function (oEvent) {
    AI.originalFEN = oEvent.data.fen
    orobas.loadFen(oEvent.data.fen)

    if (oEvent.data.options.static) {
        console.log('Static')

        let oldNullWindowFactor = AI.nullWindowFactor

        AI.nullWindowFactor = 1

        let score = AI.evaluate(orobas, 1, 0, 1, true, orobas.isKingInCheck(), 0)

        console.log(orobas.fen, score)

        AI.nullWindowFactor = oldNullWindowFactor

        postMessage({score})
    } else {
        AI.search(orobas, {seconds: oEvent.data.options.seconds, print: oEvent.data.options.print}).then(res=>{
            res.makemove = true
            postMessage(res)
        })
    }

};

// Blunder grosero en r1b2rk1/2pn1p2/ppp3qp/8/4PB2/3P1R2/P1PNB1PP/Q5K1 b - - 0 17