import React from 'react';
import { GamePage } from './GamePage.jsx';
import { InitialPage } from './InitialPage.jsx';
import { ResultsPage } from './ResultsPage.jsx';
import { AppRoute } from '../settings.js';
import { getImages } from '../data.js';
import { results } from '../data.js';

function App() {
    const [page, setPage] = React.useState(AppRoute.Results);
    const [result, setResult] = React.useState(0);
    const [images, setImages] = React.useState([]);
    const [gameType, setGameType] = React.useState(null);
    
    const handleStart = (type) => {
        setGameType(type);
        setImages(getImages(type));
        setPage(AppRoute.Game);
    }

    const showResults = (stepsCount) => {
        setResult(stepsCount);
        setPage(AppRoute.Results);
    };

    const handleReset = () => {
        setPage(AppRoute.Initial);
    };

    const getPage = (route) => {
        switch (route) {
            case AppRoute.Initial:
            return <InitialPage onStart={handleStart}/>
            case AppRoute.Game:
            return <GamePage images={images} gameType={gameType} onShowResults={showResults} />;
            case AppRoute.Results:
            return (
                <ResultsPage
                stepsCount={result}
                onResetGame={handleReset}
                results={results}
                />
            );
            default:
            return null;
        }
    };

    return getPage(page);
}

export default App;