import React from 'react';
import { useSelector } from 'react-redux';
import { PageState } from 'client/state';
import ResultsTable from 'client/components/ResultsTable';

function RaceResultsTable({ roundId }: RaceResultsTableProps) {
    const results = useSelector((state: PageState) => state.RoundResults?.[roundId]?.Race);
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
                    <th>Laps</th>
                    <th>Grid</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Points</th>
                </tr>
            )}
        >
            {results.map(({
                position,
                driverNumber,
                driverName,
                constructorName,
                laps,
                grid,
                time,
                status,
                points,
            }) => (
                <tr key={position}>
                    <td>{position}</td>
                    <td>{driverNumber}</td>
                    <td>{driverName}</td>
                    <td>{constructorName}</td>
                    <td>{laps}</td>
                    <td>{grid}</td>
                    <td>{time || String.fromCharCode(8212)}</td>
                    <td>{status}</td>
                    <td>{points}</td>
                </tr>
            ))}
        </ResultsTable>
    );
}

interface RaceResultsTableProps {
    roundId: string;
}

export default RaceResultsTable;
