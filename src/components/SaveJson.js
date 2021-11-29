export default function SaveJson({ colors }) {
  const colorTheme = {
    colors: colors,
  };
  // null, " " used to format JSON so it's more readable, see:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_space_argument
  const data = new Blob([JSON.stringify(colorTheme, null, " ")], {
    type: "text/plain",
  });
  const downloadLink = window.URL.createObjectURL(data);

  return (
    <a download="colors.json" href={downloadLink}>
      <p className="menuItem">JSON</p>
    </a>
  );
}
