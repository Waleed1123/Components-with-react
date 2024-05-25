function BButton(props: any) {
    console.log(props);
    return <button style={props.style} className={props.className}  onClick={props.btnClick}>{props.btnValue}</button>;
  }
  export default BButton;
  