import React, { useContext, useEffect, useState } from "react"
import TestGoals from "../data/TestGoals";

const GoalsContext = React.createContext();

export function GoalsProvider({}) {
    const [goals, setGoals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setGoals(TestGoals);
    })

    return (
        <GoalsProvider.Provider value={goals}>
            { !loading && children }
        </GoalsProvider.Provider>
    );
}

export function useGoals() {
    return useContext(GoalsContext);
}