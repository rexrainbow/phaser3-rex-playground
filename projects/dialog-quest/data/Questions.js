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
,R,B,
,L,C,
q,B,,
,R,D,
,L,E,
q,C,,
,R,F,
,L,G,
q,D,,
,R,H,
,L,I,
q,E,,
,R,J,
,L,K,
q,F,,
,R,L,
,L,M,
q,G,,1
q,H,,1
q,I,,1
q,J,,1
q,K,,1
q,L,,1
q,M,,1`;

export default csvString;
