import SassButton from "./Sass/SassButton";
import StyledButton from "./StyleComponent/StyledButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <h1>sass buttons</h1>
        <SassButton type="btnDanger" />
        <SassButton type="btnPrimary" />
        <SassButton type="btnWarning" />
      </div>
      <div>
        <h1>Styled Component buttons</h1>
        {/* <StyledButton type="btnDanger" />
        <StyledButton type="btnPrimary" />
        <StyledButton type="btnWarning" /> */}
        <StyledButton danger />
        <StyledButton primary />
        <StyledButton warning />
      </div>
    </div>
  );
}
