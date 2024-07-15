import React from "react";

export default function Day ({ data, modalVisible, setModalVisible, setFields }) {
    
    function handleClassName () {
        return (data.day === "0") ? "opacity-0": "h-20 p-1 border border-solid border-gray-200 hover:bg-gray-100 cursor-pointer";
    }

    function handleBody () {
        return (data.hasOwnProperty('date')) ? <RunDetails data={ data } /> : null;
    }

    function handleClick (e) {
        if (!modalVisible) {
            e.stopPropagation();
            if(data.date) {
                setFields({
                    date: data.date,
                    run_type: data.run_type,
                    distance: data.distance,
                    time: data.time,
                    comment: data.comment
                })
            }
                
            setModalVisible(true);
        }
    }

    return (
        <div className={ handleClassName() } onClick={ handleClick }>
            <div className="text-xs">{ data.day }</div>
            { handleBody() }
        </div>
    )
}

function RunDetails ({ data }) {
    return (
        <React.Fragment>
            <div className="text-xs text-center">{ data.run_type }</div>
            <div className="text-xs text-center">{ data.distance }km</div>
            <div className="text-xs text-center">{ data.time }min</div>
        </React.Fragment>
    )
}