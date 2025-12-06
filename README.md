♘ Orobas Chess Engine v6.1.5

Orobas is a Chess-Engine created in 2020, written entirely in Javascript.

You can try Orobas in https://orobaschessai.web.app/

FEATURES
Mailbox 0x88 board
MTD(f)
Quiescense Search with stand-pat pruning and futility pruning
Piece-Square-Tables (PSQT) based on PeSTO
Tapered Evaluation for PSQT and material
Late move reductions
Simple SEE
Late moves reductions
Futility pruning
Razoring
Lazy evaluation
Simple Mobility evaluation
Center-control evaluation
Pawn Shield evaluation
Evaluation of some common patterns (rook trapped by a king, developing a bishop in front of pawn, etc.)
Evaluation of king being attacked
Passers evaluation
Space gain evaluation
Pawn structure analysis
32-bits Zobrist hashing
Transposition table
Pawn hash table
Static evaluation hash table
History heuristic
Killer heuristic
Iterative Deepening
Internal Iterative Deepening

INNOVATIONS
Null-Window-Factor. All evaluation values are divided by a number in order to make the MTD(f) algorithm work faster.
Best Node Search (https://en.wikipedia.org/wiki/Best_node_search). This a fuzzy minimax algorithm. I tried to implement it and is indeed faster than MTD(f), but the behaviour is a little buggy.
