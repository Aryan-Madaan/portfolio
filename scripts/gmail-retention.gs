// Google Apps Script: enforces the 12-month retention promise in /privacy.
// Not part of the website; it runs inside your own Google account.
//
// One-time setup (about 5 minutes):
//  1. Gmail → Settings → Filters → Create filter:
//       Subject: "[Portfolio]"  → Apply the label: portfolio-contact
//     (tick "Also apply filter to matching conversations" for older ones).
//  2. Go to https://script.google.com → New project → paste this file.
//  3. Run deletePortfolioMessagesPastRetention once and approve the Gmail
//     permission prompt.
//  4. Triggers (clock icon) → Add trigger → deletePortfolioMessagesPastRetention,
//     Time-driven, Day timer.
//
// A conversation is trashed only when its LAST message is older than the
// retention period, so an ongoing conversation is never cut short. Gmail
// permanently deletes trashed mail after 30 days.

const LABEL = "portfolio-contact";
const RETENTION_MONTHS = 12;

function deletePortfolioMessagesPastRetention() {
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - RETENTION_MONTHS);

  const label = GmailApp.getUserLabelByName(LABEL);
  if (!label) return;

  let start = 0;
  const pageSize = 100;
  let trashed = 0;
  while (true) {
    const threads = label.getThreads(start, pageSize);
    if (threads.length === 0) break;
    const expired = threads.filter((t) => t.getLastMessageDate() < cutoff);
    expired.forEach((t) => t.moveToTrash());
    trashed += expired.length;
    // Always move forward a full page so the loop can't repeat forever. If
    // trashing shifts the list and a thread is skipped, tomorrow's run gets it.
    start += threads.length;
  }
  console.log(`Trashed ${trashed} portfolio contact conversation(s).`);
}
