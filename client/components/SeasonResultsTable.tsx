import React, { useEffect, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from 'client/hooks/useFetch';
import Loader from 'client/components/Loader';
import { PageState } from 'client/state';
import { DriverResultsRow } from 'client/state/driverResults';
import { ConstructorResultsRow } from 'client/state/constructorResults';
import ResultsTable from 'client/components/ResultsTable';

export enum ResultsStateName {
    DRIVERS = 'DriverResults',
    CONSTRUCTORS = 'ConstructorResults',
}

type ResultsType = DriverResultsRow | ConstructorResultsRow;

function SeasonResultsTable({
    id,
    stateName,
    url,
    mapResults,
    addResults,
    content,
    head,
}: ResultsTableProps) {
    const dispatch = useDispatch();
    const results = useSelector<PageState, ResultsType[]>((state) => state[stateName]?.[id]);
    const { fetching, data } = useFetch({
        url,
        shouldFetch: !results,
        mapData: mapResults,
    });

    useEffect(() => {
        if (data?.length) {
            dispatch(addResults(id, data));
        }
    }, [dispatch, addResults, id, data]);

    if (fetching) {
        return <Loader />;
    }

    if (!results?.length) {
        return null;
    }

    return (
        <ResultsTable title="Season results" head={head}>
            {content(results)}
        </ResultsTable>
    );
}

interface ResultsTableProps {
    id: string;
    stateName: ResultsStateName;
    url: string;
    mapResults: (res: any) => ResultsType[];
    addResults: (id: string, data: ResultsType[]) => void;
    content: (res: ResultsType[]) => ReactNode;
    head: ReactNode;
}

export default SeasonResultsTable;
