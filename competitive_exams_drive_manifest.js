// Maps local "Competitive Exams/<Exam>/<file>.pdf" path -> Google Drive file ID.
// Same pattern as papers_drive_manifest.js / textbooks_drive_manifest.js: PDFs are
// hosted on Drive (not in the git repo, see .gitignore) to stay under GitHub file size limits.
const DRIVE_CE = {
  // --- NMMS (Class 8) ---
  "./Competitive Exams/NMMS/DHARMAPURI NMMS PLANNER 2026 - 27.pdf": "1k8ZdYLdeAYFnU3bGNbeDe4SlODmKzO2k",
  "./Competitive Exams/NMMS/NMMS EXAM GOVT BOOK.pdf": "12TUcCuApQ_hhb2l8Cez-C9LaPDtEzhcW",
  "./Competitive Exams/NMMS/NMMS Maths.pdf": "1n9Shm9pyLCkZcJ9F7Q_tFxRTNgZleil7",
  "./Competitive Exams/NMMS/NMMS Science.pdf": "1s9Av2Fz0PR_tdejcWqKXRWLWN-e39IM5",
  "./Competitive Exams/NMMS/NMMS Social Science.pdf": "1b08mPNPCyUOEc0BYNxxQ_mOv1fDYkNFX",
  "./Competitive Exams/NMMS/OMR SHEET - DHARMAPURI .pdf": "1oG0JN7rDJlpwSoJXmePiLQD2YAExMFsT",
  "./Competitive Exams/NMMS/Talent Exam.pdf": "1_teluFfQrnBJ-pIWAsyCgZwhyY3Bzn2L",

  // --- TRUST (Class 9) ---
  "./Competitive Exams/TRUST/TRUST 2025 SCHEDULE - DHARMAPURI-3.pdf": "1ggrrvQCyg-hfwLYUq_7TFLyhsyQsQMsz",
  "./Competitive Exams/TRUST/TRUST - UNIT TEST - 1 EM 28.8.2 025.pdf": "12UtKJzEgMibYAyMBd4Jdd4rOdcDFWPcv",
  "./Competitive Exams/TRUST/TRUST - UNIT TEST-1 TM 28.8.2025.pdf": "1tc7T4agBuLkYKeQhnUgFxUlE_01gnOSw",
  "./Competitive Exams/TRUST/TRUST UNIT TEST-2 EM 4.9.2025.pdf": "1zDV6L4kGh73d2RnD7vyBhGryCBY9a9oW",
  "./Competitive Exams/TRUST/TRUST UNIT TEST-2 TM 4.9.2025.pdf": "1vGPtRlyrE8_QXC4eHqS-BbR7Pl17TnjE",
  "./Competitive Exams/TRUST/TRUST - UNIT TEST 3 ( 02.10.2025 ) EM.pdf": "1m79PorASnb9ZIejwh0mrPnjpLvNHfjPG",
  "./Competitive Exams/TRUST/TRUST - UNIT TEST 3 ( 02.10.2025 )TM.pdf": "1_2r20sS9znPCQQUMTJv0C2aAQkPUKiEv",
  "./Competitive Exams/TRUST/TRUST UNIT 4 - EM 09.10.2025.pdf": "1NQkZrgGxq5CZOc_7onqjVWLVR-j5Cx72",
  "./Competitive Exams/TRUST/TRUST UNIT 4 -TM 09.10.2025.pdf": "1axOx4bUJPUWPgkOatoZsAXUpGFCVHTci",
  "./Competitive Exams/TRUST/TRUST UNIT 5 - EM 16.10.2025.pdf": "1sb9LYaOzgzsw3nL12Y14SZFMRp5BMtzF",
  "./Competitive Exams/TRUST/TRUST UNIT 5 - TM 16.10.2025.pdf": "1rQW7JJMigdOTOMiQR_6FB94TpV7tq2wK",
  "./Competitive Exams/TRUST/TRUST UNIT 6 EM ( 23.10.2015 ).pdf": "1OpUhlVQEyNwIUAvY5fL3KENTT9jKFKKD",
  "./Competitive Exams/TRUST/TRUST UNIT 6 TM ( 23.10.2025).pdf": "16L7TRcA6s7A_eM1PZTgjaZeH154HXxwU",
  "./Competitive Exams/TRUST/TRUST UNIT 7 - EM 30.10.2025.pdf": "1PzZj2XQNDHjHVCWRsp6oEHw3MBPuOV6N",
  "./Competitive Exams/TRUST/TRUST UNIT 7 - TM 30.10.2025.pdf": "1EsH5dy2sdD3ByiJt88C2JxKstF_IKGBv",
  "./Competitive Exams/TRUST/KEY ANSWER 28.8.2025-1.pdf": "1qaO3umBSLqflRMYy5DO9Qnmfssi7G-8E",
  "./Competitive Exams/TRUST/KEY ANSWER UNIT TEST -2 ( 4.9.2025).pdf": "1Q4kbipxiD8j5B3l2_-5p-x68J5jGmC9b",
  "./Competitive Exams/TRUST/KEY ANSWER UNIT TEST -3 ( 02.10.2025).pdf": "1cKewJHLYvzaV3YBzI26Gqxhx9RnJMoPI",
  "./Competitive Exams/TRUST/KEY ANSWER UNIT TEST -4 ( 09.10.2025).pdf": "1YQWz1riMPHHJ2qmrlLy03PoS1geMSIMu",
  "./Competitive Exams/TRUST/Trust Unit4 Maths Answer 09.10.2025.pdf": "19WPK6gyNbLiFUXYwRTJUtXq5OLHcd02Q",
  "./Competitive Exams/TRUST/KEY ANSWER UNIT TEST -5 ( 16.10.2025).pdf": "1Vj9SnlRDd1LzSnZoZ7KwRrJVzQk-p7r5",
  "./Competitive Exams/TRUST/KEY ANSWER UNIT TEST - 6 ( 23.10.2025).pdf": "13QZ4plYHnTmE23DjHdfnnwM3e-4fWA2M",
  "./Competitive Exams/TRUST/KEY ANSWER UNIT TEST - 7 ( 30.10.2025).pdf": "1Sg-B83sQMpqzD-chjRWttGg6hNJ-vaIB",
  "./Competitive Exams/TRUST/KEY ANSWER FOR TRUST FULL TEST 1.pdf": "1P_QHOGrVLu030-Xj6ApjXTZkRadJYEib",
  "./Competitive Exams/TRUST/KEY ANSWER FULL TEST 1.pdf": "1LwJCg7P_hT6UwobKc05NplsjK8vlOKOY",
  "./Competitive Exams/TRUST/KEY ANSWER FOR TRUST FULL TEST 2.pdf": "1ItQmujlO-oG3KrKpzItFo4H2iz3GH_5_",
  "./Competitive Exams/TRUST/KEY ANSWER FOR TRUST FULL TEST 3.pdf": "1AEAyCRXGab8tEQVW-rxJIP4V0aLk5hFx",
  "./Competitive Exams/TRUST/KEY ANSWER FOR TRUST FULL TEST 4.pdf": "1oK9RvwdEKFULdC4HS_yAKDWARVt63mnQ",

  // --- CMTSE (Class 10) ---
  "./Competitive Exams/CMTSE/DHARMAPURI DISTRICT - CMTSE - 2025-2026 REVISED SCHEDULE.pdf": "1OVBVAhyQPTzxRjAPPUVanxZoATEF0G3J",
  "./Competitive Exams/CMTSE/DHARMAPURI DISTRICT - CMTSE - 2025-2026 SCHEDULE-1.pdf": "19-_puSrqFApywg27ixaXILNYcxzmQ7f",
  "./Competitive Exams/CMTSE/CM TALENT EXAM TEST 1.pdf": "10wFfbBayXTu94GXLgfJi0XQeEOFVJp4s",
  "./Competitive Exams/CMTSE/CM TALENT EXAM TEST 2.pdf": "17qUJQKrnJ3kqeiTooZcCT6vjavyACTb3",
  "./Competitive Exams/CMTSE/CM TALENT EXAM TEST 4.pdf": "1_ZJdaBWe21WUpTgWNDbIdhQAW8f6LM6P",
  "./Competitive Exams/CMTSE/CM TALENT EXAM TEST 5.pdf": "1fi0VhdX0g7MgjXb520c1ukJDkNvexlOx",
  "./Competitive Exams/CMTSE/CM TALENT EXAM TEST 6.pdf": "1ItLWMUdWQkU5cIOxEFBAnuCjf3Jy92fI",
  "./Competitive Exams/CMTSE/CMTSE MODEL EXAM II - PAPER 2 (SCIENCE AND SOCIAL SCIENCE) - 2026.pdf": "1ZHXmxZkyNt9P_w7G8KstyvYUBvMRdthK",
  "./Competitive Exams/CMTSE/MODEL MATHS  PAPER 2  FULL TEST(12.01.2026).pdf": "1A6VZB1YsmWXkisBv6m0JVYrJIvpmGFiJ",
  "./Competitive Exams/CMTSE/CM TALENT EXAM 2 ANSWER KEY.pdf": "1-ANtco4-mSYJBESx2GuoVB3kMwR4WvHN",
  "./Competitive Exams/CMTSE/CM TALENT EXAM 6 ANSWER KEY.pdf": "1NTO4MNK5_AFmzfTi1QC3XIBcynN6NIH9",
  "./Competitive Exams/CMTSE/MODEL SCIENCE AND SOCIAL SCIENCE PAPER 2 FULL TEST 2 KEY(13.01.2026).pdf": "1LUxz_QS5W59V-6LygOYXJFpt0uct9xce"
};
