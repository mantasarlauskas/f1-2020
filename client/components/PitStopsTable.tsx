import React from 'react';
import { PageState } from 'client/reducers';
import ResultsTable from 'client/components/ResultsTable';
import { getDriverFullName } from 'client/utils/driver';
import { useShallowSelector } from 'client/utils/redux';

function PitStopsTable({ roundId }: PitStopsTableProps) {
    const pitStops = useShallowSelector(({ RoundResults, Drivers }: PageState) => (
        RoundResults?.[roundId]?.PitStops?.map((pitStopRow) => ({
            ...pitStopRow,
            driverName: getDriverFullName(Drivers?.find(({ driverId }) => (
                driverId === pitStopRow.driverId
            ))),
        }))
    ));

    if (!pitStops?.length) {
        return null;
    }

    return (
        <ResultsTable
            head={(
                <tr>
                    <th>Driver</th>
                    <th>Stop</th>
                    <th>Lap</th>
                    <th>Time of day</th>
                    <th>Duration</th>
                </tr>
            )}
        >
            {pitStops.map(({
                driverId,
                driverName,
                lap,
                stop,
                time,
                duration,
            }) => (
                <tr key={`${driverId}-${stop}`}>
                    <td>{driverName}</td>
                    <td>{stop}</td>
                    <td>{lap}</td>
                    <td>{time}</td>
                    <td>{duration}</td>
                </tr>
            ))}
        </ResultsTable>
    );
}

interface PitStopsTableProps {
    roundId: string;
}

export default PitStopsTable;
