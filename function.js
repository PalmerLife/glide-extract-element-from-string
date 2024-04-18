window.function = function(string, index) {
  if (string.value === undefined || index.value === undefined) return;

  const items = string.value.split(",");
  const idx = Math.floor(Number(index.value));
  return items[idx] ?? "";
}
