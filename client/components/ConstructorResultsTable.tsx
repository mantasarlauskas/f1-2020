import React from 'react';
import { mapConstructorResults } from 'client/utils/clientData';
import { addConstructorResults, ConstructorResultsRow } from 'client/reducers/constructorResults';
import SeasonResultsTable, { ResultsStateName } from 'client/components/SeasonResultsTable';

function ConstructorResultsTable({ constructorId }: ConstructorResultsTableProps) {
    return (
        <SeasonResultsTable
            id={constructorId}
            stateName={ResultsStateName.CONSTRUCTORS}
            url={`constructors/${constructorId}/results`}
            mapResults={mapConstructorResults}
            addResults={addConstructorResults}
            head={(
                <tr>
                    <th>Grand Prix</th>
                    <th>Driver</th>
                    <th>Grid</th>
                    <th>Position</th>
                    <th>Points</th>
                    <th>Laps</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Fastest lap</th>
                </tr>
            )}
            content={(constructorResults: ConstructorResultsRow[]) => constructorResults.map(({
                raceName,
                driverResults,
            }) => driverResults.map(({
                driverName,
                grid,
                position,
                points,
                laps,
                time,
                status,
                fastestLap,
            }) => (
                <tr key={`${raceName}-${driverName}`}>
                    <td>{raceName}</td>
                    <td>{driverName}</td>
                    <td>{grid}</td>
                    <td>{position}</td>
                    <td>{points}</td>
                    <td>{laps}</td>
                    <td>{time || String.fromCharCode(8212)}</td>
                    <td>{status}</td>
                    <td>{fastestLap || String.fromCharCode(8212)}</td>
                </tr>
            )))}
        />
    );
}

interface ConstructorResultsTableProps {
    constructorId: string;
}

export default ConstructorResultsTable;
