import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import ClearIcon from "@mui/icons-material/Clear";
import "./Turn.css"

interface Props {
    turn : boolean
}
const Turn = (props: Props) => {
    const { turn } = props;

    return (
        <>
            <div className="containerTurn">

                <div className="containerX">
                    <ClearIcon 
                        className={ `icon figureX ${ turn===true ? 'active' : "noActive" } `} 
                    />
                </div>

                <div className="containerO">
                    <RadioButtonUncheckedIcon
                        className={ `icon figureO ${ turn===false ? 'active' : "noActive" } `} 
                    />
                </div>

            </div>
        </>
    )
    

}
export default Turn