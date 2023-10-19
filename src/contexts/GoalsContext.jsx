import React, { useContext, useEffect, useState } from "react"
import TestGoals from "../data/TestGoals";

const GoalsContext = React.createContext();

export function GoalsProvider({ children }) {
    const [goals, setGoals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setGoals(TestGoals);
    }, []);

    return (
        <GoalsContext.Provider value={goals}>
            { !loading && children }
        </GoalsContext.Provider>
    );
}

export function useGoals() {
    return useContext(GoalsContext);
}