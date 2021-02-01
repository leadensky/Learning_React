import React, {useEffect} from "react";
import { useIterator } from "../hooks/useIterator";

export default function RepoMenu({
    repositories,
    onSelect = f => f
}) {
    const [{name}, previous, next] = useIterator(
        repositories
    );

    useEffect(() => {
        if(!name) return;
        onSelect(name);
    }, [onSelect, name]);

    return (
        <div style={{display: "flex"}}>
            <button onClick={previous}>&lt;</button>
            <p>{name}</p>
            <button onClick={next}>&gt;</button>
        </div>
    );
}