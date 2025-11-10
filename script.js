@@ -0,0 +1,9 @@
function highlightTile(tile) {
  const all = document.querySelectorAll('.tile');
  all.forEach(t => {
    t.style.transform = "scale(1)";
    t.style.boxShadow = "none";
  });
  tile.style.transform = "scale(1.1)";
  tile.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
}
