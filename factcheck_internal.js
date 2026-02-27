const fs = require('fs');
const content = fs.readFileSync('/Users/mac/product/GodMaster-Orchestrator/sites/site-0001-tokyogas/archive_output/all_pages_html.txt', 'utf8');

const checks = [
  { term: "絶対", issue: "断定的な表現（絶対儲かる、絶対安全など）は景表法違反リスクあり" },
  { term: "0円", issue: "初期費用0円の誤認リスク" },
  { term: "必ずもらえる", issue: "補助金の確実な受給を担保する表現はNG" },
  { term: "無料", issue: "無料相談・見積り以外の文脈での使用に注意" },
  { term: "最強", issue: "根拠のない最上級表現" },
  { term: "一番安い", issue: "根拠のない最上級表現" }
];

console.log("=== Internal Fact Check Report ===");
checks.forEach(check => {
  const count = (content.match(new RegExp(check.term, 'g')) || []).length;
  console.log(`Term: "${check.term}" - Found: ${count} times (Risk: ${check.issue})`);
  
  // Extract context if found
  if (count > 0) {
    const regex = new RegExp(`.{0,30}${check.term}.{0,30}`, 'g');
    const matches = content.match(regex) || [];
    matches.slice(0, 3).forEach(match => console.log(`  Context: ...${match.replace(/\n/g, ' ')}...`));
  }
});
