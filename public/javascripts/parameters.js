AI.PAR = [-10,-10,14,24,-22,-19,-17,-2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-10,-19,7,20,-31,31]

AI.PASSERSBONUS = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,150,120,100,100,100,100,120,140,null,null,null,null,null,null,null,null,100,80,60,30,50,60,80,90,null,null,null,null,null,null,null,null,50,50,30,10,20,10,20,40,null,null,null,null,null,null,null,null,20,20,20,20,20,20,20,20,null,null,null,null,null,null,null,null,10,10,10,10,10,10,10,10,null,null,null,null,null,null,null,null,-20,-10,0,0,0,0,-10,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]

// AI.POV = [82, 337, 365, 477, 1025, 100, 94, 281, 297, 512, 936, 400]
AI.POV = [126, 781, 825, 1276, 2538, 100, 208, 854, 915, 1380, 2682, 400]

AI.MOB = []

// AI.MOB[P] = [new Array(5).fill(0).map((e,i)=>4*i), new Array(5).fill(0).map((e,i)=>4*i)]
AI.MOB[N] = [-25,-18,-6,-2,2,4,8,10,11].map((e,i)=>i)
AI.MOB[B] = [-16,-7,5,9,12,17,18,21,22,24,26,27,31,32,31].map((e,i)=>i)
AI.MOB[R] = [-19,-8,-4,-2,-1,0,3,5,7,8,10,11,14,16,20,56].map((e,i)=>i)
AI.MOB[Q] = [-13,-8,1,1,5,8,8,13,14,16,18,19,20,23,24,24,25,26,28,31,33,36,37,38,39,40,41,43,66].map((e,i)=>i)
// AI.MOB[K] = [new Array(9).fill(0).map((e,i)=>0), new Array(9).fill(0).map((e,i)=>i)]

AI.PSQT = [
   0,   0,   0,   0,   0,   0,  0,   0,    null,null,null,null,null,null,null,null,
  98, 134,  61,  95,  68, 126, 34, -11,    null,null,null,null,null,null,null,null,
  -6,   7,  26,  31,  65,  56, 25, -20,    null,null,null,null,null,null,null,null,
 -14,  13,   6,  21,  48,  12, 17, -23,    null,null,null,null,null,null,null,null,
 -27,  -2,  -5,  12,  17,   6, 10, -25,    null,null,null,null,null,null,null,null,
 -26,  -4,  -4, -10,   3,   3, 50, -12,    null,null,null,null,null,null,null,null,
 -35,  -1, -20, -23, -15,  50, 50,  50,    null,null,null,null,null,null,null,null,
   0,   0,   0,   0,   0,   0,  0,   0,    null,null,null,null,null,null,null,null,

  -167, -89, -34, -49,  61, -97, -15, -107,    null,null,null,null,null,null,null,null,
   -73, -41,  72,  36,  23,  62,   7,  -17,    null,null,null,null,null,null,null,null,
   -47,  60,  37,  65,  84, 129,  73,   44,    null,null,null,null,null,null,null,null,
    -9,  17,  19,  53,  37,  69,  18,   22,    null,null,null,null,null,null,null,null,
   -13,   4,  16,  13,  28,  19,  21,   -8,    null,null,null,null,null,null,null,null,
   -23,  -9,  40,  10,  19,  40,  25,  -56,    null,null,null,null,null,null,null,null,
   -29, -53, -12,  20, -30,  18, -14,  -19,    null,null,null,null,null,null,null,null,
  -105, -21, -58, -33, -17, -28, -30,  -23,    null,null,null,null,null,null,null,null,

  -29,   4, -82, -37, -25, -42,   7,  -8,    null,null,null,null,null,null,null,null,
  -26,  16, -18, -13,  30,  59,  18, -47,    null,null,null,null,null,null,null,null,
  -16,  37,  43,  40,  35,  50,  37,  -2,    null,null,null,null,null,null,null,null,
   -4,  30,  19,  50,  37,  37,   7,  -2,    null,null,null,null,null,null,null,null,
   -6,  13,  40,  26,  34,  12,  10,   4,    null,null,null,null,null,null,null,null,
    0,  15,  15,  15,  14,  27,  18,  10,    null,null,null,null,null,null,null,null,
    4,  30,  16,   0,   7,  21,  50,   1,    null,null,null,null,null,null,null,null,
  -33, -30, -14, -21, -13, -30, -39, -21,    null,null,null,null,null,null,null,null,

  32,  42,  32,  51, 63,  9,  31,  43,    null,null,null,null,null,null,null,null,
  27,  32,  58,  62, 80, 67,  26,  44,    null,null,null,null,null,null,null,null,
  -5,  19,  26,  36, 17, 45,  61,  16,    null,null,null,null,null,null,null,null,
 -24, -11,   7,  26, 24, 35,  -8, -20,    null,null,null,null,null,null,null,null,
 -36, -26, -12,  -1,  9, -7,   6, -23,    null,null,null,null,null,null,null,null,
 -45, -25, -16, -17,  3,  0,  -5, -33,    null,null,null,null,null,null,null,null,
 -44, -16, -20,  -9, -1, 11,  -6, -71,    null,null,null,null,null,null,null,null,
 -19, -13, -10,  40, 40, 20, -37, -26,    null,null,null,null,null,null,null,null,

 -28,   0,  29,  12,  59,  44,  43,  45,   null,null,null,null,null,null,null,null,
 -24, -39,  -5,   1, -16,  57,  28,  54,   null,null,null,null,null,null,null,null,
 -13, -17,   7,   8,  29,  56,  47,  57,   null,null,null,null,null,null,null,null,
 -27, -27, -16, -16,  -1,  17,  -2,   1,   null,null,null,null,null,null,null,null,
  -9, -26,  -9, -10,  -2,  -4,   3,  -3,   null,null,null,null,null,null,null,null,
 -14,   2, -11,  -2,  -5,   2,  14,   5,   null,null,null,null,null,null,null,null,
 -35,  -8,  11,  20,  28,  15,  -3,   1,   null,null,null,null,null,null,null,null,
  -1, -18,  -9,  10, -15, -25, -31, -50,    null,null,null,null,null,null,null,null,

  -65,  23,  16, -15, -56, -34,   2,  13,    null,null,null,null,null,null,null,null,
  29,  -1, -20,  -7,  -8,  -4, -38, -29,    null,null,null,null,null,null,null,null,
  -9,  24,   2, -16, -20, -50, -50, -22,    null,null,null,null,null,null,null,null,
 -17, -20, -12, -27,-130,-125,-114,-136,    null,null,null,null,null,null,null,null,
 -49,  -1, -27, -39, -46,-144,-133,-151,    null,null,null,null,null,null,null,null,
 -14, -14, -22, -46, -44,-140,-105,-127,    null,null,null,null,null,null,null,null,
   1,   7,  -8, -64, -43, -50, -50, -50,    null,null,null,null,null,null,null,null,
 -15,  10,  -30, -54, -20, -30,  60,  14,    null,null,null,null,null,null,null,null,

   0,   0,   0,   0,   0,   0,   0,   0,    null,null,null,null,null,null,null,null,
 178, 173, 158, 134, 147, 132, 165, 187,    null,null,null,null,null,null,null,null,
  94, 100,  85,  67,  56,  53,  82,  84,    null,null,null,null,null,null,null,null,
  32,  24,  13,  15,  10,   4,  17,  17,    null,null,null,null,null,null,null,null,
  13,   9,  -3,  3,    3,  -8,   3,  -1,    null,null,null,null,null,null,null,null,
   4,   7,  -6,   1,   0,  -5,  -1,  -8,    null,null,null,null,null,null,null,null,
  13,   8,   8, -20, -20,   0,   2,  -7,    null,null,null,null,null,null,null,null,
   0,   0,   0,   0,   0,   0,   0,   0,    null,null,null,null,null,null,null,null,

   -58, -38, -13, -28, -31, -27, -63, -99,    null,null,null,null,null,null,null,null,
   -25,  -8, -25,  -2,  -9, -25, -24, -52,    null,null,null,null,null,null,null,null,
   -24, -20,  10,   9,  -1,  -9, -19, -41,    null,null,null,null,null,null,null,null,
   -17,   3,  22,  22,  22,  11,   8, -18,    null,null,null,null,null,null,null,null,
   -18,  -6,  16,  25,  16,  17,   4, -18,    null,null,null,null,null,null,null,null,
   -23,  -3,  -1,  15,  10,  -3, -20, -22,    null,null,null,null,null,null,null,null,
   -42, -20, -10,  -5,  -2, -20, -23, -44,    null,null,null,null,null,null,null,null,
   -29, -51, -23, -15, -22, -18, -50, -64,    null,null,null,null,null,null,null,null,

   -14, -21, -11,  -8, -7,  -9, -17, -24,   null,null,null,null,null,null,null,null,
   -8,  -4,   7, -12, -3, -13,  -4, -14,   null,null,null,null,null,null,null,null,
    2,  -8,   0,  -1, -2,   6,   0,   4,   null,null,null,null,null,null,null,null,
   -3,   9,  12,   9, 14,  10,   3,   2,   null,null,null,null,null,null,null,null,
   -6,   3,  13,  19,  7,  10,  -3,  -9,   null,null,null,null,null,null,null,null,
  -12,  -3,   8,  10, 13,   3,  -7, -15,   null,null,null,null,null,null,null,null,
  -14, -18,  -7,  -1,  4,  -9, -15, -27,   null,null,null,null,null,null,null,null,
  -23,  -9, -23,  -5, -9, -16,  -5, -17,    null,null,null,null,null,null,null,null,

  13, 10, 18, 15, 12,  12,   8,   5,   null,null,null,null,null,null,null,null,
  11, 13, 13, 11, -3,   3,   8,   3,   null,null,null,null,null,null,null,null,
   7,  7,  7,  5,  4,  -3,  -5,  -3,   null,null,null,null,null,null,null,null,
   4,  3, 13,  1,  2,   1,  -1,   2,   null,null,null,null,null,null,null,null,
   3,  5,  8,  4, -5,  -6,  -8, -11,   null,null,null,null,null,null,null,null,
  -4,  0, -5, -1, -7, -12,  -8, -16,   null,null,null,null,null,null,null,null,
  -6, -6,  0,  2, -9,  -9, -11,  -3,   null,null,null,null,null,null,null,null,
  -9,  2,  3, -1, -5, -13,   4, -20,    null,null,null,null,null,null,null,null,

  -9,  22,  22,  27,  27,  19,  10,  20,    null,null,null,null,null,null,null,null,
  -17,  20,  32,  41,  58,  25,  30,   0,    null,null,null,null,null,null,null,null,
  -20,   6,   9,  49,  47,  35,  19,   9,    null,null,null,null,null,null,null,null,
    3,  22,  24,  45,  57,  40,  57,  36,    null,null,null,null,null,null,null,null,
  -18,  28,  19,  47,  31,  34,  39,  23,    null,null,null,null,null,null,null,null,
  -16, -27,  15,   6,   9,  17,  10,   5,    null,null,null,null,null,null,null,null,
  -22, -23, -30, -16, -16, -23, -36, -32,    null,null,null,null,null,null,null,null,
  -33, -28, -22, -43,  -5, -32, -20, -41,    null,null,null,null,null,null,null,null,

  -74, -35, -18, -18, -11,  15,   4, -17,    null,null,null,null,null,null,null,null,
  -12,  17,  14,  17,  17,  38,  23,  11,    null,null,null,null,null,null,null,null,
   10,  17,  23,  15,  20,  45,  44,  13,    null,null,null,null,null,null,null,null,
   -8,  22,  24,  27,  26,  33,  26,   3,    null,null,null,null,null,null,null,null,
  -18,  -4,  21,  24,  27,  23,   9, -11,    null,null,null,null,null,null,null,null,
  -19,  -3,  11,  21,  23,  16,   7,  -9,    null,null,null,null,null,null,null,null,
  -27, -11,   4,  13,  14,   4,  -5, -17,    null,null,null,null,null,null,null,null,
  -53, -34, -21, -11, -28, -14, -24, -43,    null,null,null,null,null,null,null,null,
]
        
AI.PHASELIMITS = [ 40, 60, 80 ]

AI.PIECEKINGDISTANCE = {
  [P]: [
      0, -55,  0, 0,  23,
      7,    0, -7, 3, -11,
      0,    0, -5, 2,   0
    ],
  [N]: [
      0, -56, 55,   55, 17,
     17,  39,  55,   41, 55,
     55, 55, 55, -5,  0
   ],
  [B]: [
      0,   2, -24, -55, 9,  20,
    -12,   6,   0, -12, 8, -34,
    -55, -55, -13
  ],
  [R]: [
      0,  -1,  6,  5, -4,   9,
      2,   0,  0, 23, 16, -31,
      7, -18, 34
    ],
  [Q]: [
      0, -10,   55,  0, 39,
      7, -26,    0,  0,  0,
    -10, -30, -55, 33,  0
  ],
  [K]: [0,24,12,6,0,-2,-4,-6,-8,-10,-12,-14,-16,-18,-20].map(e=>0),
}

AI.createPieceValues = ()=>{

    AI.PIECE_VALUES[OPENING][0] = 0

    AI.PIECE_VALUES[OPENING][p] = -AI.POV[0]
    AI.PIECE_VALUES[OPENING][n] = -AI.POV[1]
    AI.PIECE_VALUES[OPENING][b] = -AI.POV[2]
    AI.PIECE_VALUES[OPENING][r] = -AI.POV[3]
    AI.PIECE_VALUES[OPENING][q] = -AI.POV[4]
    AI.PIECE_VALUES[OPENING][k] = -AI.POV[5]

    AI.PIECE_VALUES[OPENING][P] = AI.POV[0]
    AI.PIECE_VALUES[OPENING][N] = AI.POV[1]
    AI.PIECE_VALUES[OPENING][B] = AI.POV[2]
    AI.PIECE_VALUES[OPENING][R] = AI.POV[3]
    AI.PIECE_VALUES[OPENING][Q] = AI.POV[4]
    AI.PIECE_VALUES[OPENING][K] = AI.POV[5]

    AI.PIECE_VALUES[LATE_ENDGAME][p] = -AI.POV[6]
    AI.PIECE_VALUES[LATE_ENDGAME][n] = -AI.POV[7]
    AI.PIECE_VALUES[LATE_ENDGAME][b] = -AI.POV[8]
    AI.PIECE_VALUES[LATE_ENDGAME][r] = -AI.POV[9]
    AI.PIECE_VALUES[LATE_ENDGAME][q] = -AI.POV[10]
    AI.PIECE_VALUES[LATE_ENDGAME][k] = -AI.POV[11]

    AI.PIECE_VALUES[LATE_ENDGAME][P] = AI.POV[6]
    AI.PIECE_VALUES[LATE_ENDGAME][N] = AI.POV[7]
    AI.PIECE_VALUES[LATE_ENDGAME][B] = AI.POV[8]
    AI.PIECE_VALUES[LATE_ENDGAME][R] = AI.POV[9]
    AI.PIECE_VALUES[LATE_ENDGAME][Q] = AI.POV[10]
    AI.PIECE_VALUES[LATE_ENDGAME][K] = AI.POV[11]

    AI.PSQT_OPENING[P] = AI.PSQT.slice(0,127).map(e => e === null? null : +(1 + e / AI.PIECE_VALUES[OPENING][P]).toFixed(3))
    AI.PSQT_OPENING[N] = AI.PSQT.slice(128,255).map(e => e === null? null : +(1 + e / AI.PIECE_VALUES[OPENING][N]).toFixed(3))
    AI.PSQT_OPENING[B] = AI.PSQT.slice(256,383).map(e => e === null? null : +(1 + e / AI.PIECE_VALUES[OPENING][B]).toFixed(3))
    AI.PSQT_OPENING[R] = AI.PSQT.slice(384,511).map(e => e === null? null : +(1 + e / AI.PIECE_VALUES[OPENING][R]).toFixed(3))
    AI.PSQT_OPENING[Q] = AI.PSQT.slice(512,639).map(e => e === null? null : +(1 + e / AI.PIECE_VALUES[OPENING][Q]).toFixed(3))
    AI.PSQT_OPENING[K] = AI.PSQT.slice(640,767).map(e => e === null? null : +(1 + e / AI.PIECE_VALUES[OPENING][K]).toFixed(3))
    AI.PSQT_LATE_ENDGAME[P] = AI.PSQT.slice(768,895).map(e => e === null? null : +(1 + e / AI.PIECE_VALUES[LATE_ENDGAME][P]).toFixed(3))
    AI.PSQT_LATE_ENDGAME[N] = AI.PSQT.slice(896,1023).map(e => e === null? null : +(1 + e / AI.PIECE_VALUES[LATE_ENDGAME][N]).toFixed(3))
    AI.PSQT_LATE_ENDGAME[B] = AI.PSQT.slice(1024,1151).map(e => e === null? null : +(1 + e / AI.PIECE_VALUES[LATE_ENDGAME][B]).toFixed(3))
    AI.PSQT_LATE_ENDGAME[R] = AI.PSQT.slice(1152,1279).map(e => e === null? null : +(1 + e / AI.PIECE_VALUES[LATE_ENDGAME][R]).toFixed(3))
    AI.PSQT_LATE_ENDGAME[Q] = AI.PSQT.slice(1280,1407).map(e => e === null? null : +(1 + e / AI.PIECE_VALUES[LATE_ENDGAME][Q]).toFixed(3))
    AI.PSQT_LATE_ENDGAME[K] = AI.PSQT.slice(1408,1535).map(e => e === null? null : +(1 + e / AI.PIECE_VALUES[LATE_ENDGAME][K]).toFixed(3))

    AI.PIECEKINGDISTANCE[p] = AI.PIECEKINGDISTANCE[P].map(e=>-e)
    AI.PIECEKINGDISTANCE[n] = AI.PIECEKINGDISTANCE[N].map(e=>-e)
    AI.PIECEKINGDISTANCE[b] = AI.PIECEKINGDISTANCE[B].map(e=>-e)
    AI.PIECEKINGDISTANCE[r] = AI.PIECEKINGDISTANCE[R].map(e=>-e)
    AI.PIECEKINGDISTANCE[q] = AI.PIECEKINGDISTANCE[Q].map(e=>-e)
    AI.PIECEKINGDISTANCE[k] = AI.PIECEKINGDISTANCE[K].map(e=>-e)

    AI.maxMaterialValue = 4 * AI.PIECE_VALUES[OPENING][N] +
                          4 * AI.PIECE_VALUES[OPENING][B] +
                          4 * AI.PIECE_VALUES[OPENING][R] +
                          2 * AI.PIECE_VALUES[OPENING][Q]
}

AI.createPieceValues()