program BubbleSort;

CONST
        n = 100;

VAR
        randArray: array[1..n] of Integer;
        i, j, tmp: Integer;

PROCEDURE sort();
BEGIN
        FOR i:=1 TO n-1 DO
        BEGIN
                FOR j:=1 TO n-1 DO
                BEGIN
                       IF randArray[j] > randArray[j+1] THEN
                       BEGIN
                                tmp := randArray[j];
                                randArray[j] := randArray[j+1];
                                randArray[j+1] := tmp;
                       END;
                END;
        END;
END;

BEGIN
        randomize;

        FOR i:=1 TO n DO
        BEGIN
                randArray[i] := Random(n*10)+1;
        END;

        writeln('Start array:');
        FOR i:=1 TO n DO
        BEGIN
                write(randArray[i], ', ');
        END;
        
        sort();
        writeln;
        writeln('Result:');
        FOR i:=1 TO n DO
        BEGIN
                write(randArray[i], ', ');
        END;
        writeln;
END.