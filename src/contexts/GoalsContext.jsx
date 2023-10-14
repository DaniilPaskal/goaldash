import React, { useContext, useState } from "react"

const GoalsContext = React.createContext();

export function GoalsProvider({}) {
    const [goals, setGoals] = useState([]);
    const [loading, setLoading] = useState(true);

    return (
        <GoalsProvider.Provider value={goals}>
            { !loading && children }
        </GoalsProvider.Provider>
    );
}

export function useGoals() {
    return useContext(GoalsContext);
}