export default function SaveJson({ colors }) {
  const colorTheme = {
    colors: colors,
  };
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
