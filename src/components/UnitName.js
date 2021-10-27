import "../styles/UnitName.scss"
import { ReactComponent as UnitIcon } from "../img/scale.svg"

const UnitName = () => {
    return(
        <div className="unit">
            <UnitIcon className="unit-icon"/>
            <p className="unit-name">Аналитические весы OHAUS Adventurer АХ324 (B715976163)</p>
        </div>
    )
}

export default UnitName