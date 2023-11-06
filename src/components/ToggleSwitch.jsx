
export default function ToggleSwitch({effectFunction}){
    return (
        <div className="toggleswitch">
            <button id="toggleswitch-toggle" onClick={effectFunction}></button>
        </div>
    )
}