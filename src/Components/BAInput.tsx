export default function BAInput(props: any) {
    const { placeholder, onchange } = props;
    return (
      <input
        placeholder={placeholder}
        onChange={onchange}
        className="input"
        type={props.type}
      />
    );
  }
  