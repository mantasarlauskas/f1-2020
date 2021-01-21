import React from 'react';
import { mapDriverResults } from 'client/utils/clientData';
import { addDriverResults, DriverResultsRow } from 'client/reducers/driverResults';
import SeasonResultsTable, { ResultsStateName } from 'client/components/SeasonResultsTable';

function DriverResultsTable({ driverId }: DriverResultsTableProps) {
    return (
        <SeasonResultsTable
            id={driverId}
            stateName={ResultsStateName.DRIVERS}
            url={`drivers/${driverId}/results`}
            mapResults={mapDriverResults}
            addResults={addDriverResults}
            head={(
                <tr>
                    <th>Grand Prix</th>
                    <th>Date</th>
                    <th>Car</th>
                    <th>Grid</th>
                    <th>Position</th>
                    <th>Points</th>
                    <th>Laps</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Fastest lap</th>
                </tr>
            )}
            content={(driverResults: DriverResultsRow[]) => driverResults.map(({
                raceName,
                date,
                constructorName,
                grid,
                position,
                points,
                laps,
                time,
                status,
                fastestLap,
            }) => (
                <tr key={raceName}>
                    <td>{raceName}</td>
                    <td>{date}</td>
                    <td>{constructorName}</td>
                    <td>{grid}</td>
                    <td>{position}</td>
                    <td>{points}</td>
                    <td>{laps}</td>
                    <td>{time || String.fromCharCode(8212)}</td>
                    <td>{status}</td>
                    <td>{fastestLap || String.fromCharCode(8212)}</td>
                </tr>
            ))}
        />
    );
}

interface DriverResultsTableProps {
    driverId: string;
}

export default DriverResultsTable;
