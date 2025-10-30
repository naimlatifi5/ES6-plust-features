const escapeRegex = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // makes special characters safe to use
}



export const regExpExample = () => {
  console.log("Demonstrating regExpExample:\n");
  const keyword = "wake.up"; // . is a special regex character, meaning match any single character expect newline
  const regex = new RegExp(keyword); // Uh-oh! '.' matches ANY char
  console.log("wake-up".match(regex)); // Matches incorrectly
  console.log(`wake@up`, "wake@up".match(regex)); // Also matches incorrectly

}

export const beforeRegExpEscape = () => {
 const keyword = "wake.up";
  const regex = new RegExp(escapeRegex(keyword), "i");
  console.log("wake.up".match(regex)); // Correctly matches
}


export const regExpEscapeFeature = () => {
  console.log("Demonstrating RegExp.escape():\n");
  const keyword = "wake.up";
  const regex1 = new RegExp(RegExp.escape(keyword), "i");

  console.log(regex1); // /wake\.up/i // replaced . with literal \.
  console.log("wake.up".match(regex1)); // ✅ Exact match
  console.log("wake-up".match(regex1)); // ❌ No match
}