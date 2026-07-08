// Maps local "Competitive Exams/<Exam>/<file>.pdf" path -> Google Drive file ID.
// Same pattern as papers_drive_manifest.js / textbooks_drive_manifest.js: PDFs are
// hosted on Drive (not in the git repo, see .gitignore) to stay under GitHub file size limits.
//
// To add a file: upload it to Drive, set sharing to "Anyone with the link", copy the
// file ID from the share link (the part between /d/ and /view), and add an entry below
// keyed by the exact local path used in the CE data object in index.html.
const DRIVE_CE = {
  // "./Competitive Exams/NMMS/DHARMAPURI NMMS PLANNER 2026 - 27.pdf": "<drive-file-id>",
  // "./Competitive Exams/NMMS/NMMS EXAM GOVT BOOK.pdf": "<drive-file-id>",
  // "./Competitive Exams/NMMS/NMMS Maths - All Videos.pdf": "<drive-file-id>",
  // "./Competitive Exams/NMMS/NMMS Science - All Videos.pdf": "<drive-file-id>",
  // "./Competitive Exams/NMMS/NMMS Social Science - All Videos.pdf": "<drive-file-id>",
  // "./Competitive Exams/NMMS/OMR SHEET - DHARMAPURI .pdf": "<drive-file-id>"
};
