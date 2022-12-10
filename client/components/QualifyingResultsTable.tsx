import React from 'react';
import { useSelector } from 'react-redux';
import { PageState } from 'client/state';
import ResultsTable from 'client/components/ResultsTable';

function QualifyingResultsTable({ roundId }: QualifyingResultsTableProps) {
    const results = useSelector((state: PageState) => state.RoundResults?.[roundId]?.Qualifying);
    if (!results?.length) {
        return null;
    }

    return (
        <ResultsTable
            head={(
                <tr>
                    <th>Position</th>
                    <th>Number</th>
                    <th>Driver</th>
                    <th>Constructor</th>
                    <th>Q1</th>
                    <th>Q2</th>
                    <th>Q3</th>
                </tr>
            )}
        >
            {results.map(({
                position,
                driverNumber,
                driverName,
                constructorName,
                q1,
                q2,
                q3,
            }) => (
                <tr key={position}>
                    <td>{position}</td>
                    <td>{driverNumber}</td>
                    <td>{driverName}</td>
                    <td>{constructorName}</td>
                    <td>{q1 || String.fromCharCode(8212)}</td>
                    <td>{q2 || String.fromCharCode(8212)}</td>
                    <td>{q3 || String.fromCharCode(8212)}</td>
                </tr>
            ))}
        </ResultsTable>
    );
}

interface QualifyingResultsTableProps {
    roundId: string;
}

export default QualifyingResultsTable;
