// Maps local "Competitive Exams/<Exam>/<file>.pdf" path -> Google Drive file ID.
// Same pattern as papers_drive_manifest.js / textbooks_drive_manifest.js: PDFs are
// hosted on Drive (not in the git repo, see .gitignore) to stay under GitHub file size limits.
//
// To add a file: upload it to Drive, set sharing to "Anyone with the link", copy the
// file ID from the share link (the part between /d/ and /view), and add an entry below
// keyed by the exact local path used in the CE data object in index.html.
const DRIVE_CE = {
  // --- NMMS (Class 8) ---
  // "./Competitive Exams/NMMS/DHARMAPURI NMMS PLANNER 2026 - 27.pdf": "<drive-file-id>",
  // "./Competitive Exams/NMMS/NMMS EXAM GOVT BOOK.pdf": "<drive-file-id>",
  // "./Competitive Exams/NMMS/NMMS Maths - All Videos.pdf": "<drive-file-id>",
  // "./Competitive Exams/NMMS/NMMS Science - All Videos.pdf": "<drive-file-id>",
  // "./Competitive Exams/NMMS/NMMS Social Science - All Videos.pdf": "<drive-file-id>",
  // "./Competitive Exams/NMMS/OMR SHEET - DHARMAPURI .pdf": "<drive-file-id>",

  // --- TRUST (Class 9) ---
  // "./Competitive Exams/TRUST/TRUST 2025 SCHEDULE - DHARMAPURI-3.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/TRUST - UNIT TEST - 1 EM 28.8.2 025.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/TRUST - UNIT TEST-1 TM 28.8.2025.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/TRUST UNIT TEST-2 EM 4.9.2025.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/TRUST UNIT TEST-2 TM 4.9.2025.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/TRUST - UNIT TEST 3 ( 02.10.2025 ) EM.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/TRUST - UNIT TEST 3 ( 02.10.2025 )TM.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/TRUST UNIT 4 - EM 09.10.2025.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/TRUST UNIT 4 -TM 09.10.2025.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/TRUST UNIT 5 - EM 16.10.2025.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/TRUST UNIT 5 - TM 16.10.2025.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/TRUST UNIT 6 EM ( 23.10.2015 ).pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/TRUST UNIT 6 TM ( 23.10.2025).pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/TRUST UNIT 7 - EM 30.10.2025.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/TRUST UNIT 7 - TM 30.10.2025.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/KEY ANSWER 28.8.2025-1.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/KEY ANSWER UNIT TEST -2 ( 4.9.2025).pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/KEY ANSWER UNIT TEST -3 ( 02.10.2025).pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/KEY ANSWER UNIT TEST -4 ( 09.10.2025).pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/Trust Unit4 Maths Answer 09.10.2025.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/KEY ANSWER UNIT TEST -5 ( 16.10.2025).pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/KEY ANSWER UNIT TEST - 6 ( 23.10.2025).pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/KEY ANSWER UNIT TEST - 7 ( 30.10.2025).pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/KEY ANSWER FOR TRUST FULL TEST 1.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/KEY ANSWER FULL TEST 1.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/KEY ANSWER FOR TRUST FULL TEST 2.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/KEY ANSWER FOR TRUST FULL TEST 3.pdf": "<drive-file-id>",
  // "./Competitive Exams/TRUST/KEY ANSWER FOR TRUST FULL TEST 4.pdf": "<drive-file-id>",

  // --- CMTSE (Class 10) ---
  // "./Competitive Exams/CMTSE/DHARMAPURI DISTRICT - CMTSE - 2025-2026 REVISED SCHEDULE.pdf": "<drive-file-id>",
  // "./Competitive Exams/CMTSE/DHARMAPURI DISTRICT - CMTSE - 2025-2026 SCHEDULE-1.pdf": "<drive-file-id>",
  // "./Competitive Exams/CMTSE/CM TALENT EXAM TEST 1.pdf": "<drive-file-id>",
  // "./Competitive Exams/CMTSE/CM TALENT EXAM TEST 2.pdf": "<drive-file-id>",
  // "./Competitive Exams/CMTSE/CM TALENT EXAM TEST 4.pdf": "<drive-file-id>",
  // "./Competitive Exams/CMTSE/CM TALENT EXAM TEST 5.pdf": "<drive-file-id>",
  // "./Competitive Exams/CMTSE/CM TALENT EXAM TEST 6.pdf": "<drive-file-id>",
  // "./Competitive Exams/CMTSE/CMTSE MODEL EXAM II - PAPER 2 (SCIENCE AND SOCIAL SCIENCE) - 2026.pdf": "<drive-file-id>",
  // "./Competitive Exams/CMTSE/MODEL MATHS  PAPER 2  FULL TEST(12.01.2026).pdf": "<drive-file-id>",
  // "./Competitive Exams/CMTSE/CM TALENT EXAM 2 ANSWER KEY.pdf": "<drive-file-id>",
  // "./Competitive Exams/CMTSE/CM TALENT EXAM 6 ANSWER KEY.pdf": "<drive-file-id>",
  // "./Competitive Exams/CMTSE/MODEL SCIENCE AND SOCIAL SCIENCE PAPER 2 FULL TEST 2 KEY(13.01.2026).pdf": "<drive-file-id>"
};
