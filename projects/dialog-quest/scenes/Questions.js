/*
A --> |Z| B
A --> |X| C
B --> |Z| D
B --> |X| E
C --> |Z| F
C --> |X| G
D --> |Z| H
D --> |X| I
E --> |Z| J
E --> |X| K
F --> |Z| L
F --> |X| M
*/

const csvString = `type,key,next,end
q,A,,
,,B,
,,C,
q,B,,
,,D,
,,E,
q,C,,
,,F,
,,G,
q,D,,
,,H,
,,I,
q,E,,
,,J,
,,K,
q,F,,
,,L,
,,M,
q,G,,1
q,H,,1
q,I,,1
q,J,,1
q,K,,1
q,L,,1
q,M,,1`;

export default csvString;
